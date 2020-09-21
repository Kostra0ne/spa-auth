import axios from "axios";
import auth from "@/auth";
import { apiHandler } from "./../api/handler";

const handler = apiHandler();

export default {
  namespaced: true,
  state: {
    users: [],
    currentUser: null,
  },
  getters: {
    all(state) {
      return state.users;
    },
    current(state) {
      return state.currentUser;
    },
  },
  // https://vuex.vuejs.org/fr/api/#mutations
  // RAPPEL : les mutations (synchrones) sont commit
  mutations: {
    // les prennent toujours le state en 1er argument, et la valeur d'update en 2nd argument
    setCurrent(state, infos) {
      state.currentUser = { ...infos }; // on créé un nouvel objet tout neuf, contenant les infos de l'user qui vient de se signin
    },
    setUsers(state, users) {
      state.users = users;
    },
    unsetCurrent(state) {
      state.currentUser = null;
    },
  },
  //https://vuex.vuejs.org/fr/api/#actions
  // RAPPEL : les actions (asynchrones) sont dispatch
  actions: {
    signin(context, userInfos) {
      return new Promise((resolve, reject) => {
        handler
          .post("/api/auth/signin", userInfos)
          .then((res) => {
            auth.setLocalAuthToken(res.data.token);
            // context.commit permet de modifier le state du store
            // de façon synchrone
            context.commit("setCurrent", res.data.user);
            resolve(res);
          })
          .catch((err) => {
            auth.deleteLocalAuthToken();
            context.commit("setCurrent", null);
            reject(err);
          });
      });
    },
    async signup(context, userInfos) {
      console.log("fooo");
      // ci)dessus: context représente tout le store, il est obligatoire...
      try {
        await handler.post("/api/auth/signup", userInfos);
      } catch (err) {
        // problème au signup ...
        const method = err.response.status.toString().startsWith("4")
          ? "warn"
          : "error"; // en fonction du code de réponse http...
        console[method](err.response.data); // détermine si on utilise console.warn OU console.error pour log la réponse
      }
    },
    signout(context) {
      // todo : kill token server side
      auth.deleteLocalAuthToken();
      context.commit("unsetCurrent");
      console.log("router ???", this.$router);
      // vm.$router.push({ path: signinPath }).catch((error) => { // si un erreur survient ...
      //   console.info(error.message); // todo : afficher le message dans une alert box
      // });
    },
    getUserByToken(context) {
      axios
        .get("api/auth/get-user-by-token", {
          withCredentials: true,
          // ci dessus: TRES IMPORTANT : sans l'option withCredentials, le token (JWT)
          // n'est pas envoyé avec la requête et le serveur ne saura pas que l'user est déjà connecté
        })
        .then((res) => context.commit("setCurrent", res.data))
        .catch((err) => console.error(err.message));
    },
    getAll(context) {
      return new Promise((resolve, reject) => {
        axios
          .get("api/users/")
          .then((res) => {
            context.commit("setUsers", res.data); // on modifie le store user avec la liste de tous les users retournés par backend
            resolve(res); // promesse tenue !
          })
          .catch((err) => {
            reject(err); // promesse non tenue !
          });
      });
    },
    update(context, userInfos) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`/api/users/${userInfos._id}`, userInfos)
          .then((res) => {
            context.commit("setCurrent", res.data);
            resolve(res);
          })
          .catch((err) => {
            auth.deleteLocalAuthToken();
            context.commit("setCurrent", null);
            reject(err);
          });
      });
    },
    async updateAvatar(context, avatarFile) {
      try {
        const updatedUser = await axios.patch(
          `/api/users/${context.getters.current._id}/avatar`,
          avatarFile
        );
        context.commit("setCurrent", updatedUser.data);
      } catch (err) {
        console.error(err);
      }
    },
  },
};

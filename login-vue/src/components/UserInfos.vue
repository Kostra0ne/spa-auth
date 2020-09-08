<template>
  <div v-if="currentUser !== null" id="user-infos">
    <h3 class="title">My infos</h3>
    <font-awesome-icon
      v-if="!isEditMode"
      @click="toggleEditMode"
      title="edit"
      class="is-clickable icon cog"
      icon="cog"
    />
    <font-awesome-icon
      v-if="isEditMode"
      @click="() => {
          toggleEditMode();
          updateUser()
        }"
      title="save"
      class="is-clickable icon save"
      icon="save"
    />
    <p
      class="info"
      :contenteditable="isEditMode"
      :class="{'is-active': isEditMode}"
      @keyup="(e) => handleInput(e, 'first_name')"
    >{{currentUser.first_name }}</p>
    <p
      class="info"
      :contenteditable="isEditMode"
      :class="{'is-active': isEditMode}"
      @keyup="(e) => handleInput(e, 'last_name')"
    >{{currentUser.last_name }}</p>
    <p
      class="info"
      :contenteditable="isEditMode"
      :class="{'is-active': isEditMode}"
      @keyup="(e) => handleInput(e, 'email')"
    >{{currentUser.email }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditMode: false,
      updatedUser: {
        first_name: "",
        last_name: "",
        email: ""
      }
    };
  },
  methods: {
    handleInput(evt, key) {
      this.updatedUser[key] = evt.target.textContent;
    },
    toggleEditMode() {
      this.isEditMode = !this.isEditMode;
    },
    updateUser() {
      const payload = { _id: this.$props.currentUser._id };
      for (let prop in this.updatedUser) {
        if (this.updatedUser[prop]) {
          payload[prop] = this.updatedUser[prop];
        }
      }
      console.log(payload);
      this.$store.dispatch("user/update", payload);
    }
  },
  props: ["currentUser"]
};
</script>

<style scoped>
#user-infos {
  position: relative;
  border: 1px solid var(--color-dark);
  padding: 20px;
  max-width: 540px;
}

#user-infos .info.is-active {
  border: 1px solid forestgreen;
  border-radius: 0.3rem;
}

#user-infos .info {
    padding: 6px;
}

#user-infos .icon {
  position: absolute;
  top: 6px;
  right: 6px;
}
</style>
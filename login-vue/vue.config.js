module.exports = {
    devServer: {
      proxy: "http://localhost:8888",
      host: "localhost",
      publicPath: "http://localhost:8080" // utile pour supprimer l'erreur sockjs-node (Not Found) dans la console du navigateur
    },
  };
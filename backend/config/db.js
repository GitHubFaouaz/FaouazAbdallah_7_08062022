const mongoose = require('mongoose');// Plugin Mongoose pour se connecter à la data base Mongo Db

mongoose.connect('mongodb+srv://'+ process.env.DB_USER_PASS + '@cluster0.947h4.mongodb.net/projet7?retryWrites=true&w=majority',//`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_passeword}@${process.env.DB_CLUSTER }.mongodb.net/${process.env.DB_NAME }?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch((err) => console.log('Connexion à MongoDB échouée !', err)); 

  

  
const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');
 const { isEmail } = require('validator');


const userSchema = mongoose.Schema(
    {
    email:{
        type:String,
        require:true,
        validate:[isEmail],
        lowercase:true,// tout en minuscule
        trim:true , 
        unique : true
    },
    password:{
        type:String,
        require:true,
        // max:1024,// vu que le mot de passe sera crypté donc une centaine de lettre et autre 
        // minlength:6,
    },
   picture: {
      type: String,
      default: "./uploads/profil/random-user.png" // on mettra une photo par defaut 
    },
    bio :{
      type: String,
      max: 1024,
    },
    followers: { //les gens qui suivent la personne
      type: [String]// des id id id des suiveurs 
    },
    following: { //les gents que l'utilisateur suit  
      type: [String] 
    },
    likes: {
      type: [String]
    }

},
    //  le timestamps a la fin du tableau 
{
    timestamps: true, //Les schémas Mongoose prennent en charge une timestamps option. Si vous définissez timestamps: true, Mongoose ajoutera deux propriétés de type Dateà votre schéma :createdAt: une date représentant la date de création de ce document
                      // updatedAt: une date représentant la dernière mise à jour de ce document
  }
  
);




// Applique ce validator au userSchema avant d'en faire un model unique et aussi  avoir des erreurs lisibles de la part de mongooseDB)
// userSchema.plugin(uniqueValidator);

// Ce plugin tire parti des middlewares de gestion des erreurs récemment introduits sur mongoose , il identifie avec succès le chemin (ou le champ) défaillant et la valeur correctement, et les ajoute dans le hachage des erreurs



module.exports = mongoose.model('user',userSchema); 
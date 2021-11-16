const admin=require('firebase-admin');
const serviceAccount = require('./larockola-5cc46-8731946b4caf.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

module.exports=db;
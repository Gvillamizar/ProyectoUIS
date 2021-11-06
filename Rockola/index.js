const admin = require('firebase-admin');

const serviceAccount = require('./larockola-5cc46-331302-19f6ffa3e41f.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
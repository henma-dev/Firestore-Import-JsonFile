const admin = require('./node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://xxx.firebaseio.com" // your url
});

var fireStoreService = require('firestore-export-import');
const jsonToFirestore = async () => {
    try {
        await fireStoreService.restore('.interface/proof.json');
    } catch (e) {
        console.log(e);
    }
}
jsonToFirestore();
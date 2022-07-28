# Firestore Import JsonFile

## Why
I want to INSERT directly into Firestore in json format!

## How to Use
After clone this repositry:
```
npm install
```

### Reserve
 - You have to sign in Firebase, make  'Firestore'
 - Copy 'serviceAccountKey.json' with your information
 - index.js ->databaseURL: "https://xxx.firebaseio.com" // your url
 - File name should be "proof.json"
 - Set in ".interface"folder

### Execute

```
cd yourDirectory
node index.js
```

Let's see what's in the firestore.

That's all.
import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCPP0qG9J6fHWAzbZvLOuxJV2GarKjmk_k",
    authDomain: "sympa-clothing.firebaseapp.com",
    projectId: "sympa-clothing",
    storageBucket: "sympa-clothing.appspot.com",
    messagingSenderId: "138517807866",
    appId: "1:138517807866:web:b1532a65fd420a46a6bf43"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if(!userAuth)return

    const userRef = firestore.doc(`user/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(err){
            console.log("error catching user", err.message)
        }
    }

    return userRef
}

firebase.initializeApp(config)

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionKey);
    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })

    await batch.commit()

}

export const convertCollectionsSnapshotToMap = (collections)=>{
    const transformedCollection = collections.docs.map(doc=>{
        const {title, items} = doc.data()

        return {
            routeName: encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        }
    })
    
////********************** */
    transformedCollection.reduce((accumulator, collection)=>{
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator
    }, {})
    // return transformedCollection

}

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle=()=> auth.signInWithPopup(provider)

export default firebase
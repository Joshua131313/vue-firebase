import { db } from '@/Fire';
import firebase from 'firebase/compat/app';

export const generateID = () => {
  return db.collection('users').doc().id
}
export const createUserCollection = (userid, name, email, profilePic='', phoneNumber='', provider=false) => {
  db.collection('users').doc(userid).set({
    created: new Date(),
    uid: userid,
    name: name,
    searchName: name.toLowerCase(),
    phoneNumber: phoneNumber,
    email: email,
    provider
  }).catch(err=> {console.log(err)})
}

export const handleUnload = () => {
  const user = firebase.auth().currentUser

  db.collection('users').doc(user.uid).set({lastActive: new Date()}, {merge: true})
}

export const loginwithProvider = (provider, history) => {
  provider.addScope('email');
  firebase.auth()
  .signInWithPopup(provider)
  .then((result)=>{
    if(result.additionalUserInfo.isNewUser) {
      const user = result.user  
      createUserCollection(user.uid, user.displayName, user.email, user.photoURL, user.phoneNumber,  true)
    }
    history()
  })
}

export const handleUpdateUserInfo = (userid, updated, objKey) => {
  db.collection('users').doc(userid).set({
    [objKey]: updated
  }, {merge: true})
}

export const handleLogout = () =>{   
  firebase.auth().signOut().then(()=> {
    window.location.reload()
  })
}


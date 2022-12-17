<script setup>
import AuthContainer from "@/app/containers/AuthContainer/AuthContainer.vue";
import { auth } from "@/Fire";
import { StoreContextUpdate } from "@/StoreContext";
import { createUserCollection } from "@/app/services/DBFunctions";
import { inject } from "vue";
import { useRouter } from "vue-router";

const update = inject(StoreContextUpdate)
const props = defineProps({
  header: String,
});
const router = useRouter()

const handleRegister = (authStates) => {
    const {name, email, password, updateAuth} = authStates
    updateAuth('emailError', '')
    updateAuth('passwordError', '')

    auth.createUserWithEmailAndPassword(email, password)
    .then((user)=>{
        createUserCollection(user.uid, name, email)
        updateAuth('loading', true)
    })
    .catch((err)=>{
      switch(err.code) {
        case "auth/email-already-in-use":
            updateAuth('emailError', err.message)
         break
        case "auth/invalid-email":
            updateAuth('emailError', err.message)
        break
        case "auth/weak-password":
             updateAuth('passwordError', err.message)
        break
        default: 
             updateAuth('emailError', err.message)
        setTimeout(()=>{
            updateAuth('emailError', '')
            updateAuth('passwordError', '')
        }, 4000)
      }
    })
    auth.onAuthStateChanged(user => {
      if(user) {
          user.updateProfile({
            displayName: name
          })
          user.sendEmailVerification()
          router.push('/email-verification')
        }
        else {
          update('user', null)
      }
    })
}   

</script>

<template>
  <AuthContainer 
    title="Register"
    :btnText1="{
            text: 'Already have an account?',
            link: '/login'
    }"
    :mainBtn="{
            text: 'Register',
            onClick: (authStates) => handleRegister(authStates)
    }"

  />
</template>

<style lang="css" scoped></style>

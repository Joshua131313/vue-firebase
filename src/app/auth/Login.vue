<script setup>
import { auth } from "@/Fire";
import AuthContainer from "@/app/containers/AuthContainer/AuthContainer";
import { useRouter } from "vue-router";

const props = defineProps({
  header: String,
});
const router = useRouter()

const handleLogin = (authStates) => {
    const {email, password, updateAuth} = authStates
    updateAuth('emailError', '')
    updateAuth('passwordError', '')

    auth.signInWithEmailAndPassword(email, password)
    .then((user)=>{
        if(user.user.emailVerified) {
            updateAuth('loading', true)
            router.push({
                path: '/dashboard',
                replace: true
            })
        }
        else {
            router.push({
                path: '/email-verification',
            })
        }
    })
    .catch(err => {
        switch(err.code) {
            case "auth/invalid-email":
              updateAuth('emailError', err.message)
            break
            case "auth/user/disabled":
              updateAuth('emailError', 'Email is disabled')
            case "auth/user-not-found":
              updateAuth('emailError', 'Email does not exist')
            break
            case "auth/wrong-password":
              updateAuth('passwordError', 'Incorrect Password')
            break
            default: 
        } 
        setTimeout(()=>{
            updateAuth('passwordError', '')
            updateAuth('emailError', '')
        },4000) 
    })
}   

</script>

<template>
  <AuthContainer 
    :isLogin="true" 
    :btnText1="{
            text: 'Forgot password',
            link: '/forgot-password'
    }"
    :btnText2="{
            text: `Don't have an account?`,
            link: '/register'
    }"
    :mainBtn="{
            text: 'Login',
            onClick: (authStates) => handleLogin(authStates)
    }"
  />
</template>

<style lang="css" scoped></style>

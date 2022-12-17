<script setup>
import { auth } from "@/Fire";
import AuthContainer from "@/app/containers/AuthContainer/AuthContainer";
import { useRouter } from "vue-router";
import { reactive, watchEffect } from "vue";

const props = defineProps({
  header: String,
});
const state = reactive({
    count: 0
})
const user = auth.currentUser
const router = useRouter()

const handleResendEmail = () => {
    user.sendEmailVerification()
}  
const interval = () => {
    setTimeout(()=>{
        user.reload()
        if(user.emailVerified) {
          router.push('/dashboard')
        }
         state.count += 1
       }, 5000)
}
watchEffect(()=> {
    interval()
})
</script>

<template>
  <AuthContainer 
    isEmailVerification
    title='Email Verification' 
    msg='Email verification sent to your email. Please verify and confirm your account. Check your junkmail.'
    :btnText1="{
            text: 'Go back',
            onClick: () => router.back()
    }"
    :mainBtn="{
            text: 'Resend email',
            onClick: () => handleResendEmail()
    }"
  />
</template>

<style lang="css" scoped></style>

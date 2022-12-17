<script setup>
import AuthContainer from "@/app/containers/AuthContainer/AuthContainer.vue";
import { auth } from "@/Fire";
import { useRouter } from "vue-router";

const props = defineProps({
  header: String,
});
const router = useRouter()

const handleSendEmail = (authStates) => {
    const {email} = authStates
  
    auth.sendPasswordResetEmail(email).then(()=> {
      alert('Reset email sent!')
    })
    .catch((error)=> {
      alert('Account does not exist!')
    })
}   

</script>

<template>
  <AuthContainer 
    :isForgotPassword="true" 
    title="Forgot password"
    :btnText1="{
            text: 'Go back',
            onClick: () => router.back(),
            link: ''
    }"
    :mainBtn="{
            text: 'Send email',
            onClick: (authStates) => handleSendEmail(authStates)
    }"

  />
</template>

<style lang="css" scoped></style>

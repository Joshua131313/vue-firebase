<script setup>
import { useRouter } from "vue-router";
import firebase from 'firebase/compat/app';
import { loginwithProvider } from '@/app/services/DBFunctions'
const props = defineProps({
  header: String,
});
const router = useRouter();
</script>

<template>
  <div
    class="googlebtn"
    @click="
      () =>
        loginwithProvider(new firebase.auth.GoogleAuthProvider(), () =>
          router.push({ path: '/dashboard', replace: true })
        )
    "
  >
    <img
      src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png"
      alt="google logo"
    />
    <span>Continue with Google</span>
  </div>
</template>

<style> 
    @import './AuthProviders.css' 
</style>

<script setup>

import { inject, reactive, toRefs, watch, watchEffect } from "vue";
import { StoreContextState } from "@/StoreContext";
import Logo from "@/components/Logo/Logo.vue";
import ImgLoaded from "@/components/ImgLoaded/ImgLoaded.vue";
import { RouterLink, useRoute, useRouter } from "vue-router";
import AuthInput from "./AuthInput.vue";
import GoogleBtn from './AuthProviders/GoogleBtn.vue'
import AppBtn from "@/components/AppBtn/AppBtn.vue";

const { user } = inject(StoreContextState);
const router = useRouter();
const state = reactive({
  name: "",
  email: "",
  password: "",
  passwordError: "",
  emailError: "",
  loading: false,
});
const updateAuth = (property, value) => {
    state[property] = value;
};
const authStates = {
  name: state.name,
  email: state.email,
  password: state.password,
  updateAuth
};
const props = defineProps({
  title: {
    default: 'Login',
    type: String
  },
  isLogin: Boolean,
  btnText1: Object,
  btnText2: Object,
  mainBtn: Object,
  isForgotPassword: Boolean,
  isEmailVerification: Boolean,
  msg: String,
});
watch(user, () => {
  if (user) {
    router.push({
      path: "/dashboard",
    });
  }
});

</script>

<template>
  <div className="authcontainer">
    <div className="leftside">
      <Logo />
      <img class="authbg" src="https://i.imgur.com/ClPGtzX.jpg" />
    </div>
    <div className="rightside">
      <div className="innerrightside">
        <div className="header flexcol">
          <RouterLink to="/" className="flexrow ac">
            <i className="fal fa-long-arrow-left"></i>
            <span>Return</span>
          </RouterLink>
          <h1>{{ title }}</h1>
        </div>
        <div
          v-if="!isForgotPassword && !isEmailVerification"
          className="authproviders"
        >
          <GoogleBtn  />
        </div>
        <form
          className="authform flex"
          @submit="
            (e) => {
              e.preventDefault();
              mainBtn.onClick(authStates);
            }
          "
        >
          <div v-if="!isEmailVerification" className="forminputs flex">
            <AuthInput
              v-if="!isLogin && !isForgotPassword"
              placeholder="full name"
              v-model:value="state.name"
            />
            <AuthInput
              placeholder="email"
              v-model:value="state.email"
              :error="emailError"
            />
            <AuthInput
              v-if="!isForgotPassword"
              type="password"
              placeholder="password"
              v-model:value="state.password"
              :error="passwordError"
            />
          </div>
          <span v-else className="verifyMessage">
            Email verification sent to your email. Please verify and confirm
            your account. Check your junkmail.
         </span>

          <div className="formbtns flexrow ac">
            <div className="textbtns flex">
              <RouterLink
                v-if="btnText1"
                :to="btnText1.link"
                @click="btnText1?.onClick()"
                class="textbtn"
              >
                {{btnText1.text}}
              </RouterLink>
              <RouterLink
                v-if="btnText2"
                :to="btnText2.link && btnText2.link"
                @click="btnText2?.onClick()"
                class="textbtn"
              >
                {{btnText2.text}}
              </RouterLink>
            </div>
            <AppBtn
              :text="mainBtn.text"
              :onClick="
                (e) => {
                  e.preventDefault();
                  mainBtn.onClick(authStates);
                }
              "
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
    @import './AuthContainer.css'
</style>
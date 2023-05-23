<template>
  <ion-page>
    <ion-content>
      <h2>Login</h2>
      <ion-input v-model="usuario.email" label="email" type="email"></ion-input>
      <ion-input
        v-model="usuario.passw"
        label="password"
        type="password"
      ></ion-input>
      <ion-button @click="logear">Login</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonInput, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonInput, IonContent },
  setup() {
    const store = useLoginStore();
    const { login } = store;
    return { login };
  },
  data() {
    return {
      usuario: { email: "", passw: "" },
    };
  },
  methods: {
    logear() {
      // consultar contra un backend
      // por ahora, hardcodeamos
      if ( this.usuario.email == "test@test.com" && this.usuario.passw == "123456") {
        this.login( {email:this.usuario.email, permissions: [] } )
        this.usuario = { email: "", passw: "" };
        this.$router.push("/");
      } else if(this.usuario.email == "admin@test.com" && this.usuario.passw == "123456") {
        this.login( {email:this.usuario.email, permissions: ['config', 'system', 'agregarRopa'] } )
        this.$router.push("/config");
      } else {
        alert("Credenciales invalidas");
      }
    },
  },
};
</script>

<style>
</style>
<template>
  <ion-page>
    <ion-content>
      <h2>Log out</h2>
      <ion-button @click="getout">Log out</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonButton, IonContent } from "@ionic/vue";
import { useLoginStore } from "../stores/login";

export default {
  components: { IonPage, IonButton, IonContent },
  setup() {
    const store = useLoginStore();
    const { logout } = store;
    return { logout };
  },
  data() {
    return {
    };
  },
  methods: {
    getout() {
        this.logout()
        this.usuario = { email: "", passw: "" };
        this.$router.push("/");
    }    
  },
};
</script>

<style>
</style>
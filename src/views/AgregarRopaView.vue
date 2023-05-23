<template>
    <ion-page>
        <ion-content>
            <h2>Agregar Ropa</h2>
            <br>
            <ion-input 
                label="Id" label-placement="stacked" v-model="ropa.id"></ion-input>
            <ion-input 
                label="Tipo" label-placement="stacked" v-model="ropa.tipo"></ion-input>
            <ion-input 
                label="Talle" label-placement="stacked" v-model="ropa.talle"></ion-input>
            <ion-input 
                label="Color" label-placement="stacked" v-model="ropa.color"></ion-input>
            <ion-input 
                label="Stock" label-placement="stacked" v-model="ropa.stock"></ion-input>
            <ion-input 
                label="Imagen" label-placement="stacked" v-model="ropa.imagen"></ion-input>
            <ion-button @click="agregar"> Agregar a la lista </ion-button>
        </ion-content>
        <ion-button @click="irahome" style="width:100px;">Ir a Home</ion-button>
    </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
import ropaServices from '../services/ropaServices'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      ropa: {}
    }
  },
  // mounted es para que apenas entro a System View se cargue todos los valores de la mockapi
  methods: {
    irahome() {
      this.$router.push("/");
    },
    async agregar() {
      try {
        await ropaServices.agregar(this.ropa);
      } catch(e) {
        console.log(e);
      }
    }
  }
}
</script>

<style>

</style>
<template>
  <ion-page>
    <h2 style="text-align:center">Sistema de Centennials</h2>
  </ion-page>
  <!-- Estoy en room 4 -->
  <!--
  <ion-page>
    <h2 style="text-align:center">Ropa</h2>
    <ion-content>
      <ion-list v-for="e in lista" :key="e.id" style="text-align:center">
        {{ e.id }}. {{ e.descripcion }} 
        <br>
        <ion-button @click="eliminar(e.id)"> Eliminar </ion-button>
        <ion-button @click="modificar(e.id)"> Modificar </ion-button>
      </ion-list>  
      <ion-input 
        label="Id" label-placement="stacked" v-model="elemento.id"></ion-input>
      <ion-input 
        label="Descripcion" label-placement="stacked" v-model="elemento.descripcion"></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
      <ion-button @click="cargarLista"> Cargar lista </ion-button>

    </ion-content>  
    <ion-button @click="irahome">Ir a Home</ion-button>
  </ion-page>
  -->
</template>

<script>
import {IonPage} from '@ionic/vue'
export default {
  components: { IonPage}
}
/*
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
import listaService from '../services/listaServices'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      lista: [],
      elemento: {}
    }
  },
  // mounted es para que apenas entro a System View se cargue todos los valores de la mockapi
  async mounted(){
    this.cargarLista();
  },
  methods: {
    irahome() {
      this.$router.push("/");
    },
    async agregar() {
      try {
        const elem = { ...this.elemento };
        await listaService.agregar(elem)
        await this.cargarLista();
      } catch(e) {
        console.log(e);
      }
    },
    async cargarLista(){
      try{
        this.lista = await listaService.cargar();
      } catch(e){
        console.log(e);
      }
    },
    async eliminar(id) {
      try{
        await listaService.eliminar(id);
        await this.cargarLista();
      }catch(e) {
        console.log(e);
      }
    },
    async modificar(id) {
      try{
        const elem = {...this.elemento}
        await listaService.modificar(id, elem)
        await this.cargarLista();
      }catch(e) {
        console.log(e);
      }
    }
  }
}
*/
</script>

<style>
/*
ion-button {
    --background: #93e9be;
    --background-hover: #9ce0be;
    --background-activated: #88f4be;
    --background-focused: #88f4be;

    --color: blue;

    --border-radius: 0;
    --border-color: #000;
    --border-style: solid;
    --border-width: 1px;

    --box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.25);

    --ripple-color: deeppink;

    --padding-top: 10px;
    --padding-bottom: 10px;
  }
*/  
</style>
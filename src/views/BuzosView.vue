<template>
  <ion-page>
    <h2 style="text-align:center">Buzos Centennials</h2>
    <ion-content>
      <ion-list v-for="b in buzos" :key="b.id" style="text-align:center">
        <div v-if="b.tipo == 'Buzo'">
          {{ b.id }}. {{ b.tipo }} / Talle:{{ b.talle }} / Color:{{ b.color }} / Stock: {{b.stock}} 
          <br>
          <!-- Preguntar al profesor como es el uso de la imagen -->
          <img :src="b.imagen" alt="Imagen del producto" style="max-width: 200px; max-height: 200px;">
          <br>
          <ion-button @click="comprar(b.id)"> Comprar </ion-button>
          <!-- Agregarle autorizacion al metodo eliminar -->
          <!-- <ion-button @click="eliminar(r.id)"> Eliminar </ion-button> -->
          <!-- Agregarle autorizacion al metodo modificar -->
          <!-- <ion-button @click="modificar(r.id)"> Modificar </ion-button> -->
        </div>
        <!--
        <ion-button @click="eliminar(e.id)"> Eliminar </ion-button>
        <ion-button @click="modificar(e.id)"> Modificar </ion-button>
        -->
      </ion-list>  
      <!-- Agregado de Buzos al MockApi -->
      <!--
      <h2>Agregar Ropa</h2>
      <br>
      <ion-input 
        label="Id" label-placement="stacked" v-model="buzo.id"></ion-input>
      <ion-input 
        label="Tipo" label-placement="stacked" v-model="buzo.tipo"></ion-input>
      <ion-input 
        label="Talle" label-placement="stacked" v-model="buzo.talle"></ion-input>
      <ion-input 
        label="Color" label-placement="stacked" v-model="buzo.color"></ion-input>
      <ion-input 
        label="Stock" label-placement="stacked" v-model="buzo.stock"></ion-input>
      <ion-input 
        label="Imagen" label-placement="stacked" v-model="buzo.imagen"></ion-input>
      <ion-button @click="agregar"> Agregar a la lista </ion-button>
      -->
      <ion-button @click="cargarLista"> Cargar lista </ion-button>

    </ion-content>  
    <ion-button @click="irahome" style="width:100px;">Ir a Home</ion-button>
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
// Este service se va a usar cuando corrija las autorizaciones
import configServices from '../services/configServices'
import ropaServices from '../services/ropaServices'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      buzos: [],
      buzo: {}
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
    async cargarLista(){
      try{
        this.buzos = await ropaServices.cargar();
      } catch(e){
        console.log(e);
      }
    },
    /*
     // Agregarle autorizacion al uso de este metodo
    async eliminar(id) {
      try{
        await buzosServices.eliminar(id);
        await this.cargarLista();
      }catch(e) {
        console.log(e);
      }
    },
    // Agregarle autorizacion al uso de este metodo
    async modificar(id) {
      try{
        const buzo = {...this.buzo};
        await buzosServices.modificar(id, buzo);
        await this.cargarLista();
      }catch(e) {
        console.log(e);
      }
    },
    */
    async comprar(id){
      try{
        const buzoAComprar = this.buzos.find(buzo => buzo.id === id);
        if(buzoAComprar.stock > 0){
          await configServices.comprar(buzoAComprar);
          await this.cargarLista();
        } else {
          alert('Este buzo ya no tiene mas stock. Siganos para que le informemos cuando vuelve a tener stock');
        }
      } catch(e){
        console.log(e);
      }
    }
  }
}
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
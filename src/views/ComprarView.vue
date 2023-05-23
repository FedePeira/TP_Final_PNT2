<template>
  <ion-page>
    <h2 style="text-align:center">Carrito</h2>
    <ion-content>
        <ion-list v-for="i in carrito" :key="i.id" style="text-align:center">
            <div>
                {{ i.id }}. {{ i.tipo }} / Talle:{{ i.talle }} / Color:{{ i.color }} / Stock: {{i.stock}} / Imagen:{{ i.imagen }}
                <br>
                <ion-button @click="eliminar(i.id)"> Eliminar </ion-button>
            </div>
        </ion-list>
        <ion-button @click="cargarLista"> Cargar lista </ion-button>
        <h3>Seleccionar metodo de pago</h3>
        <!-- 
            Meter metodos de pago
         -->
        <ion-button @click="comprar">Finalizar Compra</ion-button>
    </ion-content>  
    <ion-button @click="irahome" style="width:100px;">Ir a Home</ion-button>
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
import configServices from '../services/configServices'


export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
        carrito: [],
        item:{}
    }
  },
  async mounted(){
    this.cargarLista();
  },
  methods: {
    irahome() {
      this.$router.push("/");
    },
    async cargarLista(){
      try{
        this.carrito = await configServices.cargar();
      } catch(e){
        console.log(e);
      }
    },
    async eliminar(id) {
      try{
        await configServices.eliminar(id);
        await this.cargarLista();
      }catch(e) {
        console.log(e);
      }
    },
  }
}
</script>

<style>

</style>
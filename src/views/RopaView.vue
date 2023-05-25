<template>
  <ion-page>
    <section class="shop container">
        <h2 style="text-align:center">Ropa Centennials</h2>
        <content class="shop-content" v-for="r in ropa" :key="r.id">
            <div class="product-box">
                <div>
                    <img href="./img/buzo.hoodieblanco.webp" alt="Imagen del producto"  class="product-img">
                    <h3 class="product-title">{{ r.tipo }}</h3>
                    <span class="detalle">{{ r.stock }} Stock</span>
                    <span class="detalle">{{ r.talle }}</span>
                    <span class="detalle">{{ r.color }}</span>
                    <span class="detalle">$45</span>
                </div>
                <ion-button @click="comprar(r.id)"> Comprar </ion-button>
            </div>

        </content>  
        <ion-button @click="cargarLista"> Cargar lista </ion-button>
        <ion-button @click="irahome" style="width:100px;">Ir a Home</ion-button>
    </section>
  </ion-page>
</template>

<script>
import {IonPage, IonButton, IonContent, IonInput, IonList} from '@ionic/vue'
// Este service se va a usar cuando corrija las autorizaciones
import configServices from '../services/configServices'

export default {
  components: { IonPage, IonButton, IonContent, IonInput, IonList},
  data() {
    return {
      ropa: [],
      producto: {},
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
        this.ropa = await configServices.cargarRopa();
      } catch(e){
        console.log(e);
      }
    },
    async comprar(id){
      try{
        const productoAComprar = this.ropa.find(i => i.id === id);
        if(productoAComprar.stock > 0){
          await configServices.comprarCarrito(productoAComprar);
          await this.cargarLista();
        } else {
          alert('Este producto ya no tiene mas stock. Siganos para que le informemos cuando vuelve a tener stock');
        }
      } catch(e){
        console.log(e);
      }
    }
  }
}
</script>

<style>
.container{
    max-width: 1068px;
    margin: auto;
    width: 100%;
}
section{
    padding: 0.2rem 0 3rem;
}
.product-box{
    position: relative;
}
.product-box:hover{
    padding: 5px;
    border: 2px solid black;
    transition: 0.4s;
}
.product-img{
    width: 100%;
    height: auto;
    margin-bottom: 0.5rem;
}
.product-title{
    font-size: 1.1rem;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}
.detalle{
    font-weight: 500;
    margin: 10px;
}

</style>
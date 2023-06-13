<template>
  <ion-page>
    <section class="shop container">
        <h2 style="text-align:center">Carrito</h2>
        <content class="shop-content" v-for="r in carrito" :key="r.id">
            <div class="product-box">
                <div>
                    <img href="./img/buzo.hoodieblanco.webp" alt="Imagen del producto"  class="product-img">
                    <h3 class="product-title">{{ r.tipo }}</h3>
                    <span class="detalle">{{ r.stock }} Stock</span>
                    <span class="detalle">{{ r.talle }}</span>
                    <span class="detalle">{{ r.color }}</span>
                    <span class="detalle">$45</span>
                </div>
                <ion-button @click="eliminar(r.id)"> Eliminar </ion-button>
            </div>
        </content>
        <h3>Seleccionar metodo de pago</h3>
            <!-- 
                Meter metodos de pago
            -->
        <ion-button @click="comprar">Finalizar Compra</ion-button>  
        <ion-button @click="irahome" style="width:100px;">Ir a Home</ion-button>  
    </section>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import configServices from '../services/configServices'


export default {
  components: {
    IonPage,
    IonContent,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
  },
  data() {
    return {
        cart: [],
        product:{}
    }
  },
  async mounted(){
    this.loadLista();
  },
  methods: {
    irahome() {
      this.$router.push("/");
    },
    async loadLista(){
      try{
        this.cart = await configServices.loadCart();
      } catch(e){
        console.log(e);
      }
    },
    async delete(id) {
      try{
        await configServices.deleteFromCart(id);
        alert(`Product delete from cart`)
        await this.loadCart();
      }catch(e) {
        console.log(e);
      }
    },
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
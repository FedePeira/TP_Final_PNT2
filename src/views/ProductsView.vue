<template>
  <ion-page>
    <h1>Here are our products.</h1>
    <ion-content>
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/pants"
        >Pants</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/shirts"
        >Shirts</ion-button
      >
      <ion-button
        class="clothes-button"
        fill="outline"
        size="small"
        router-link="/products/shoes"
        >Hoodys</ion-button
      >
      <ion-grid>
        <ion-row>
          <ion-col v-for="p in products" :key="p.id">
            <ion-card>
              <img
                alt="Silhouette of mountains"
                src="https://ionicframework.com/docs/img/demos/card-media.png"
              />
              <ion-card-header>
                <ion-card-title>{{ p.tipo }}</ion-card-title>
                <ion-card-subtitle>Card Subtitle</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing
                more, nothing less.
              </ion-card-content>
              <ion-button @click='chooseProduct(p.id)'>Add To Cart</ion-button>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
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
// Este service se va a usar cuando corrija las autorizaciones
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
      products: [],
      product: {},
    }
  },
  // mounted es para que apenas entro a System View se cargue todos los valores de la mockapi
  async mounted(){
    this.loadList();
  },
  methods: {
    irahome() {
      this.$router.push("/");
    },
    async loadList(){
      try{
        this.products = await configServices.loadList();
      } catch(e){
        console.log(e);
      }
    },
    async chooseProduct(id){
      try{
        const productCart = this.products.find(i => i.id === id);
        if(productCart.stock > 0){
          await configServices.addtToCart(productCart);
          productCart.stock -= 1;
          alert(`${productCart.tipo} added to cart`)
          await this.loadList();
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
.clothes-button {
  --border-radius: 7px;
}
ion-card{
  border-radius: 10px;
  max-width: 300px;
  min-width: 200px;
}
</style>
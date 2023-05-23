<template>
  <ion-page>
    <h2>Details</h2>
    {{ $route.params.number }}
  </ion-page>  
</template>

<script>
import {IonPage} from '@ionic/vue'
export default {
  components: { IonPage}
}
</script>

<style>

</style>
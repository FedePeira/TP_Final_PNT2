<script>
import { RouterLink, RouterView } from 'vue-router'
import { IonApp, IonHeader, IonRouterOutlet, IonImg } from '@ionic/vue'
import { useLoginStore} from './stores/login'
import { storeToRefs } from 'pinia'

export default {
  components: { IonApp, IonHeader, IonRouterOutlet, IonImg },
  setup() {
    const store = useLoginStore();
    const { isLogin, user } = storeToRefs(store) ;
    const { hasPermission } = store
    return { isLogin, user, hasPermission };
  }
}
</script>

<template>
  <ion-app>
    <ion-header>
      <RouterLink to="/"> Home |</RouterLink>
      <RouterLink to="/about"> About |</RouterLink>
      <RouterLink v-if="isLogin" to="/remeras"> Remeras |</RouterLink>
      <RouterLink v-if="isLogin" to="/pantalones"> Pantalones |</RouterLink>
      <RouterLink v-if="isLogin" to="/buzos"> Buzos |</RouterLink>
      <RouterLink v-if="isLogin" to="/comprar"> Carrito |</RouterLink>
      <RouterLink v-if="isLogin &&  hasPermission('system')"  to="/system"> System |</RouterLink>
      <RouterLink v-if="isLogin && hasPermission('config')" to="/config"> Config |</RouterLink>
      <RouterLink v-if="isLogin && hasPermission('agregarRopa')" to="/agregarRopa"> AgregarRopa |</RouterLink>
      <RouterLink v-if="!isLogin" to="/login"> Login |</RouterLink>
      <RouterLink v-if="isLogin" to="/logout"> Logout |</RouterLink>
      Usuario : {{ user.email }} 
    </ion-header>
    <ion-router-outlet />
  </ion-app>
</template>

<style>
</style>

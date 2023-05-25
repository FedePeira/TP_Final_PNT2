<template>
  <ion-page>
     <section class="hero" id="home">
        <div class="container">

          <div class="hero-content">

            <p class="hero-subtitle">Ropa Centennials</p>

            <h2 class="h1 hero-title">Ropa Oversize Popular</h2>

            <button @click="iralogin" class="btn btn-primary">Compra Ahora</button>

          </div>

        </div>
      </section>
  </ion-page>
</template>

<script>
import {IonPage} from '@ionic/vue'
export default {
  components: { IonPage},
  methods: {
    iralogin() {
      this.$router.push("/login");
    },
  }
}
</script>

<style>
:root {

  /**
   * colors
   */

  --middle-blue-green: hsl(176, 35%, 63%);
  --sonic-silver: hsl(0, 0%, 44%);
  --eerie-black: hsl(0, 0%, 9%);
  --ocean-green: hsl(148, 45%, 58%);
  --candy-pink: hsl(356, 65%, 63%);
  --cultured: hsl(0, 0%, 96%);
  --white: hsl(0, 0%, 100%);
  --black: hsl(0, 0%, 0%);

  /**
   * typography
   */

  --ff-jost: "Jost", sans-serif;

  --fs-1: 2.5rem;
  --fs-2: 1.75rem;
  --fs-3: 1.625rem;
  --fs-4: 1.5rem;
  --fs-5: 1.375rem;
  --fs-6: 1.25rem;
  --fs-7: 1.125rem;
  --fs-8: 0.938rem;
  --fs-9: 0.875rem;
  --fs-10: 0.813rem;

  --fw-500: 500;
  --fw-600: 600;

  /**
   * transition
   */

  --transition-1: 0.25s ease;
  --transition-2: 0.75s ease;
  --cubic-out: cubic-bezier(0.51, 0.03, 0.64, 0.28);
  --cubic-in: cubic-bezier(0.33, 0.85, 0.56, 1.02);

  /**
   * spacing
   */

  --section-padding: 60px;

}
/*-----------------------------------*\
 * #REUSED STYLE
\*-----------------------------------*/

.container { padding-inline: 15px; }

a,
button { transition: var(--transition-1); }

h3 > a { color: inherit; }

.h1,
.h2,
.h3,
.h4 {
  color: var(--eerie-black);
  font-weight: var(--fw-600);
}

.h1 {
  font-size: var(--fs-1);
  line-height: 1;
}

.h2 { font-size: var(--fs-2); }

.h3 { font-size: var(--fs-6); }

.h4 {
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
}

.btn {
  background: var(--background, var(--eerie-black));
  color: var(--color, var(--white));
  font-weight: var(--fw-600);
  height: var(--height, 60px);
  padding-inline: 50px;
  border: 1px solid var(--border-color, var(--eerie-black));
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn-primary:is(:hover, :focus) {
  --background: var(--white);
  --color: var(--eerie-black);
  --border-color: var(--eerie-black);
}

/*-----------------------------------*\
 * #HERO
\*-----------------------------------*/

.hero {
  margin-top: 20px;
  background-image: url('../img/hero-banner.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left;
  width: 100%;
  min-height: 80vh;
  padding-block: var(--section-padding);
  display: flex;
  align-items: center;
}

.hero .container { width: 100%; }

.hero-subtitle {
  color: var(--eerie-black);
  font-size: var(--fs-4);
  font-weight: var(--fw-600);
  margin-bottom: 20px;
}

.hero-title {
  margin-bottom: 35px;
  max-width: 12ch;
}
</style>
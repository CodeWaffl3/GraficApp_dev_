<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  created() {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, "0218762@up.edu.mx","password").then(userCredential =>{
      const user = userCredential.user;
      if(user == null) {
        console.log("NO AUNTENTICADO");
      }
      else {
        console.log("Auntenticado correctamente", user);
      }
    })
  }
});
</script>
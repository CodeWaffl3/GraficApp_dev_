<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Ver claves en tiempo real</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>UID</div>
          </ion-col>
          <ion-col>
            <div>Nombre</div>
          </ion-col>
          <ion-col>
            <div>Apellido</div>
          </ion-col>
          <ion-col>
            <div>Carrera</div>
          </ion-col>
        </ion-row>

        <ion-row v-for="(item, index) in listaClaves" :key="index">
          <ion-col>
            <div>{{listaKeys[index]}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.name}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.apellido}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.carrera}}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol} from '@ionic/vue';
import { getDatabase, ref, onValue } from "firebase/database";


export default  defineComponent({
  name: 'Tab1Page',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonGrid,
    IonRow,
    IonCol
  },
  data(){ return{
    listaClaves: [{status:"", usuario:""}],
    listaKeys:[]
  }},
  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "usuarios/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0
      snapshot.forEach(element => {
        this.listaKeys[cont]=element.key
        this.listaClaves[cont] = element.toJSON()
        cont++
      });
    });
    console.log("lista de claves", this.listaCaves)
  }
});


</script>


<style>


ion-col > div {
  color: #0d0d0d;
  background-color: #f7f7f7;
  border: solid 1px #ddd;
  padding: 10px;
}
</style>
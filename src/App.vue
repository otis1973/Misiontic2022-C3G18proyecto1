<template>
  <div>
    <v-app id="inspire">

      <v-navigation-drawer v-model="drawer"  app>

        <!-- crear un componente que va a tener todo el contenido de mi barra de navegación -->

        <Menubarraizquierda :title="title" :isAdmin="true"/>

      </v-navigation-drawer>
    <cabecera :title="title" :drawer="drawer"/>

<v-main>
<!-- -->
<!-- Provides the application the proper gutter -->
<v-container fluid>
<!-- If using vue-router -->
{{drawer}}
<router-view></router-view>
</v-container>
</v-main>
</v-app>
</div>
</template>

<script>
import Menubarraizquierda from './components/Menubarraizquierda.vue';
import Cabecera from "./components/Cabecera.vue";
export default {
name: "App",
components: {
Menubarraizquierda,
Cabecera,
},

data (){
//mostrar o no la barra modifica el componente drawer barra lado izquierdo
return{
title:"Aprendizaje Siglo XXI",
drawer: false
}
}
};
</script>
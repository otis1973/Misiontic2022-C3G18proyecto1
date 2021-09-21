<template>
       <v-app-bar absolute color="#6A76AB" dark shrink-on-scroll prominent src="https://picsum.photos/1920/1080?random" fade-img-on-scroll scroll-target="#scrolling-techniques-4">

            <template v-slot:img="{ props }">
      <v-img v-bind="props" gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"></v-img>
    </template>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <!--v-app-bar-title>Title</v-app-bar-title-->
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    
    <v-btn icon>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-exit-to-app</v-icon>
    </v-btn>
    
    <v-menu bottom left>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon  color="yellow" v-bind="attrs"  v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
  </v-menu>

  <template v-slot:extension>
    <v-tabs align-with-title>
      <v-tab>MAESTROS</v-tab>
      <v-tab>ESTUDIANTES</v-tab>
      <v-tab>ACUDIENTES</v-tab>
    </v-tabs>
  </template>
</v-app-bar>
</template>

<script>
export default {
    props:["tile", "drawer"]
};
</script>

<style>

</style>
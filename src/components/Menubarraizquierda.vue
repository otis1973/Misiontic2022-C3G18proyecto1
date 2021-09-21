<template>
  <div>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{subtitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav v-if="isAdmin"
      >
        <v-list-item
          v-for="item in adminItems"
          :key="item.title"
          link :to="item.path" 
        >
     
             <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
   
        </v-list-item>
      </v-list>
 <v-list
        dense
        nav 
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link :to="item.path"
        >
             <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
   
        </v-list-item>
      </v-list>

  </div>
</template>

<script>
export default {
    name: "Menubarraizquierda",
    props:["title", "isAdmin", "item"],
data () {
      return {
          subtitle: "Bienvenido a su institución educativa",
          adminItems: [
              { title:"Administrador", icon: "mdi-archive-settings", path: "Administrador"},
              
          ],
        items: [ 
          { title: 'Inicio', icon: 'mdi-home', path: "/"},
          { title: 'Estudiantes', icon: 'mdi-book-open-page-variant', path: "/Estudiantes"},
          { title: 'Maestros', icon: 'mdi-book-open-outline', path: "/Maestros"},
          { title: 'Acudientes', icon: 'mdi-book-open-page-variant-outline'},
                 { title: 'Mateologia', icon: 'mdi-book-open-page-variant-outline', path:"/Mateologia"},

        ],
      };
}
};

</script>

<style>

</style>
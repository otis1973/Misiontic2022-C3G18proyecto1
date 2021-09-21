<template>
  <div>
         <br><br><br><br>
   
   <br><br><br><br>
   
   <br><br><br><br><h1>ESTUDIANTES</h1>
   <v-btn  elevation="13" bottom right fixed fab to="/Estudiantes/new"><v-icon>mdi-pencil mdi-plus</v-icon>
</v-btn>
   <v-container>
        <v-row>
          <v-col
            v-for="dicentes in dicentes" :key="dicentes.id"  lg="3" md="4" sm="6" xs="12">
            <v-card height="240">
                <v-card   class="mx-auto"    max-width="400">
    <v-img
      class="white--text align-end"
      height="100px"
      :src="dicentes.img"
    >
      <v-card-title>{{dicentes.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{dicentes.observaciones}}
    </v-card-subtitle>

    <!--v-card-text class="text--primary">
      <div>Whitehaven Beach</div>
    </v-card-text-->

    <v-card-actions>
     <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      INGRESAR
      <v-icon
        right
        dark
      >
        mdi-cloud-upload
      </v-icon>
    </v-btn>
    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="ma-2 white--text"
      @click="loader = 'loading3'"
    >
      ELIMINAR
      <v-icon
        right
        dark
      >
        mdi-eraser
      </v-icon>
    </v-btn>
    </v-card-actions>
  </v-card>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
   
   </div>
</template>

<script>
export default {
    data() {
        return{
            dicentes:[   ],
        };
    },
    mounted(){
         let estudiantes = localStorage.dicentes;
            if(estudiantes !== undefined && estudiantes !==""){
                this.dicentes = JSON.parse(estudiantes);
            }
            console.log("estudiantes:", this.dicentes)
    },
};
</script>

<style>

</style>
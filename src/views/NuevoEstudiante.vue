<template>
  <div>
         <br><br><br><br>
   
   <br><br><br><br>
   
   <br><br><br><br>
      <h1>NUEVO ESTUDIANTE</h1>
      <v-img
  max-height="300"
  max-width="250"
  :src="img"
></v-img>
      <div>
           <v-text-field v-model="img" :rules="imgRules" label="Url de la imagen">
    <v-icon
      slot="append"
      color="red"
    >
      mdi-image
    </v-icon>
    <v-icon
      slot="prepend"
      color="green"
    >
      mdi-image
    </v-icon>
  </v-text-field>
        <!--v-file-input></v-file-input-->
    <v-text-field
      label="Nombre del Estudiante"
      :rules="NameRules"
      hide-details="auto"
      v-model="name"
    >   <v-icon
      slot="prepend"
      color="green"
    > mdi-head-cog</v-icon>
    </v-text-field>
           <v-text-field label="Apellidos" :rules="ApellidoRules" v-model="Apellidos"
      hide-details="auto">
      <v-icon
      slot="prepend"
      color="green"
    > mdi-smart-card</v-icon> </v-text-field>

      <v-textarea
          name="input-7-1"
          :rules="ObservacionesRules"
          label="Observaciones:"
           hint="Datos personales"
           v-model="observaciones"
        >   <v-icon
      slot="prepend"
      color="green"
    > mdi-eye-check</v-icon></v-textarea>
    <div class="botones">
         <v-btn
 
      color="blue-grey"
      class="ma-2 white--text"
      @click="guardar()"
    >
      INGRESAR
      <v-icon
        right
        dark
      >
        mdi-content-save
      </v-icon>
    </v-btn>

    </div>
  </div>

  </div>
</template>

<script>
export default {
    data(){
        return{
                 id: 1,
                 name: "",
                 observaciones:"",
                 img:"",
                  NameRules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters',
      ],
      Apellidos: "",
        ApellidoRules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters',
      ],
        imgRules: [
        (value) => !!value || 'Required.',
      ],
        ObservacionesRules: [
        (value) => !!value || 'Required.',
        (value) => (value && value.length >= 3) || 'Min 3 characters',
      ],
        };
    },
    mounted(){
        console.log("id Estudiante", localStorage.idEstudiante);
        console.log("Estudiante", localStorage.estudiantes);
    },
    methods:{
        guardar(){
            //validar campos obligatorios
            console.log("Guardar")
            if(this.img===""){
                alert("Se requiere la imagen")
                return;
            }
             if(this.name===""){
                alert("Se requiere EL nombre")
                return;
            }
             if(this.Apellidos===""){
                alert("mSe requiere EL APELLIDO")
                return;
            }
            //Agregar estudiante al loalstorage
            let id= localStorage.idEstudiante;
            if(id === undefined || id ==""){
                id = 1
            }else{
               id = parseInt(id) + 1
            }
            
            const estudiante={
                id: id,
                name:this.name,
                Apellidos:this.Apellidos,
                observaciones:this.observaciones,
                img: this.img,
            };
            let estudiantes = localStorage.dicentes;
            if(estudiantes === undefined || estudiantes===""){
                estudiantes = [];
            }else{
                estudiantes = JSON.parse(estudiantes);
            }
            console.log("estudiantes", estudiantes)
            estudiantes.push(estudiante)
            alert("Producto creado exitosamente")
            this.name="";
            this.Apellidos="";
            this.observaciones="";
            this.img="";
            localStorage.idEstudiante= id
            localStorage.dicentes = JSON.stringify(estudiantes);
        },
    },
};
</script>

<style>
    .botones{
        float: right;
    }
</style>
<template>
  <div>
<br><br><br><br><br>
<center><h1>SALA DE PROFESORES</h1></center>
<br><br><br>
<v-timeline>
    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://picsum.photos/200/300">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Octavio...</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Matemática
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
    <v-timeline>
    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://picsum.photos/200/300">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <div class="texto">Marcela...</div>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Artística
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
<v-timeline>
    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Ruben Dario...</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Ciencias Naturales
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
<v-timeline>
    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <div class="texto">Oscar...</div>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Educación en Tecnología
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
<v-timeline>
    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://picsum.photos/200/300">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <div class="texto">Marcela...</div>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Matemática
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  <v-timeline>

    <v-timeline-item
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://picsum.photos/200/300/">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <div class="texto">José Fernando...<br>Educación Fíaica<br>Ética <br>Artística</div>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Educación Física
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 2002s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
<v-card>
     <v-bottom-navigation v-model="value" >
    <v-btn value="math"  elevation="13" fixed fab to="/Maestros/new">
      <span>   MATEOLOGÍA  </span>

      <v-icon>mdi-sigma</v-icon>
    </v-btn>

    <v-btn value="tech" elevation="9">
      <span>TECNOLOGÍA</span>

      <v-icon>mdi-tape-drive</v-icon>
    </v-btn>

    <v-btn value="cn" elevation="6">
      <span>CIENCIAS NATURALES</span>

      <v-icon>mdi-telescope</v-icon>
    </v-btn>
      <v-btn value="cs" elevation="6">
      <span>CIENCIAS SOCIALES</span>

      <v-icon>mdi-telescope</v-icon>
    </v-btn>
  </v-bottom-navigation>
</v-card>   
    <piepagina />
  </div>
</template>

<script>
import piepagina from '../components/Footer.vue'
export default {
 
components:{
  piepagina
}
}

</script>

<style>
.texto{
  font-size: 1m;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
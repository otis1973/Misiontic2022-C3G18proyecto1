<template>
  <div>
<br><br><br><br><br><br><br><br>
<v-timeline>
    <v-timeline-item
      v-for="n in 4"
      :key="n"
      large
    >
      <template v-slot:icon>
        <v-avatar>
          <img src="https://i.pravatar.cc/64">
        </v-avatar>
      </template>
      <template v-slot:opposite>
        <span>Adriana...</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          Magister en Educación: Matemática
        </v-card-title>
        <v-card-text>Docente de planta en la isntitución educativa desde 1992s.</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
<v-card>
     <v-bottom-navigation v-model="value" >
    <v-btn value="math"  elevation="13" fab to="/Maestros/new">
      <span>MATEOLOGÍA</span>

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
  </v-bottom-navigation>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
<div class="hoja" lg="3" md="4" sm="6" xs="12">
  <br><b><div class="textotitulos">HORARIO DE CLASES PARA ESTUDIANTES Y PROFESORES</div></b>
    
       <div class="hoja" lg="3" md="4" sm="6" xs="12">
         <br> "HORARIO DE CLASES ESTUDIANTES"
         <tr>
          <th scope="col">HORA</th>
          <th scope="col">DIA 1</th>
          <th scope="col">DIA 2</th>
          <th scope="col">DIA 3</th>
          <th scope="col">DIA 4</th>
          <th scope="col">DIA 5</th>
          </tr>
         
              <tr>
              <th scope="row">11:50 - 12:45</th>
              <td>LENGUA CASTELLANA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              <td>MATEMÁTICAS</td>
              <td>TECNOLOGÍA</td>
              </tr>
              <tr>
              <th scope="row">12:45 - 13:40</th>
              <td>INGLÉS</td>
              <td>INGLÉS</td>
              <td>C. SOCIALES</td>
              <td>C. SOCIALES</td>
                <td>RELIGIÓN</td>
              </tr>
              <tr>
              <th scope="row">13:40 - 14:35</th>
              <td>LENGUA CASTELLANA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              </tr>
              <tr>
              <th scope="row">14:35 - 15:05</th>
              <td colspan="5"><pre><B>D            E           S           C          A          N            S        O</B></pre></td>
              </tr>
              <tr>
              <th scope="row">15:05 - 16:00</th>
              <td>LENGUA CASTELLANA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              </tr>
              <tr>
              <th scope="row">16:00 - 16:55</th>
              <td>LENGUA CASTELLANA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              </tr>
              <tr>
              <th scope="row">16:55 - 17:50</th>
              <td>LENGUA CASTELLANA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              <td>MATEOLOGÍA</td>
              <td>TECNOLOGÍA</td>
              </tr>
      </div>        
      <br>
    <div class="hoja" lg="3" md="4" sm="6" xs="12">
      "HORARIO DE CLASES PROFESORES"
      <br>
             <tr class="table-active">
            <th scope="col">HORA</th>
            <th scope="col">DIA 1</th>
            <th scope="col">DIA 2</th>
            <th scope="col">DIA 3</th>
            <th scope="col">DIA 4</th>
            <th scope="col">DIA 5</th>
            </tr>
         
            <tr class="table-active">
            <th scope="row">11:50 - 12:45</th>
            <td>0801</td>
            <td>Proyecto Artes Escenicas</td>
            <td>Proyecto Emprendimiento</td>
            <td>Calificar</td>
            <td>s201</td>
            </tr>
            <tr class="table-active">
            <th scope="row">12:45 - 13:40</th>
            <td>s201</td>
            <td>Proyecto Artes</td>
            <td>1102</td>
            <td>1101</td>
              <td>1002</td>
            </tr>
            <tr class="table-active">
            <th scope="row">13:40 - 14:35</th>
            <td>1001</td>
            <td>0801</td>
            <td>Proyecto Robótica</td>
            <td>Proyecto Robótica</td>
            <td>s201</td>
            </tr>
            <tr>
            <th scope="row">14:35 - 15:05</th>
            <td colspan="5"><B><pre>D            E           S           C          A          N            S        O</pre></B></td>
            </tr>
            <tr class="table-active">
            <th scope="row">15:05 - 16:00</th>
            <td>1001</td>
            <td>1102</td>
            <td>1101</td>
            <td>Calificar</td>
            <td>1002</td>
            </tr>
            <tr class="table-active">
            <th scope="row">16:00 - 16:55</th>
            <td>S-201</td>
            <td>0901</td>
            <td>0902</td>
            <td>0902</td>
            <td>0901</td>
            </tr>
            <tr class="table-active">
            <th scope="row">16:55 - 17:50</th>
            <td>P. Robótica</td>
            <td>0901</td>
            <td>092</td>
            <td>0901</td>
            <td>0902</td>
        
          </tr>
          </div> 
 
<footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <h5>Empezar</h5>
                    <ul>
                        <li><a href="#">Salir</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Institución</h5>
                    <ul>
                        <li><a href="#">Información Colegio</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Apoyo</h5>
                    <ul>
                        <li><a href="#">Preguntas Frecuentes</a></li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <h5>Legal</h5>
                    <ul>
                        <li><a href="#">Términos de Servicio</a></li>
                   </ul>
                </div>
            </div>        <div class="footer-copyright">
            <p>© 2021 MisiónTic UTP</p>
        </div>
        </div>
    </footer>
  </div>
  </v-card-text>
      </v-responsive>
    </v-card>
  </div>

</template>

<script>
export default {

}

</script>

<style>
#secuencia{
    width: 100%;
    max-width:60%;
     font-size: 18px;
     text-align: left;
     font-family: 'Chewy', cursive;
     border-radius: 85px;
     box-shadow: inset 15px 12px 12 px 5px rgba(108, 198, 226, 0.247), inset -4px -2px -8px, rgba(6, 86, 106, 0.959);
     box-align:center;
     padding: 5px;
     margin-top: 5px;
     margin-left: 5px;
     border: 7px solid rgba(82, 3, 16, 0.877);
     background: rgba(126, 196, 236, 0.802);
}
.hoja {
    align-content:center;
    width: 100%;
    font:200px;
    background-color:  rgba(28, 111, 236, 0.26);
    font-family: 'Comic Sans serif','Courier New', Courier, monospace;
    -moz-box-pack: rgba(35, 79, 200, 0.295);
background: linear-gradient(to bottom, rgba(10, 54, 200, 0.705), rgba(157, 203, 233, 0.829));
background-image: linear-gradient(to bottom, rgba(10, 52, 129, 0.507), #5a9ecb 60%, rgba(42, 133, 133, 0.527),0.5);
-moz-box-shadow: 6px 8px 6px #999;
box-shadow: 7px 5px 3px #060;
-webkit-box-shadow: 5px 6px 4px rgba(105, 179, 240, 0.822);
    margin-left: 25px;
    margin-top: 50px;
    margin-right: 20px;
    margin-bottom: 20px;
    padding-bottom: 20px;
    padding-left: 15px;
    padding-right: 25px;
    padding-top: 20px;
    border: 7px solid ;
    border-color: blue;
    border-radius : 50px;
    border-bottom-left-radius: 25px;
   
    text-align: left;
}
.texto{
    font-size: 10px;
    padding: 5px;
    margin: 10px;
}
.textotitulos{
    font-size: 30px;
    padding: 5px;
    margin: 20px;
    text-align: center;
}

</style>
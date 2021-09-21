<template>
  <div>   <br><br><br><br>   
    <br><br><br><br><h1>PÁGINA DE MATEOLOGÍA</h1>
        <v-sheet
            color="BLACK"
            elevation="10"
            height="233"
            width="250"
            >MATEOLOGÍA<img src="https://picsum.photos/200">
        </v-sheet>
            <br><br>
    <v-bottom-navigation
            v-model="value"
            :background-color="color"
            dark
            shift
        >
        <v-btn>
        <span>Explora</span>

        <v-icon>mdi-television-play</v-icon>
        FASE EXPLORACIÓN
        </v-btn>

        <v-btn>
        <span>Previos</span>

        <v-icon>mdi-music-note</v-icon>
        FASE ESTRUCTURACIÓN
        </v-btn>

        <v-btn>
        <span>Aplica</span>

        <v-icon>mdi-book</v-icon>
        FASE APLICACIÓN 
        </v-btn>

        <v-btn>
        <span>Transfiere</span>

        <v-icon>mdi-image</v-icon>FASE TRANSFERENCIA
        </v-btn>
        <v-btn>
        <span>Valorar</span>

        <v-icon>mdi-image</v-icon>FASE VALORACIÓN
        </v-btn>
    </v-bottom-navigation>

<v-card>
      <v-responsive :aspect-ratio="16/9">
        <v-card-text>
        <div class="hoja">
            <center><b> ACTIVIDADES PARA LOS ESTUDIANTES QUE NO ALCANZARON LOS LOGROS DEL PRIMER PERÍODO ((**2021**);)</b></center>
            <br> <div id="demo"></div><br>
                         
                        DATOS PERSONALES DEL ESTUDIANTE:<br>
                            <br>
                            NOMBRE: <input type="text" id="nombre"/><br/> <br>   
                            GRADO: <input type="text" id="grado"/><br/><br> 
                            MATRICULA<br> MASTER: <input type="text" id="matriculam"/><br/><br> 
                            <!--input type="button" onclick="s()" value="BIENVENIDA"/><br><br>
                            ¿Cómo le va?: <div id="estudiantes"></div>
                            <span id="mensaje">
                                </span><div id="grados"></div> <div id="matriculasm"></div><br/-->

                        "Este es un trabajo ameno para que desarrolle las capacidades que requiere para enfrentar los siguientes niveles en esta área y pueda triunfar en su vida ya que tiene toda la inteligencia para hacerlo, es su decisión el hacer los ejercicios de forma conciente y aprender o de lo contrario hacerse trampa usted mismo como si fuera un tonto y seguir quejandose siempre porque no es capaz");<br><br>
                                    
                            <br><br>
                                <br>
                        <b>ACTIVIDAD #1</b> <br>

                        Realice las siguientes actividades, compruebe los resultados, luego tome nota en su cuaderno con los enunciados y las operaciones matemáticas que realice en cada uno para enviarlos vía correo electrónico.<br> <br>
                        1. Si usted tiene 10000 pesos y quiere comprar un artículo que vale 20000 pesos. 
                        Esto se puede representar matemáticamente de la siguiente forma: 10000 pesos que tiene quedaría adelante con el signo positivo pero no se coloca, -20000 menos veintemil pesos que vale el producto pero no los tiene, la operación sería:<br>
                        10000 - 20000 = -10000<br>
                        El resultado obtenido serían -10000 menos diez mil pesos es decir lo que le hace falta para comprar el producto.
                        <br><br>
                        En la primera casilla coloque el primer valor:<br>
                        <!--input type="numero" id="valor1"/><br><br>
                        En la segunda casilla coloque el segundo valor:<br>
                        <input type="numero" id="valor2"/><br>
                        <div id="resultadoSuma"></div> <br>
                        Haga clic en lel botón SUMAR para obtener el resultado:<br>
                        <input type="button" onclick="imprimirSuma()" value="SUMAR"/><br/><br/><br>
                        El primer valor introducido fue:<br>
                        <span id="primervalor"></span><br>
                        El segundo valor introducido fue: <span id="segundovalor"></span>
                        <br-->
                        2. Uste se reune con cuatro compañeros para conseguir dinero entre todos y salir en bicicleta para ir a un pueblo cercano, con el dinero compraran comida y bebidas, el primer compañero dice: "yo tengo 8000", el segundo dice: "mi abuelo me presta 20000", el tercero dice: "yo tengo 15000" y el cuarto dice: "mi mamá me presta 15000". <br>
                        a. ¿Cuánto dinero recogieron entre los cuatro compañeros?<br>

                        Dinero del primer compañero:<br>
                        <!--input type="numero" id="compa1"/><br><br>
                        Dinero del segundo compañero:<br>
                        <input type="numero" id="compa2"/><br>
                        Dinero del tercer compañero:<br>
                        <input type="numero" id="compa3"/><br><br>
                        Dinero del cuarto compañero:<br>
                        <input type="numero" id="compa4"/><br><br>
                        <input type="button" onclick="totalcompa()" value="SUMAR"/><br/>
                        <br>Entre todos tienen: <span id="dinerocompa"></span> <br-->
                        Haga clic en lel botón SUMAR para obtener el resultado:<br>

                        b. ¿Cuánto dinero quedarían debiendo después del paseo?.<br>
                        Respuesta: -<!--span id="dinerodeuda"></span> <br>
                        <br>3. Teniendo en cuenta los procesos anteriores realice los siguientes ejercicios en su cuaderno explicando porque obtiene ese resultado, cuando termine puede verificar sus resultados haciendo clic en el botón TOTALES:<BR>
                        a. 45 + 20 + 6 =  <span id="a"></span><br>
                        b. 45 - 20 + 6 =  <span id="b"></span><br>
                        c. 45 + 20 - 6 =  <span id="c"></span><br>
                        d. 45 - 20 - 6 =  <span id="d"></span><br>
                        e. -45 + 20 + 6 =  <span id="e"></span><br>
                        f. 50 - 120 - 60 =  <span id="f"></span><br>
                        g. 9 - 29 + 60 =  <span id="g"></span><br>
                        h. 70 - 200 - 46 + 15=  <span id="h"></span><br>
                        i. -345 + 920 + 600 =  <span id="i"></span><br>
                        j. -85 -520 -980 =  <span id="j"></span><br><br>
                        <input type="button" onclick="totales()" value="TOTALES"/><br/><br-->
                        <hr size="4"><br>
                        <b>ACTIVIDAD #2</b> <br>
                        1. Indicar en los siguientes fraccionarios cuál es el numerador y cuál es el denominador:<br>
                        a. 2/5<br>
                        b. 3/7<br>
                        c. 4/25<br>
                        d. 231/45<br>
                        2. Indicar en los siguientes fraccionarios cuál de los dos números indica las partes en que se dividen las unidades y cual número indica las partes que se toman.<br>
                        a. 1/2<br>
                        b. 6/12<br>
                        c. 15/30<br>
                        d. 11/5<br>
                        e. 6/3<br>
                        3. Mostrar en un dibujo la representación de cada una de las fracciones mostradas en los puntos 1 y 2. Por ejemplo para el fraccionario 2/5 hacer el dibujo de un lápiz que divide en cinco partes y toma dos.<br>
                        4. Cuáles de estas funciones son PROPIAS y cuáles son IMPROPIAS, explicar el porque en cada caso.<br>
                        a. 1/2<br>
                        b. 6/12<br>
                        c. 15/30<br>
                        d. 11/5<br>
                        e. 6/3<br>
                        5. Realizar la operación e indicar cuáles de las siguientes parejas de fracciones son EQUIVALENTES y cuáles no.<br>
                        a. 2/5 y 3/7<br>
                        b. 2/4 y 4/8<br>
                        c. 20/3 y 15/5<br>
                        d. 10/5 y 8/4<br>
                        6. Mostrar el proceso que realiza para solucionar las siguientes operaciones y colocar el resultado final.<br>
                        a. 5/3 + 4/3<br>
                        b. 12/9 + 5/8<br>
                        c. 25/7 - 9/2<br>
                        d. 45/8 - 25/5<br>
                        e. 54/3 * 30/5<br>
                        f. 98/45 ÷ 22/7<br>
                        g. 8/7 ÷ 22/7<br>
                        h. 35/9* 4/7<br>
                        <hr size="4"><br>
                        <b>ACTIVIDAD #3</b> <br>
                        En un juego virtual de futbolin le dan 5000 puntos cuando comienza el juego y por cada gol anotado le incrementan 300 puntos. Para este caso formular la función lineal, luego la tabla de valores con la que debe presentar el gráfico. Indicar cuáles son los elementos de la función lineal que acaba de crear según su forma canonica y = mx + b.<br>
                        <hr size="4"><br>
                        <b>ACTIVIDAD #4</b> <br>
                        Utilizándo la estructura de la regla de tres simple responda a las preguntas:<br>
                        1. ¿Cuántos kilometros hay en 500 metros?<br>
                        2. ¿Cuántos días ha vivido desde que nació?<br>
                        3. ¿Cuántas horas ha vivido desde que nació?<br>
                        4. Para aplicar una vacuna se debe tener en cuenta el peso de la persona ya que por cada kilogramo que pese la persona solo se pueden aplicar 5ml:<br>
                        a.	¿Cuál es su peso?<br>
                        b.	¿Cuántos mililitros de la vacuna le pueden aplicar a usted?.<br>
                        5. ¿Cuántas kilogramos tiene un bus que pesa 15 toneladas?.
        </div>
 </v-card-text>
      </v-responsive>
    </v-card>
    <v-text-field label="numero 1"><v-text-field>
        <v-select
        :items="items"
        label="Standard">
    <v-text-field label="numero 2><v-text-field">
    </div>
</template>

<script>
export default {
    data (){

  }
 /*function r(){
            estudiante.nombre= document.getElementById("nombre").value
            estudiante.grado= document.getElementById("grado").value
            estudiante.matriculam= document.getElementById("matriculam").value
    document.getElementById("notaprom").innerHTML = estudiante.notapromedio();
    
    //para redondear un numero https://developer.mozilla.org/es/    Math.round()
    
        }
     function s(){
            var nombre1 = document.getElementById("nombre");
                 document.getElementById("estudiantes").innerHTML = nombre1.value;
                 var grado1 = document.getElementById("grado");
                 document.getElementById("grados").innerHTML = grado1.value;
                 var matriculam1 = document.getElementById("matriculam");
                 document.getElementById("matriculasm").innerHTML = matriculam1.value;
                 document.querySelector("mensaje").innerHTML = 'Â¡Hola mundo!';
        }
    
        function suma(){
           var primerV = document.getElementById('valor1').value;
           var segundov= document.getElementById('valor2').value;
            document.getElementById("primervalor").innerHTML = primerV;
                   document.getElementById("segundovalor").innerHTML = segundov;
           if(((parseInt(primerV) === 10000) || (parseInt(primerV) === -20000)) && ((parseInt(segundov) === -20000)|| (parseInt(segundov) === 10000))) {
              return parseInt(primerV) + parseInt(segundov);
               }else{
                    return "Valor o valores incorrectos";
               }
             }
    function imprimirSuma(){
        
            document.getElementById("resultadoSuma").innerHTML = suma();
        }
        function totalcompa(){
            var comp1 = document.getElementById('compa1').value;
           var comp2= document.getElementById('compa2').value;
           var comp3 = document.getElementById('compa3').value;
           var comp4= document.getElementById('compa4').value;
           var totalcompan = parseInt(comp2)+parseInt(comp3)+parseInt(comp1)+parseInt(comp4);
           var deuda= parseInt(comp2)+parseInt(comp3);
           document.getElementById("dinerodeuda").innerHTML=deuda;
           document.getElementById("dinerocompa").innerHTML=totalcompan;
           //return parseInt(comp1)+parseInt(comp2)+parseInt(comp3)+parseInt(comp4);
        }
    function totales(){
        document.getElementById("a").innerHTML=71;
        document.getElementById("b").innerHTML=31;
        document.getElementById("c").innerHTML=59;
        document.getElementById("d").innerHTML=19;
        document.getElementById("e").innerHTML=-19;
        document.getElementById("f").innerHTML=-130;
        document.getElementById("g").innerHTML=40;
        document.getElementById("h").innerHTML=-161;
        document.getElementById("i").innerHTML=-1585;
    
    }
  
                    document.getElementById("demo").innerHTML = Date();*/
}    
</script>

<style>
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
//definiciÃ³n de objetos
var estudiante = {
    matriculam : 000,
    nombre : "",
    grado: "",
    nota1: 40,
    nota2:3,
    promedio:0,
    
    notapromedio: function(){
        var promedio = (this.nota1 + this.nota2)/2;
    return Math.round(promedio)
    }
        };
        function r(){
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
//Crear objeto

var user={
    nombre:"juan",
    domicilio:"italia",
    vive: true,
    edad: 50,
}

//LLamar a objeto: Notación de puntos
/*Con la notación de puntos podemos llamar al nombre del objeto, un punto y el nombre de la clave. 
Así como llamamos a la propiedad .length en una matriz. La propiedad de longitud es un par de clave-valor
*/

user.nombre;


//NOTACION de corchetes
/* La notación de corchetes es como llamar a un elemento en una matriz, 
aunque con corchetes debemos usar una cadena o número, o una variable que apunte a una cadena o número. 
Se puede llamar a cada clave envolviéndola con comillas:*/

var lugar="domicilio";

user["nombre"];
user[domicilio];

/*Asignación de valores
Asignar valores funciona igual que acceder a ellos. Podemos asignarlos, cuando creamos el objeto, 
con notación de puntos o con notación de corchetes:*/

const nuevoUsuario = {
    esNuevo: true
}

const loveJSString = 'lovesJavascript';

nuevoUsuario.username = 'otro.nombre.de.usuario';
nuevoUsuario['password'] = '12345';
nuevoUsuario[loveJSString] = true;

//Para eliminar propiedad

delete nuevoUsuario.esNuevo;

/*Métodos
En los objetos, los valores se pueden establecer en funciones. 
.length, .push, .pop, etc., son todos métodos. 
Podemos establecer una clave para un nombre y el valor para una función. 
Al igual que otras veces que llamamos métodos, llamaremos a este método usando notación de puntos y paréntesis finales 
(Nota: podemos llamar a un método con argumentos como lo haríamos con una función normal)
*/

const nuevoObjeto={
    decirHola:function () {
        console.log("Hola a todo el mundo");
    }
}
    nuevoObjeto.decirHola()  //"Hola a todo el mundo"


/*NO OLVIDAR 
={                             al escribir el objeto
nombreMetodo:function() {      al crear metodo
nuevoObjeto.nombreMetodo()     para llamar al metodo     
*/

/*

*/
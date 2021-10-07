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
Bucles for…in
A veces queremos iterar sobre cada par clave-valor en nuestro objeto. 
Con las matrices, utilizamos un estándar para el bucle y una variable de número de índice. 
Los objetos no contienen índices numéricos, por lo que el bucle estándar no funcionará para los objetos. 

Javascript tiene un segundo tipo de bucle for integrado llamado "for ... in loop". 
Es una sintaxis ligeramente diferente, comienza igual pero 
entre paréntesis declararemos una variable, la palabra clave in y el nombre del objeto. 
Esto recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves. 
Podemos usar esta clave, y la notación de corchetes, en nuestro bucle for para acceder al valor asociado 
con esa clave.
*/

const usuario = {
    username: 'juan.perez',
    password: 'loremipsumpwd123',
    lovesJavascript: true,
    favoriteNumber: 42
};

for (let clave in usuario){  //Recorrera cada clave del objeto, hasta que haya terminado
    console.log(clave);
    console.log(usuario[clave]);    //Accedemos al valor asociado mediante corchetes
}

/*
La palabra clave 'this'
Los objetos tienen una palabra clave autorreferencial que se puede aplicar en cada objeto llamado this. 
Cuando se llama dentro de un objeto, se refiere a ese mismo objeto. this puede usarse para acceder 
a otras claves en el mismo objeto, y es especialmente útil en métodos:
*/

const usuario={
    nombre='juan.perez',
    password='loremimpsum',
    lovesJavascript=true,
    decirHola:function(){
        console.log (this.nombre+ ' manda saludos');
    }
}

usuario.decirHola(); // 'juan.perez manda saludos'



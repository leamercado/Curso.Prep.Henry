// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
  /* Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el 
  argumento "nombre".
  Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido 
  en el argumento "edad"   Agrega un método (funcion) llamado "meow" que devuelva 
  el string "Meow!"    Devuelve el objeto
  Tu código:  LOS METODOS SON TAMBIEN PROPIEDADES, SOLO QUE GUARDAN UNA FUNCION, Y ESTAN DENTRO DE OBJETO */    
  var nuevoGato = {
    nombre: nombre,
    edad: edad,
    meow:function(){
      return "Meow!";
    }
  }
  return nuevoGato;
}


function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" 
  //(una cadena/string)
  // Tu código:
  /*var nuevoObjeto= {
    objeto:null,
    property:property                      MAL*/          

    objeto[property]= null;          //USO BRACKET NOTATION PORQUE NO SE como se llama ( nombre comida edad, etc)
    return objeto;                   // solo un signo = cuando asigno valor   DOT NOTATION REFIERE SOLO A STRING
}

function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código:
  //objeto["metodo"];   SOLO SI SE COMO SE LLAMA LA FUNCION
  objeto[metodo]();   // OJO . CUANDO ES CADENA sin punto[]      las funciones se invocan con al final()
}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:
  // puedo usar tambien objetoMisterioso["numeroMisterioso"]
  return objetoMisterioso.numeroMisterioso * 5;  

  // var producto = objetoMisterioso.numeroMisterioso * 5;
  // return producto                                           tambien se puede resolver asi
}

function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation
  // Devuelve el objeto
  // Tu código:
  delete objeto[unaPropiedad];  //no uso comillas
  return objeto ;
}

function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos 
  //que se pasan a la función
  // Devuelve el objeto
  // Tu código:
  var nuevoObjeto={       //var nombreObjeto= { prop1 , prop2 , prop3 }
    nombre,
    email,
    password,
  }
  return nuevoObjeto;

}

function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código:
  if (usuario.email){
    return true;
  } 
    return false;
  
}



function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) cuyo nombre es igual al 
  //valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:
  return objeto.hasOwnProperty(propiedad);  // hasOwnProperty ve si el objeto tiene la propiedad devuelve true
}

function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código:
  if(usuario["password"]=== password){   // si la prop password del objeto usario coincide con la password enviada
    return true;
  }
    return false;
}

function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
  // Devuelve el objeto
  // Tu código:
  usuario.password = "nuevaPassword";
  return usuario;                       // reemplazo valor de password y devuelvo el objeto

}

function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código:
  usuario.amigos.push(nuevoAmigo);  // usuario.push ESTA MAL     .push es un metodo para arrays
  return usuario;
}

function pasarUsuarioAPremium(usuarios) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el array de usuarios
  // Tu código:

  /*
  usuarios[
    usuario1={
      

    }
    usuario2={

    }
  ]
  */
  for (var i=0; i< usuarios.length; i++){
    usuarios[i].esPremium= true;            //cambio la propiedad esPremium del objeto array usuarios
  }                                       //  ALT + (arriba o abajo) CAMBIA POSICION DE LA LINEA
  
}

function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código:
  /*usuario={
    posts= [
      01{
          likes :100
      }
      02 {
          likes : 80
      }

    ]
  }*/
  acumulador=0;
  for (var i=0; i< usuario.posts.length ; i++){
    acumulador += usuario.posts[i].length.likes;             // += sum=sum +..   EJERCICIO IMPORTANTE
  }
  return acumulador;
}

function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y 
  // "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código:
  /*
  producto{
    precio=20,
    calcularPrecioDescuento= function(){
      precio - (precio* porcentaje)

    } 
  }*/
  /*var producto.precioAct();     
  producto={
    calcularPrecioDescuento: function{              
      precioAct=producto.precio - ( producto.precio * producto.porcentajeDeDescuento);
    }                   
  }                     MAL*/  
  producto.calcularPrecioDescuento=function(){
    return this.precio- (this.precio *this.porcentajeDeDescuento);
  }
  return producto;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  crearGato,
  agregarPropiedad,
  invocarMetodo,
  multiplicarNumeroDesconocidoPorCinco,
  eliminarPropiedad,
  nuevoUsuario,
  tieneEmail,
  tienePropiedad,
  verificarPassword,
  actualizarPassword,
  agregarAmigo,
  pasarUsuarioAPremium,
  sumarLikesDeUsuario,
  agregarMetodoCalculoDescuento
};

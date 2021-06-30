"use strict";
// tsc -init ------> Inicializar proyector Typescript
// tsc -w -----> Quedate mirando
console.log('Hola Mundo!!!');
// ############## Boolean   ############# 
var esSuperman = false;
var esSpaiderman = false;
var esBatman;
var esAcuaman = true; // no recomendada por mas que Typescript sabe que es de un tipo boolean
esSuperman ? console.log('estamos salvados') : console.log('ooooh');
var convertirClark = function () {
    return false;
};
esSuperman = convertirClark();
// ########### Number ###############
var avengers = 5;
var villanos = 6;
var otros = 2;
avengers > villanos ? console.log('estamos salvados') : console.log('estamos muertos');
otros = 123;
//  ########   String    ########
var batman = 'Batman';
var linternaVerde = 'LinternaVerde';
var volcanoNegro = "Volcan.Negro";
console.log(batman + " contra " + linternaVerde + " mas " + volcanoNegro);
// ########### Any ##############
// estas variables van mutando
var vengador;
var existe;
var derrotas;
vengador = 'Dr. Strange';
console.log(vengador.charAt(0));
vengador = 150.5555;
console.log(vengador.toFixed);
vengador = true;
console.log(vengador);
// ###### Array ######
var arreglo = [1, 2, 3, 4, 5, 6, 7];
var villanosDeMarvel = ['Uno', 'Dos', 'Tres'];
// ############# Tuplas ############
// Marcamos que tipo de dato es segun la pos en el array
var heroe = ["Dr. pepe", 100];
// ######## Enumeraciones ######
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var audio = Volumen.min;
var otro = Volumen[5];
console.log(audio);
console.log(otro);
// ################### Void ###################
function llamarBatman() {
    console.log('Mostrar esto');
}
var mensaje = llamarBatman();
// ############## Never #############
// este tipo de dato es utilizado para que arroje un mensaje de error por algo que nunca debería ocurrir
// function error(mensaje:string):never {
//     throw new Error(mensaje);
// }
// error('Error critico')
// ############# Aserciones de tipo ##########
var cualquierValor = 'Cualquier cosa';
var largoDelString = cualquierValor.length;
// undefined y Null
// let nada:undefined = undefined;
// nada = null;
// Comp
var Enumeracion;
(function (Enumeracion) {
    Enumeracion[Enumeracion["a"] = 10] = "a";
    Enumeracion[Enumeracion["b"] = 11] = "b";
    Enumeracion[Enumeracion["c"] = 9] = "c";
    Enumeracion[Enumeracion["d"] = 10] = "d";
})(Enumeracion || (Enumeracion = {}));
var numero = Enumeracion.d;
console.log(numero);
// ############# fUNCIONES ##############
var heroeFunc = 'Flash';
function imprime_Heroe() {
    return heroeFunc;
}
console.log(imprime_Heroe());
var activar_batisenal = function () {
    return 'Batiseñal activada';
};
// ########## parametros por defectos
function nombreCompleto(nombre, apellido) {
    return nombre + " y " + apellido;
}
var nombre = nombreCompleto('clark', 'kent');
// ----------> Parametros opcionales
function name2(nombre, apellido) {
    return nombre + apellido;
}
var nombre2 = nombreCompleto('barry', 'alen');
function completName(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    // funcion para capitalizar los siguientes string
    // capitalizado ? return capitalizar(nombre) + capitalizar(apellido) : return nombre + apellido
    if (capitalizado) {
        return capitalizar(nombre) + capitalizar(apellido);
    }
    else {
        return nombre + " y " + apellido;
    }
}
function capitalizar(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase();
}
var nombre3 = nombreCompleto('tony', 'stark');
// Parametros REST
function nombresCompletos(nombre) {
    var losDemasParametros = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        losDemasParametros[_i - 1] = arguments[_i];
    }
    return nombre + " " + losDemasParametros.join(" ");
}
var superman2 = nombresCompletos('Clark', 'Joseph', 'Kent');
var ironman2 = nombresCompletos('anthomy', 'Edward', 'Tony', 'Stark');
console.log(superman2);
console.log(ironman2);
// ########## Tipos de funcion ########
function sumar(a, b) {
    return a + b;
}
function saludar(nombre) {
    return 'I am' + nombre;
}
function salvarMundo() {
    console.log('El Mundo esta salvado');
}
var miFuncion; // De esta forma definimos el tipo de funcion
// miFuncion = 10;
miFuncion = sumar;
console.log(miFuncion(5, 5));
// miFuncion = saludar;
// console.log(miFuncion('Nicolas'))
// miFuncion = salvarMundo;
// miFuncion()
// ####### OBJETOS ###########
var flash = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo']
};
flash = {
    nombre: 'Superman',
    edad: 500,
    poderes: ['Puede Volar']
};
console.log(flash);
var flashTipo = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    getNombre: function () {
        return this.nombre;
    }
};
var supermanTipo = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    getNombre: function () {
        return this.nombre;
    }
};
var loquesea = 'Fernando';
loquesea = 10;
loquesea = {
    nombre: 'Nico',
    edad: 28
};
// ########## Verificación de tipos ############## 
var cosa = 123;
console.log(cosa); // devuelve un string indicando el tipo
if (typeof cosa === 'number') {
    console.log('Cosa, es un numero');
}
// Objetos
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
// Villanos debe de ser un arreglo de objetos personalizados
var villanoss = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
var autoBatman = {
    getAuto: function (carro) {
        return carro.toUpperCase();
    }
};

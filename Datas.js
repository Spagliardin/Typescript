"use strict";
// tsc -init ------> Inicializar proyector Typescript
// tsc -w -----> Quedate mirando
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//   ############### ES6 #################
// let capitan_america = {
//     nombre: 'Hulk',
//     darOrden_hulk:function(){
//         console.log(this.nombre + 'smash!!')
//     }
// }
// Recordar siempre que el this.nombre en el contexto de function dentro de un objeto hace referencia al objeto, pero en asincronismo este hace referencia al objeto global. Esto es solucionado por la funcion flecha.
var capitan_america = {
    nombre: 'Hulk',
    darOrden_hulk: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + 'smash!!'); }, 1000);
    }
};
capitan_america.darOrden_hulk();
// En la destructuración si nosotros queremos extraer los datos del objeto a una nueva variable, guardamos espacio en memoria con let y luego usamos llaves para crear esas variables <- esto tiene que estar igualado de donde lo extraemos, es decir del objeto avenger en este caso
// Esto tambien lo puedo hacer con los array, nada mas que se usa corchetes
var avenger = {
    nick: 'samuel',
    ironman: 'Robert',
    vision: 'Paul'
};
var nick = avenger.nick, warmachine = avenger.ironman, vision = avenger.vision;
// En la destructuracion puedo asignarle nuevo valor a las variables que extraemos del objeto avenger
// Podria crear una nueva propiedad dentro del objeto igualandola dentro de la destructuracion
console.log(warmachine);
// ############# clases #############
// class Avenger {
//     constructor(nombre, poder) {  // aca estamos poniendo las propiedades
//         this.nombre = nombre;
//         this.poder = poder;
//     }
// }
// class AvengerVolador extends Avenger { // Concepto de Herencia
//     constructor(nombre, poder){
//         super(nombre, poder); // para acceder al constructor de Avenger
//         this.vuela = true  
//     }
// }
// let hulk = new Avenger ('hulk' , 'Grande')
// let falcon = new AvengerVolador()
// ############ Clases #################
var Clase = /** @class */ (function () {
    function Clase(nombre, equipo, nombreReal) {
        this.nombre = 'Antman';
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log('Se ejecuto');
    }
    //un Método privado solo se puede ejecutar dentro del mismo contexto, es decir dentro de la misma clase 
    Clase.prototype.bio = function () {
        var mensaje = this.nombre + " " + this.nombreReal + " " + this.equipo;
        console.log(mensaje);
    };
    Clase.prototype.cambiarEquipoPublico = function (nuevoEquipo) {
        return this.cambiarEquipo(nuevoEquipo);
    };
    Clase.prototype.cambiarEquipo = function (nuevoEquipo) {
        if (nuevoEquipo === this.equipo) {
            return false;
        }
        else {
            return true;
        }
    };
    return Clase;
}());
var antman = new Clase('Antman', 'cap', 'Scott Lang');
console.log(antman);
console.log(antman.cambiarEquipoPublico('cap'));
var Avenger = /** @class */ (function () {
    // "protected" solo puede ser accedido desde su clase o la de sus hijos
    function Avenger(nombre, nombreReal) {
        this.nombre = nombre;
        this.nombreReal = nombreReal;
    }
    Avenger.prototype.getNombre = function () {
        return this.nombre;
    };
    return Avenger;
}());
var Xmen = /** @class */ (function (_super) {
    __extends(Xmen, _super);
    function Xmen(nombre, nombreReal) {
        return _super.call(this, nombre, nombreReal) || this;
    }
    Xmen.prototype.getNombre = function () {
        return _super.prototype.getNombre.call(this);
    };
    return Xmen;
}(Avenger));
var ciclope = new Xmen('ciclope', 'Scott');
console.log(ciclope.getNombre);
var GetySet = /** @class */ (function () {
    function GetySet(_nombre) {
        this._nombre = _nombre;
        this._nombre = nombre;
    }
    Object.defineProperty(GetySet.prototype, "nombre", {
        get: function () {
            return this._nombre;
        },
        // Por ejemplo podemos cambiar el nombre de una propiedad.
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    return GetySet;
}());
var funciones = new GetySet('traeYEnvia');
funciones.nombre;
// Propiedades y Métodos estaticos se pueden llamar sin instanciar la clase
var Otros = /** @class */ (function () {
    function Otros() {
    }
    Otros.crearXmen = function () {
        return new Otros();
    };
    Otros.nombre = 'wolverine';
    return Otros;
}());
var enviarMision = function (xmen) {
    console.log('Enviando a' + xmen.nombre);
};
var enviarCuartel = function (xmen) {
    console.log('Enviando al Cuartel' + xmen.nombre);
};
var wolvernine = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
};
enviarMision(wolvernine);
var Mutante = /** @class */ (function () {
    function Mutante(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    return Mutante;
}());
var sumarNumeros;
sumarNumeros = function (a, b) {
    return a + b;
};

// tsc -init ------> Inicializar proyector Typescript
// tsc -w -----> Quedate mirando


console.log('Hola Mundo!!!')

// ############## Boolean   ############# 

let esSuperman:boolean = false;
let esSpaiderman:boolean = false;
let esBatman:boolean
let esAcuaman = true; // no recomendada por mas que Typescript sabe que es de un tipo boolean


esSuperman ? console.log('estamos salvados'): console.log('ooooh')

const convertirClark = () => {
    return false
}

esSuperman = convertirClark();
// ########### Number ###############


let avengers:number = 5
let villanos:number = 6
let otros = 2

avengers > villanos ? console.log('estamos salvados'):console.log('estamos muertos')

otros = 123;


//  ########   String    ########
 
let batman:string = 'Batman'
let linternaVerde:string = 'LinternaVerde'
let volcanoNegro:string = `Volcan.Negro`

console.log(`${batman} contra ${linternaVerde} mas ${volcanoNegro}`)


// ########### Any ##############
// estas variables van mutando


let vengador:any;
let existe;
let derrotas;

vengador = 'Dr. Strange'
console.log(vengador.charAt(0))

vengador = 150.5555
console.log(vengador.toFixed)

vengador = true;
console.log(vengador)


// ###### Array ######

let arreglo:number[] = [1,2,3,4,5,6,7]
let villanosDeMarvel:string[] = ['Uno', 'Dos', 'Tres']

// ############# Tuplas ############
// Marcamos que tipo de dato es segun la pos en el array

let heroe:[ string,number ] = ["Dr. pepe", 100]

// ######## Enumeraciones ######

enum Volumen {
    min = 1,
    medio = 5,
    max = 10
}

let audio:number = Volumen.min
let otro:string = Volumen[5]

console.log(audio)
console.log(otro)

// ################### Void ###################

function llamarBatman():void{ // esta funcion no regresa nada (void es del tipo "ningun tipo")
    console.log('Mostrar esto')
}

let mensaje = llamarBatman();

// ############## Never #############
// este tipo de dato es utilizado para que arroje un mensaje de error por algo que nunca debería ocurrir

// function error(mensaje:string):never {
    
//     throw new Error(mensaje);
    
// }

// error('Error critico')

// ############# Aserciones de tipo ##########

let cualquierValor:any = 'Cualquier cosa'
let largoDelString:number = (<string>cualquierValor).length

// undefined y Null

// let nada:undefined = undefined;
// nada = null;


// Comp

enum Enumeracion {
    a=10,
    b,
    c=9,
    d
}

let numero = Enumeracion.d
console.log(numero)



// ############# fUNCIONES ##############

let heroeFunc:string = 'Flash';

function imprime_Heroe():string {
    return heroeFunc
}

console.log(imprime_Heroe())

let activar_batisenal = function():string {
    return 'Batiseñal activada'
}

// ########## parametros por defectos

function nombreCompleto(nombre:string,apellido:string):string {
    return `${nombre} y ${apellido}`
}
let nombre = nombreCompleto('clark','kent')


// ----------> Parametros opcionales
function name2(nombre:string, apellido?:string) {  // ----> signo de pregunta para hacerlo opcional
    return nombre + apellido
}
let nombre2 = nombreCompleto('barry', 'alen')


function completName(nombre:string, apellido:string, capitalizado:boolean = true) {  
    // funcion para capitalizar los siguientes string
    // capitalizado ? return capitalizar(nombre) + capitalizar(apellido) : return nombre + apellido
    if (capitalizado) {
        return capitalizar(nombre) + capitalizar(apellido) 
    } else {
        return `${nombre} y ${apellido}`
    }
    
}

function capitalizar(palabra:string):string {
    return palabra.charAt(0).toUpperCase() + palabra.substr(1).toLowerCase()
}

let nombre3 = nombreCompleto('tony', 'stark')


// Parametros REST

function nombresCompletos(nombre:string, ...losDemasParametros:string[]):string {
    return nombre + " " + losDemasParametros.join(" ")
}

let superman2:string = nombresCompletos('Clark', 'Joseph', 'Kent')
let ironman2:string = nombresCompletos('anthomy', 'Edward', 'Tony', 'Stark')

console.log(superman2)
console.log(ironman2)

// ########## Tipos de funcion ########

function sumar(a:number, b:number):number {
    return a + b;
}

function saludar(nombre:string):string {
    return 'I am' + nombre
}

function salvarMundo():void {
    console.log('El Mundo esta salvado')
}

let miFuncion: (a:number, b:number) => number;    // De esta forma definimos el tipo de funcion

// miFuncion = 10;

miFuncion = sumar;
console.log(miFuncion(5,5))

// miFuncion = saludar;
// console.log(miFuncion('Nicolas'))

// miFuncion = salvarMundo;
// miFuncion()


// ####### OBJETOS ###########

let flash = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo']
}

flash = {
    nombre: 'Superman',
    edad: 500,
    poderes: ['Puede Volar']
}

console.log(flash)

// ####### OBJETOS de Tipos ###########

// type Heroe = {

// }

// let flashTipo: {nombre:string, edad:number, poderes:string[], getNombre:()=>string  } = {
//     nombre: 'Barry Allen',
//     edad: 24,
//     poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
//     getNombre(){
//         return this.nombre
//     }
// }

// let supermanTipo: {nombre:string, edad:number, poderes:string[], getNombre:()=>string  } = {
//     nombre: 'Barry Allen',
//     edad: 24,
//     poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
//     getNombre(){
//         return this.nombre
//     }
// }

type Heroe = {
    nombre:string,
    edad:number,
    poderes:string[],
    getNombre:()=>string
}

let flashTipo:Heroe = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    getNombre(){
        return this.nombre
    }
}

let supermanTipo:Heroe = {
    nombre: 'Barry Allen',
    edad: 24,
    poderes: ['Puede correr muy rapido', 'Viajar en el tiempo'],
    getNombre(){
        return this.nombre
    }
}



// ########### Union de Tipos #############

type Otro = {
    nombre:string,
    edad:number,
}

let loquesea: string | number | Otro = 'Fernando'
loquesea = 10;
loquesea = {
    nombre: 'Nico',
    edad: 28
}


// ########## Verificación de tipos ############## 

let cosa:any = 123;
console.log(cosa) // devuelve un string indicando el tipo
if (typeof cosa === 'number') {
    console.log('Cosa, es un numero')
}


// ############## Practica ###############

type Auto = {
    carroceria:string,
    modelo:string,
    antibalas:boolean,
    pasajeros:number,
    disparar?:()=>void
  }
  
  // Objetos
  let batimovil: Auto = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros:4
  };
  
  let bumblebee: Auto = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros:4,
    disparar(){ // El metodo disparar es opcional
      console.log("Disparando");
    }
  };
  
  
  // Villanos debe de ser un arreglo de objetos personalizados
  let villanoss:{nombre:string,edad:number | undefined,mutante:boolean}[] = [{
    nombre:"Lex Luthor",
    edad: 54,
    mutante:false
  },{
    nombre: "Erik Magnus Lehnsherr",
    edad: 49,
    mutante: true
  },{
    nombre: "James Logan",
    edad: undefined,
    mutante: true
  }];
  
  // Multiples tipos
  // cree dos tipos, uno para charles y otro para apocalipsis
  
  type Uno = {
    poder:string,
    estatura:number
  }
  
  type Dos = {
    lider:boolean
    miembros:string[]
  }
  
  let charles:Uno = {
    poder:"psiquico",
    estatura: 1.78
  };
  
  let apocalipsis:Dos = {
    lider:true,
    miembros: ["Magneto","Tormenta","Psylocke","Angel"]
  }
  
  // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
  let mystique:Uno | Dos;
  
  mystique = charles;
  mystique = apocalipsis;


  let autoBatman : {getAuto: (a:string)=> string} = {
      getAuto (carro) {
          return carro.toUpperCase();
      }
  }



//   ############### ES6 #################


// let capitan_america = {
//     nombre: 'Hulk',
//     darOrden_hulk:function(){
//         console.log(this.nombre + 'smash!!')
//     }
// }

// Recordar siempre que el this.nombre en el contexto de function dentro de un objeto hace referencia al objeto, pero en asincronismo este hace referencia al objeto global. Esto es solucionado por la funcion flecha.

let capitan_america = {
    nombre: 'Hulk',
    darOrden_hulk:function() {
        setTimeout(() => console.log( this.nombre + 'smash!!'),1000)
    }
}

capitan_america.darOrden_hulk()

// En la destructuración si nosotros queremos extraer los datos del objeto a una nueva variable, guardamos espacio en memoria con let y luego usamos llaves para crear esas variables <- esto tiene que estar igualado de donde lo extraemos, es decir del objeto avenger en este caso

// Esto tambien lo puedo hacer con los array, nada mas que se usa corchetes

let avenger = {
    nick: 'samuel',
    ironman: 'Robert',
    vision: 'Paul'
}

let { nick, ironman:warmachine , vision} = avenger

// En la destructuracion puedo asignarle nuevo valor a las variables que extraemos del objeto avenger
// Podria crear una nueva propiedad dentro del objeto igualandola dentro de la destructuracion

console.log(warmachine)



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

class Clase {

    public nombre:string = 'Antman';
    protected equipo:string;
    private nombreReal:string;


    constructor ( nombre:string, equipo:string, nombreReal:string){
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log('Se ejecuto')
    }

    //un Método privado solo se puede ejecutar dentro del mismo contexto, es decir dentro de la misma clase 


    public bio():void{
        let mensaje:string = `${this.nombre} ${this.nombreReal} ${this.equipo}`
        console.log(mensaje)
    }

    public cambiarEquipoPublico(nuevoEquipo:string):boolean{
        return this.cambiarEquipo(nuevoEquipo)
    }


    private cambiarEquipo(nuevoEquipo:string):boolean{
        if(nuevoEquipo === this.equipo) {
            return false
        }else{
            return true
        }
    }

}

let antman:Clase = new Clase('Antman', 'cap', 'Scott Lang')
console.log(antman)

console.log(antman.cambiarEquipoPublico('cap'))


class Avenger {
    // "protected" solo puede ser accedido desde su clase o la de sus hijos
    constructor(public nombre:string, private nombreReal:string) {
        
    }

    protected getNombre():string{
        return this.nombre
    }


}

class Xmen extends Avenger{
    constructor(nombre:string, nombreReal:string){
        super(nombre,nombreReal)
    }

    public getNombre():string{
        return super.getNombre();
    }


}
let ciclope:Xmen = new Xmen('ciclope', 'Scott')
console.log(ciclope.getNombre)



class GetySet {
    constructor(public _nombre:string) {
        this._nombre = nombre
    }

    get nombre():string{
        return this._nombre 
    }

    // Por ejemplo podemos cambiar el nombre de una propiedad.
    set nombre(nombre:string){
        this._nombre = nombre;
    }

}

let funciones:GetySet = new GetySet('traeYEnvia')
funciones.nombre

// Propiedades y Métodos estaticos se pueden llamar sin instanciar la clase


class Otros {

    static nombre:string = 'wolverine'
    constructor() {
        
    }

    static crearXmen(){
        return new Otros()
    }

}


// clases Abstractas son pueden ser instanciadas, generalmente se usa como padre que hereda propiedades y metodos a otra clases (moldes)

// abstract class name {
//     constructor(parameters) {
        
//     }
// }



// ################ Interfaces  ##########

interface XmenDos {
    nombre:string,
    poder?:string // Recordar el signo de pregunta para propiedades opcionales
}

let enviarMision = ( xmen:XmenDos) => {
    console.log('Enviando a' + xmen.nombre)
}

let enviarCuartel = ( xmen:XmenDos) => {
    console.log('Enviando al Cuartel' + xmen.nombre)
}

let wolvernine:XmenDos = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
}

enviarMision(wolvernine);

class Mutante implements XmenDos {  // Interfaces en las clases
    constructor(public nombre:string, public poder:string) {
        
    }
}


interface DosNumerosFunc{
    (num1:number, num2:number) : number
}

let sumarNumeros:DosNumerosFunc;

sumarNumeros = (a:number, b:number) => {
    return a + b;
}



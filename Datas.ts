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

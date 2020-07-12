import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions'
import { contadorReducer } from './contador/contador.reducer'; // Funcion
import { Reducer, Action } from './ngrx-fake/ngrx'; // Interfaz o contrato



//Implementar el reducer
// console.log(    reducer (10, incrementadorAction)   );//11
// console.log(    reducer (10, decrementadorAction)   );//9
// console.log(    reducer (10, multiplicarAction)   );//50
// console.log(    reducer (10, dividirAction)   );//5
// console.log(    reducer (10, resetAction)   );//0


// Su trabajo es el de disparar las acciones
// Toda información se encuentra almacenada en el STORE
// El store JAMAS se modifica de forma directa
// El valor actual de la aplicación se llama STATE
class Store<T> {
     
    //private state: T;
    constructor(    private reducer: Reducer<T>,
                    private state: T) {

        //this.state= state;
    }

    //Como el estado es una propiedad privada, se ocupa un get para obtener el valor
    // Devuelve el estado, valor actual 
    getState()  {
        return this.state;
    }

    // método para ejecutar las acciones
    dispatch( action: Action) {
        // Ejecuta la accion
        this.state = this.reducer(this.state, action);
    }

}

// Creamos una instancia del objeto Store:
const store = new Store( contadorReducer, 10);
console.log("El valor actual de la información es: " + store.getState()); //10

store.dispatch(incrementadorAction);
console.log("El valor actual de la información es: " + store.getState()); //11

// por el momento el pyload esta estático en 5, 11*5 = 55,
// Nota: Ya se está manteniendo el estado anterior
store.dispatch(multiplicarAction);
console.log("El valor actual de la información es: " + store.getState()); //55

// correr en consola ts-node app
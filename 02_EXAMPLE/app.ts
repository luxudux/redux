import { Action } from './ngrx-fake/ngrx';
import { incrementadorAction, decrementadorAction, multiplicarAction, dividirAction, resetAction } from './contador/contador.actions'

// Reducer with switch
//Siempre regresa un estado
function reducer(state=10, action: Action ) {

    switch ( action.type){

        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;
        
        case 'MULTIPLICAR':
            return state * action.payload;
        
        case 'DIVIDIR':
            return state / action.payload;
        
        case 'RESET':
            return state = 0;

        default:     
            return state;
        
    }
   
}

//Implementar el reducer
console.log(    reducer (10, incrementadorAction)   );//11
console.log(    reducer (10, decrementadorAction)   );//9
console.log(    reducer (10, multiplicarAction)   );//50
console.log(    reducer (10, dividirAction)   );//5
console.log(    reducer (10, resetAction)   );//0

// correr en consola ts-node app

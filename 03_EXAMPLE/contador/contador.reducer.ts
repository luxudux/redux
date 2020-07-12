// Reducer with switch

import { Action } from "../ngrx-fake/ngrx";

//Siempre regresa un estado
// Un nuevo estado es creado, con base a la combinación del viejo estado 
// y una acción, por la función Reducer
export function contadorReducer(state=10, action: Action ) {

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
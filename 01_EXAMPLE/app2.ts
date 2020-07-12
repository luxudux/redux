// Acciones
interface Action {
    type: string;
    payload?: any;
}


// Reducer with switch
//Siempre regresa un estado
function reducer2(state=10, action: Action ) {

    switch ( action.type){

        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;
        
        case 'MULTIPLICAR':
            return state * action.payload;
        
        default:     
            return state;
        
    }
   
}

// Objeto
const multiplicarAction: Action = {
    type: 'MULTIPLICAR',
    payload: 5
}
//Implementar el reducer
console.log(    reducer2 (10, multiplicarAction)   );//50


// Ejecutar en consola
// ts-node app2.ts o ts-node app2
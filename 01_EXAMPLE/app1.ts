// Acciones
interface Action {
    type: string;
    payload?: any;
}


// Reducer with switch
//Siempre regresa un estado
function reducer1(state=10, action: Action ) {

    switch ( action.type){

        case 'INCREMENTAR':
            return state += 1;
        
        case 'DECREMENTAR':
            return state -= 1;
        
        default:     
            return state;
        
    }
   
}

// Objeto
const decrementadorAction: Action = {
    type: 'DECREMENTAR'
}
//Implementar el reducer
console.log(    reducer1 (10, decrementadorAction)   );//9


// Ejecutar en consola
// ts-node app1.ts o ts-node app1
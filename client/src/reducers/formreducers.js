const FormReducer = (state, action) => {
    switch(action.type){
        case 'SUBMIT_NAME':
            if (state.length === 1){
                console.log(state[0].name)
                state[0].name = action.name
                return [...state]
            }
            else{
                return [...state, {name: action.name}]
            }
        case 'SUBMIT_GENDER':
            if (state.length === 1){
                return [...state, {gender: action.gender}]
            }
            else{
                state[1].gender = action.gender
                return [...state]
            }
        case 'SUBMIT_HEIGHT':
            if (state.length === 2){
                return [...state, {height: action.height}]
            }
            else{
                state[2].height = action.height
                return [...state]
            }
        
        case 'SUBMIT_AGE':
            if (state.length === 3){
                 return [...state, {age: action.age}]
            }
            else{
                state[3].age = action.age
                return [...state]
            }

        default:
            return state
    }
}
 
export default FormReducer;
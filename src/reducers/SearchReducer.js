let SEARCH = 'SEARCH'
let RESULT = 'RESULT'
let initialState = {
    result:[],
    text:''
}

let SearchReducer = (state=initialState,action) =>{
    switch(action.type){
        case SEARCH:
            return {
                ...state,
                text:action.text
            }
        case RESULT:
            return {
                ...state,
                result:[...action.result]
            }
        default:
            return state
    }
}
export default SearchReducer

export let setSearchText = (text) =>{
    return {type:SEARCH,text}
}
export let setResult = (result) =>{
    return {type:RESULT,result}
}
const UPDATE_COUNT_NAME = 'UPDATE_COUNT_NAME'

export const updateCountName = value => ({
    type: UPDATE_COUNT_NAME,
    payload: value
})

export default (state = { userInput: '' }, action) => {
    switch(action.type){
        case UPDATE_COUNT_NAME: {
            return {
                ...state,
                userInput: action.payload
            }
        }
        default: {
            return state
        }
    }

}
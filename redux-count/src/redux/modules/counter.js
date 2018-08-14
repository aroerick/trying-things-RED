const INCREMENT_COUNT = 'INCREMENT_COUNT'
const DECREMENT_COUNT = 'DECREMENT_COUNT'

export const incrementCount = () => ({
    type: INCREMENT_COUNT
})

export const decrementCount = () => ({
    type: DECREMENT_COUNT
})

const initialState = {
    count: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case INCREMENT_COUNT: {
            return {
                ...state,
                count: ++state.count
            }
        }
        case DECREMENT_COUNT: {
            return {
                ...state,
                count: --state.count
            }
        }
        default: {
            return state
        }
    }
}
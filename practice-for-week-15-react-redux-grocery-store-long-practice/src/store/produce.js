import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE'
const TOGGLE_LIKE = 'produce/TOGGLE_LIKE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

export const toggleLike = (id) => {
    return {
        type: TOGGLE_LIKE,
        id
    }
}

function produceReducer (state = {}, action ){
    switch(action.type) {
        case POPULATE:{
            const nextState = {}
            action.produce.forEach(produce => {
                nextState[produce.id] = {...produce}
            })
            return nextState;
        }
        case TOGGLE_LIKE: {
            const {id} = action;
            const newState = {...state};
            newState[id] = {
                ...newState[id],
            }
            newState[id].liked = !state[id].liked
            return newState;
        }
        default:
            return state;
    }
}

export const getAllProduce = (state) => Object.values(state.produce)

export default produceReducer;
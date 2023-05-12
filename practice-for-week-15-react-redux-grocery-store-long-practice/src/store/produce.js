import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE'

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}

function produceReducer (state = {}, action ){
    switch(action.type) {
        case POPULATE:
            const nextState = {}
            action.produce.forEach(produce => {
                nextState[produce.id] = {...produce}
            })
            return nextState;
        default:
            return state;
    }
}

export default produceReducer;
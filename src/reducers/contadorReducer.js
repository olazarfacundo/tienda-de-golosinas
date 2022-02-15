import { types } from "../acciones/contadorAcciones"

export const contadorInitialState = { count: 0 }

export const contadorInit = (initialState) => {
    return {
        count: initialState.count + 100
    }
}

export function contadorReducer(state, action) {
    switch (action.type) {
        case types.increment:
            return { count: state.count + 1 }
        case types.increment_5:
            return { count: state.count + action.payload }
        case types.decrement:
            return { count: state.count - 1 }
        case types.decrement_5:
            return { count: state.count - action.payload }
        case types.reset:
            return contadorInitialState
        default:
            return state
    }
}


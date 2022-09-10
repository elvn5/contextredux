import React, {useReducer} from "react";

const INITIAL_STATE: any = {
  r: 100,
  g: 200,
  b: 20,
}

const Context = React.createContext(INITIAL_STATE)

const useStore = () =>{
  return React.useContext(Context)
}

const colorsState = {
  r: 100,
  g: 200,
  b: 20,
}

const colorsReducer = (state = colorsState, action: Record<string, any>) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return {
        ...state,
        r: Math.random() * 255,
        g: Math.random() * 255,
        b: Math.random() * 255,
      }
  }
}

const somethingState = {
  something: "something"
}

const somethingReducer = (state = somethingState, action: Record<string, any>) => {
  switch (action.type) {
    case "SOMETHING":
      console.log("SOMETHING")
      return state
  }
}

function combineReducers(reducers: Record<string, any>) {
  // First get an array with all the keys of the reducers (the reducer names)
  const reducerKeys = Object.keys(reducers)

  return function combination(state:any = {}, action:Record<string, any>) {
    // This is the object we are going to return.
    const nextState: any = {}

    // Loop through all the reducer keys
    for (let i = 0; i < reducerKeys.length; i++) {
      // Get the current key name
      const key = reducerKeys[i]
      // Get the current reducer
      const reducer = reducers[key]
      // Get the the previous state
      const previousStateForKey = state[key]
      // Update the new state for the current reducer
      nextState[key] = reducer(previousStateForKey, action)
    }
    return nextState
  }
}

const rootReducer = combineReducers({
  colorsReducer,
  somethingReducer
})

const Provider: React.FC<{children: any}> = ({children}) => {
  const [state, dispatch] = useReducer(rootReducer, {}, ()=> {
    return combineReducers({
      colorsReducer,
      somethingReducer
    })
  } )

  return (
    <Context.Provider value={{...state, dispatch}}>
      {
        children
      }
      </Context.Provider>
  )
}

export {
  useStore,
  Provider
}

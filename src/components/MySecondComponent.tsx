import React from "react";
import {useStore} from "../store/store";

const MySecondComponent: React.FC = () => {

  const state = useStore()
  console.log(state.colorsReducer)

  return (
    <div style={{width: 200, height: 200, background: `rgb(${(state?.colorsReducer?.r || 100) + ", " + (state?.colorsReducer?.g || 100) + "," + (state?.colorsReducer?.b || 100)})`}}>

    </div>
  )
}

export {
  MySecondComponent
}

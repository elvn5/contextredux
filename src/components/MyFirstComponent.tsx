import React from "react";
import {useStore} from "../store/store";

const MyFirstComponent:React.FC = () => {
  const {dispatch} = useStore()
  return (
    <div>
      <button onClick={()=> dispatch({type: "CHANGE_COLOR"})}>
        Click ME to Render Another component
      </button>
    </div>
  )
}

export {
  MyFirstComponent
}

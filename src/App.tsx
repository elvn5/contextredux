import React from 'react';
import './App.css';
import {Provider} from "./store/store";
import {MyFirstComponent} from "./components/MyFirstComponent";
import {MySecondComponent} from "./components/MySecondComponent";

function App() {
  return (
    <Provider>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "300px"}}>
        <MyFirstComponent/>
        <MySecondComponent/>
      </div>
    </Provider>
  );
}

export default App;

import React from "react";
import SharedBasketContextProvider from "src/components/contexts/sharedBasketsContext";
import SideBar from "src/components/sidebar";
import "src/App.scss";

function App() {
  return (
    <div className="App">
      <SharedBasketContextProvider>
        <SideBar/>
      </SharedBasketContextProvider>
    </div>
  );
}

export default App;

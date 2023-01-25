import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { CakeView } from "./app/features/cake/CakeView";
import { IcecreamView } from "./app/features/Icecream/IcecreamView";
import { UserView } from "./app/features/user/UserView";

function App() {
  return (
    <div className="App">
      <CakeView />
      <IcecreamView />
      <UserView />
    </div>
  );
}

export default App;

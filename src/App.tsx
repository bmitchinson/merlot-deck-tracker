import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Plugins } from "@capacitor/core";

const { Device, Modals } = Plugins;

function App() {
  const showDeviceInfo = async (): Promise<void> => {
    let info = await Device.getInfo();
    await Modals.alert({
      title: "Info",
      message: `UUID: ${info.uuid};
        Model: ${info.model}`,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={showDeviceInfo}> Show Device Info</button>
      </header>
    </div>
  );
}

export default App;

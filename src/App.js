import React from "react";
import AppPage from "./pages/app.page";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <AppPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

//Components
import Navigation from "./Components/Navigation/Navigation";
import PageRoute from "./Components/PageRoute/PageRoute";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <PageRoute />
      </div>
    );
  }
}

export default App;

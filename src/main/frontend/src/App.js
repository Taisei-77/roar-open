import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../src/style/Reset.css";
import "../src/style/AppStyle.css";

import SideBar from "./components/Sidebar";
import Top from "./components/Top";
import Home from "./components/Home";
import TeamCreate from "./components/TeamCreate";
import TeamSearch from "./components/TeamSearch";
import Chat from "./components/Chat";
import News from "./components/News";
import Profile from "./components/Profile";
import Setting from "./components/Setting";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SideBar />
          <div className="main">
            <Route exact path="/" component={Top} />
            <Route path="/Home" component={Home} />
            <Route path="/TeamCreate" component={TeamCreate} />
            <Route path="/TeamSearch" component={TeamSearch} />
            <Route path="/Chat" component={Chat} />
            <Route path="/News" component={News} />
            <Route path="/Profile" component={Profile} />
            <Route path="/Setting" component={Setting} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

import "../style/Sidebar.css";

class SidebarTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  render() {
    return (
      <div className="sidebar">
        <ul className="sidebarFixed">
          <li>
            <Link to="/" className="link">
              roar
            </Link>
          </li>
          <li>
            <Link to="/TeamSearch" className="link">
              チームを探す
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarTop;

import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/Sidebar.module.css";

class SidebarTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
  }

  render() {
    return (
      <div className={styles.sidebar}>
        <ul className={styles.sidebarFixed}>
          <li>
            <Link to="/" className={styles.link}>
              roar
            </Link>
          </li>
          <li>
            <Link to="/TeamSearch" className={styles.link}>
              チームを探す
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default SidebarTop;

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
        <div className={styles.sidebarLogo}>
          <img
            src="https://fontmeme.com/permalink/200730/290eb932de87052b5d303753501d1f76.png"
            className={styles.logo}
          />
        </div>
        <ul className={styles.sidebarFixed}>
          <li className={styles.sidebarItem}>
            <Link to="/" className={styles.link}>
              roar
            </Link>
          </li>
          <li className={styles.sidebarItem}>
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

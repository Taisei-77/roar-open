import React from "react";
import { Link } from "react-router-dom";

import styles from "../style/Sidebar.module.css";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    this.setState({
      click: !this.state.click,
    });
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
            <Link to="/Home" className={styles.link}>
              ホーム
            </Link>
          </li>
          {/* <li onClick={this.toggleClick} className={styles.link}>
            チーム
          </li>
          {this.state.click ? (
            <ul> */}
          <li className={styles.sidebarItem}>
            <Link to="/TeamCreate" className={styles.link}>
              チームを作る
            </Link>
          </li>
          <li className={styles.sidebarItem}>
            <Link to="/TeamSearch" className={styles.link}>
              チームを探す
            </Link>
          </li>
          {/* </ul>
          ) : null} */}
          <li className={styles.sidebarItem}>
            <Link to="/Chat" className={styles.link}>
              チャット
            </Link>
          </li>
          <li className={styles.sidebarItem}>
            <Link to="/News" className={styles.link}>
              ニュース
            </Link>
          </li>
          <li className={styles.sidebarItem}>
            <Link to="/Profile" className={styles.link}>
              プロフィール
            </Link>
          </li>
          <li className={styles.sidebarItem}>
            <Link to="/Setting" className={styles.link}>
              設定
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

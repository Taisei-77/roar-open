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
        <ul className={styles.sidebarFixed}>
          <li>
            <Link to="/Home" className={styles.link}>
              ホーム
            </Link>
          </li>
          <li onClick={this.toggleClick} className={styles.link}>
            チーム
          </li>
          {this.state.click ? (
            <ul>
              <li>
                <Link to="/TeamCreate" className={styles.link}>
                  チームを作る
                </Link>
              </li>
              <li>
                <Link to="/TeamSearch" className={styles.link}>
                  チームを探す
                </Link>
              </li>
            </ul>
          ) : null}
          <li>
            <Link to="/Chat" className={styles.link}>
              チャット
            </Link>
          </li>
          <li>
            <Link to="/News" className={styles.link}>
              ニュース
            </Link>
          </li>
          <li>
            <Link to="/Profile" className={styles.link}>
              プロフィール
            </Link>
          </li>
          <li>
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

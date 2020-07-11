import React from "react";
import { Link } from "react-router-dom";

import "../style/Sidebar.css";

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
      <div className="sidebar">
        <ul className="sidebarFixed">
          <li>
            <Link to="/Home" className="link">
              ホーム
            </Link>
          </li>
          <li onClick={this.toggleClick} className="link">
            チーム
          </li>
          {this.state.click ? (
            <ul>
              <li>
                <Link to="/TeamCreate" className="link">
                  チームを作る
                </Link>
              </li>
              <li>
                <Link to="/TeamSearch" className="link">
                  チームを探す
                </Link>
              </li>
            </ul>
          ) : null}
          <li>
            <Link to="/Chat" className="link">
              チャット
            </Link>
          </li>
          <li>
            <Link to="/News" className="link">
              ニュース
            </Link>
          </li>
          <li>
            <Link to="/Profile" className="link">
              プロフィール
            </Link>
          </li>
          <li>
            <Link to="/Setting" className="link">
              設定
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sidebar;

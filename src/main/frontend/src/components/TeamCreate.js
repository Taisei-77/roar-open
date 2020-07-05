import React from "react";

// cssの読み込み
import "../style/TeamCreate.css";
import { Button } from "react-bootstrap";

// コンポーネントの読み込み
import { TeamCreateView } from "./TeamCreateView";
import { TeamProfile } from "./TeamProfile";

class TeamCreate extends React.Component {
  render() {
    return (
      <div className="teamCreateBody">
        <div className="teamCreateContainer">
          <p>チーム名</p>
          <input type="text" placeholder="チーム名"></input>
        </div>
        <TeamCreateView className="teamCreateContainer" />
        <div>基本プロフィール</div>
        <TeamProfile className="teamCreateContainer" />
        <div className="teamCreateContainer">
          <p>チームコンセプト</p>
          <textarea
            className="concept"
            placeholder="チームコンセプトを自由に記述"
          ></textarea>
        </div>
        <div className="teamCreateContainer">
          <p>大会参加実績</p>
          <table>
            <thead>
              <th>参加年度</th>
              <th>大会名</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <textarea placeholder="参加年度"></textarea>
                </td>
                <td>
                  <textarea placeholder="大会名"></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <textarea placeholder="参加年度"></textarea>
                </td>
                <td>
                  <textarea placeholder="大会名"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="teamCreateButton">
          <Button variant="outline-primary" type="submit">
            作成
          </Button>
        </div>
      </div>
    );
  }
}

export default TeamCreate;

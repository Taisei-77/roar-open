import React from "react";
import Select from "react-select";

// cssの読み込み
import "../style/TeamCreate.css";

// コンポーネントの読み込み
import { View } from "./TeamCreateView";

// データの読み込み
import { SportName } from "../date/date";
import { Prefectures } from "../date/date";
import { ActivityFrequency } from "../date/date";
import { DayOfTheWeek } from "../date/date";

class TeamCreate extends React.Component {
  render() {
    return (
      <div>
        <span>チーム名:</span>
        <input type="text" placeholder="チーム名"></input>
        <View />
        <div>基本プロフィール</div>
        {/* ここはreact-selectを使う */}
        <div>
          <span>競技 : </span>
          <Select
            className="select"
            isClearable
            options={SportName}
            placeholder="何のスポーツ？"
          ></Select>
        </div>
        <div>
          <span>活動拠点 : </span>
          <Select
            className="select"
            isMulti
            isClearable
            options={Prefectures}
            placeholder="どこで活動してる？"
          ></Select>
        </div>
        <div>
          <span>活動頻度 : </span>
          <Select
            className="select"
            isClearable
            options={ActivityFrequency}
            placeholder="どれくらい活動してる？"
          ></Select>
        </div>
        <div>
          <span>活動曜日 : </span>
          <Select
            className="select"
            isMulti
            isClearable
            options={DayOfTheWeek}
            placeholder="何曜日に活動してる？"
          ></Select>
        </div>
        <p>チームコンセプト</p>
        <textarea
          className="concept"
          placeholder="チームコンセプトを自由に記述"
        ></textarea>
        <div>大会参加実績の記述場所</div>
        <table>
          <thead>
            <tr>
              <th>参加した年</th>
              <th>大会名</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span contentEditable="true">　</span>
              </td>
              <td>
                <span contentEditable="true">　</span>
              </td>
            </tr>
            <tr>
              <td>
                <span contentEditable="true">　</span>
              </td>
              <td>
                <span contentEditable="true">　</span>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">作成</button>
      </div>
    );
  }
}

export default TeamCreate;

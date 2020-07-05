import React from "react";
import Select from "react-select";

import "../style/TeamProfile.css";

// データの読み込み
import {
  SportName,
  Prefectures,
  ActivityFrequency,
  DayOfTheWeek,
} from "../date/date";

export const TeamProfile = (props) => {
  return (
    <div>
      <div className="selectBlock">
        <p>競技</p>
        <Select
          className="select"
          isClearable
          options={SportName}
          placeholder="何のスポーツ？"
        ></Select>
      </div>
      <div className="selectBlock">
        <p>活動拠点</p>
        <Select
          className="select"
          isMulti
          isClearable
          options={Prefectures}
          placeholder="どこで活動してる？"
        ></Select>
      </div>
      <div className="selectBlock">
        <p>活動頻度</p>
        <Select
          className="select"
          isClearable
          options={ActivityFrequency}
          placeholder="どれくらい活動してる？"
        ></Select>
      </div>
      <div className="selectBlock">
        <p>活動曜日</p>
        <Select
          className="select"
          isMulti
          isClearable
          options={DayOfTheWeek}
          placeholder="何曜日に活動してる？"
        ></Select>
      </div>
    </div>
  );
};

import React from "react";
import Select from "react-select";

import "../style/TeamProfile.css";

// データの読み込み
import {
  SportName,
  Prefectures,
  ActivityFrequency,
  DayOfTheWeek,
} from "../data/data";

export const TeamProfile = () => {
  return (
    <div>
      <div className="selectBlock">
        <p>競技</p>
        <Select
          className="profileSelect"
          isClearable
          isSearchable
          options={SportName}
          placeholder="何のスポーツ？"
        />
      </div>
      <div className="selectBlock">
        <p>活動拠点</p>
        <Select
          className="profileSelect"
          isMulti
          isClearable
          options={Prefectures}
          placeholder="どこで活動してる？"
        />
      </div>
      <div className="selectBlock">
        <p>活動頻度</p>
        <Select
          className="profileSelect"
          isClearable
          options={ActivityFrequency}
          placeholder="どれくらい活動してる？"
        />
      </div>
      <div className="selectBlock">
        <p>活動曜日</p>
        <Select
          className="profileSelect"
          isMulti
          isClearable
          options={DayOfTheWeek}
          placeholder="何曜日に活動してる？"
        />
      </div>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";

// material-uiの読み込み
import { AppBar, Toolbar, Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// CSSの読み込み
import "../style/TeamSearch.css";

// 他ファイルからコンポーネントの読み込み
import {
  SportName,
  Prefectures,
  ActivityFrequency,
  DayOfTheWeek,
} from "../data/data";
import { TeamSearchCard } from "./TeamSearchCard";

// データベースとの通信
const url = "http://localhost:8080/api/search";

const TeamSearch = () => {
  const [sportName, setSportName] = useState(""),
    [prefectures, setPrefectures] = useState(""),
    [activityFrequency, setActivityFrequency] = useState(""),
    [dayOfTheWeek, setDayOfTheWeek] = useState(""),
    [searchResultData, setSearchResultData] = useState([]);

  const TeamSearchBtn = () => {
    setSportName(document.sport_name.select.value);
    setPrefectures(document.prefectures_name.select.value);
    setActivityFrequency(document.activity_frequency_name.select.value);
    setDayOfTheWeek(document.day_of_the_week_name.select.value);
    SearchInfo();
  };

  // 検索機能の記述
  let searchResults = "";

  const SearchInfo = () => {
    axios
      .get(
        url /*, {
        params: {
          sportName: sportName,
          prefectures: prefectures,
          activityFrequency: activityFrequency,
          dayOfTheWeek: dayOfTheWeek,
        },
      }*/
      )
      //get(エンドポイント, { params: {送りたいパラメーターの指定}　}
      .then((res) => {
        setSearchResultData(res.data);
        // 通信に成功後レスポンスが返ってきた時に実行したい処理
        //取得データ全てをリスト化表示

        // for (var i = 0; i < res.data.length; i++) {
        //   arr = arr.concat(res.data[i]);
        //   setSearchResultData(JSON.stringify(arr));
        // }

        //   for (var i = 0; i < res.data.length; i++) {
        //     arr.push(
        //       <li key={res.data[i].id}>
        //         {res.data[i].id}/{res.data[i].user}/{res.data[i].address}/
        //         {res.data[i].password}
        //       </li>
        //     );
        //   }
        //   fetchUserInfo(arr);
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        alert(error);
      });
  };

  const [freeWord, setFreeWord] = useState("");
  const freeWordChange = (e) => {
    setFreeWord(e.target.value);
  };
  return (
    <div>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <form name="sport_name">
            <Select
              className="select"
              isClearable
              options={SportName}
              placeholder="スポーツ名"
              name="select"
            />
          </form>
          <form name="prefectures_name">
            <Select
              className="select"
              isClearable
              options={Prefectures}
              placeholder="活動地域"
              name="select"
            />
          </form>
          <form name="activity_frequency_name">
            <Select
              className="select"
              isClearable
              options={ActivityFrequency}
              placeholder="活動頻度"
              name="select"
            />
          </form>
          <form name="day_of_the_week_name">
            <Select
              className="select"
              isClearable
              options={DayOfTheWeek}
              placeholder="活動曜日"
              name="select"
            />
          </form>
          <TextField
            className="freeWordBox"
            size="small"
            label="フリーワード"
            variant="standard"
            name=""
            value={freeWord}
            onChange={freeWordChange}
          />
          <Button color="inherit" onClick={TeamSearchBtn}>
            <SearchIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <div>{searchResults}</div>
      {searchResultData.map((data) => (
        <TeamSearchCard
          id={data.id}
          team_name={data.team_name}
          picture={data.picture}
          sport_name={data.sport_name}
          prefectures={data.prefectures}
          activity_frequency={data.activity_frequency}
          day_of_the_week={data.day_of_the_week}
          team_concept={data.team_concept}
        />
      ))}
    </div>
  );
};

export default TeamSearch;

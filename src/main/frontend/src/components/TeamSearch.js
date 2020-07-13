import React, { useState } from "react";
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
const url = "http://localhost:8080/api/Search";

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
  let arr = [];

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
        // 通信に成功後レスポンスが返ってきた時に実行したい処理
        //取得データ全てをリスト化表示
        for (var i = 0; i < res.data.length; i++) {
          setSearchResultData(arr.concat(res.data[i]));
        }
        //   for (var i = 0; i < res.data.length; i++) {
        //     arr.push(
        //       <li key={res.data[i].id}>
        //         {res.data[i].id}/{res.data[i].user}/{res.data[i].address}/
        //         {res.data[i].password}
        //       </li>
        //     );
        //   }
        //   fetchUserInfo(arr);
        alert(res.data[i]);
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
        alert(error);
      });
  };

  const searchResults = searchResultData.map((data) => (
    <TeamSearchCard props={data} />
  ));

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
    </div>
  );
};

export default TeamSearch;

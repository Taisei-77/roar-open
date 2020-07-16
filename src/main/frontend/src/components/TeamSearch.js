import React, { useState, useEffect, useReducer } from "react";
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

// searchResultDataを入れておくための変数
let searchResultDataBox = "";

// useReducerと連動。
const reducer = (state, action) => {
  switch (action.type) {
    case "reducerUpdate":
      return {
        ...state,
        currentPage: 1,
        sum: searchResultDataBox.length, //データ総件数
        per: 10, //1ページあたりの表示件数
        pageAmount: Math.ceil(searchResultDataBox.length / 10), //ページの総数
        resourceData: searchResultDataBox.slice(0, 10), //ページに表示するデータ（配列型式）
      };
    // 前へページを押した時に実行される
    case "viewPreview":
      return {
        ...state,
        currentPage: state.currentPage - 1,
        resourceData: action.data, //表示するデータを書く
      };
    case "viewNext":
      return {
        ...state,
        currentPage: state.currentPage + 1,
        resourceData: action.data, //表示するデータを書く
      };
    default:
  }
};

const TeamSearch = () => {
  // ユーザーが検索のために選択した値を管理するstate
  const [sportName, setSportName] = useState(""),
    [prefectures, setPrefectures] = useState(""),
    [activityFrequency, setActivityFrequency] = useState(""),
    [dayOfTheWeek, setDayOfTheWeek] = useState(""),
    [searchResultData, setSearchResultData] = useState([]); //検索結果を管理するためのstate

  const [state, dispatch] = useReducer(reducer, {
    currentPage: 1, //現在のページ
    sum: searchResultData.length, //データ総件数
    per: 10, //1ページあたりの表示件数
    pageAmount: Math.ceil(searchResultData.length / 10), //ページの総数
    resourceData: searchResultData, //ページに表示するデータ（配列型式）
  });

  useEffect(() => {
    searchResultDataBox = searchResultData;
    return dispatch({ type: "reducerUpdate" });
  }, [searchResultData]);

  // 検索ボタンを押した時に実行される処理
  const TeamSearchBtn = () => {
    setSportName(document.sport_name.select.value);
    setPrefectures(document.prefectures_name.select.value);
    setActivityFrequency(document.activity_frequency_name.select.value);
    setDayOfTheWeek(document.day_of_the_week_name.select.value);
    SearchInfo();
    window.scrollTo(0, 0);
  };

  // 検索結果を表示するデータを切り出してくれる処理。
  const sliceData = (offset, per) => {
    return searchResultData.slice(offset, offset + per);
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
        // 通信に成功後レスポンスが返ってきた時に実行したい処理
        //取得データ全てをリスト化表示
        setSearchResultData(res.data);
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

  // 前へボタンを押すと実行される処理
  const viewPreview = () => {
    window.scrollTo(0, 0);
    const offset = (state.currentPage - 2) * state.per;
    return dispatch({
      type: "viewPreview",
      data: sliceData(offset, state.per),
    });
  };

  // 次へボタンを押すと実行される処理
  const viewNext = () => {
    window.scrollTo(0, 0);
    const offset = state.currentPage * state.per;
    return dispatch({
      type: "viewNext",
      data: sliceData(offset, state.per),
    });
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
      <div>
        {/*　DBから取得した値を1つずつ取り出して、map以下の処理を個数分行う。 */}
        {state.resourceData.length > 0 ? (
          state.resourceData.map((data) => (
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
          ))
        ) : (
          <p>検索結果は0件でした。</p>
        )}
      </div>
      <div>
        <Button onClick={viewPreview} disabled={state.currentPage === 1}>
          前へ
        </Button>
        <span>
          {state.currentPage}/{state.pageAmount}
        </span>
        <Button
          onClick={viewNext}
          disabled={
            state.currentPage === state.pageAmount || state.pageAmount === 0
          }
        >
          次へ
        </Button>
      </div>
    </div>
  );
};

export default TeamSearch;

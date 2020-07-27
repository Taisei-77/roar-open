import React, { useState } from "react";
// material-UIの読み込み
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "../style/TeamCreate.css";

import axios from "axios";

// コンポーネントの読み込み
import { CreatePhoto } from "../UIkit/CreatePhoto";
import { TeamProfile } from "./TeamProfile";
import { CompePartPerform } from "./CompePartPerform";

export const TeamCreate = (props) => {
  const [teamNameValue, setTeamNameValue] = useState(""), //チーム名
    [images, setImages] = useState(""), //画像のURL
    [teamConceptValue, setTeamConceptValue] = useState(""); //チームコンセプト

  //　入力値を取得するイベント
  const hadleValueChenge = (e) => {
    switch (e.target.name) {
      case "teamConcept":
        setTeamConceptValue(e.target.value);
        break;
      case "teamName":
        setTeamNameValue(e.target.value);
        break;
    }
  };

  // 追加ボタンを押すと、大会参加実績を追加するための記述（上限は５個に設定している。）。
  const [compePartPerform, setCompePartPerform] = useState([]);
  const [keyNumber, setKeyNumber] = useState(-1);

  // 大会参加実績の記入欄を増やす関数
  function handleClick() {
    if (compePartPerform.length <= 4) {
      setKeyNumber(keyNumber + 1);
      setCompePartPerform(compePartPerform.concat(keyNumber));
    }
  }
  const compePartPerforms = compePartPerform.map((number) => (
    <CompePartPerform key={number} />
  ));

  //画像URLを取得しセット
  const getImages = (imagesUrl) => {
    setImages(imagesUrl);
  };

  // データベースのAPI
  const url = "http://localhost:8080/api/search";

  //作成ボタン
  const teamCreateBtn = () => {
    //送信
    axios
      .post(url, {
        teamName: teamNameValue,
        picture: images,
        sportName: document.getElementsByName("sport_name")[0].value,
        prefectures: document.getElementsByName("prefectures_name")[0].value,
        activityFrequency: document.getElementsByName(
          "activity_frequency_name"
        )[0].value,
        dayOfTheWeek: document.getElementsByName("day_of_the_week_name")[0]
          .value,
        teamConcept: teamConceptValue,
      })
      .then(() => {
        props.history.push("/Chat");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="teamCreateBody">
      <div className="teamCreateContainer">
        <TextField
          id="teamName"
          label="チーム名"
          name="teamName"
          value={teamNameValue}
          onChange={hadleValueChenge}
        />
      </div>
      <CreatePhoto
        className="teamCreateContainer"
        height={450}
        width={700}
        myTitle="チームの写真"
        getImages={getImages}
        storageFolder={"team_images"}
      />
      <div>基本プロフィール</div>
      <TeamProfile className="teamCreateContainer" />
      <div className="teamCreateContainer">
        <TextField
          id="teamConcept"
          label="チームコンセプト"
          multiline
          rows={4}
          // DBに値を送るための記述
          name="teamConcept"
          value={teamConceptValue}
          onChange={hadleValueChenge}
        />
      </div>
      <div className="teamCreateContainer">
        <span>大会参加実績</span>
        <Button onClick={handleClick}>追加する</Button>
        <div>{compePartPerforms}</div>
      </div>
      <div className="teamCreateButton">
        <Button variant="contained" type="submit" onClick={teamCreateBtn}>
          作成
        </Button>
      </div>
    </div>
  );
};

export default TeamCreate;

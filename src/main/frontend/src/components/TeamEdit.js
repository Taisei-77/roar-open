import React, { useState } from "react";

import { Link } from "react-router-dom";
// material-UIの読み込み
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "../style/TeamEdit.module.css";

import axios from "axios";

// コンポーネントの読み込み
import { CreatePhoto } from "../UIkit/index";
import { TeamProfile } from "./TeamProfile";
// import { CompePartPerform } from "./CompePartPerform";

export const TeamEdit = (props) => {
  const {
    team_id,
    before_team_name,
    before_picture,
    before_sport_name,
    before_prefectures,
    before_activity_frequency,
    before_day_of_the_week,
    before_team_concept,
  } = props.location.state;
  const [teamNameValue, setTeamNameValue] = useState(before_team_name), //チーム名
    [images, setImages] = useState(before_picture), //画像のURL
    [teamConceptValue, setTeamConceptValue] = useState(before_team_concept); //チームコンセプト
  //TeamListDetail.jsから受け取ったチーム情報

  //　入力値を取得するイベント
  const handleValueChange = (e) => {
    switch (e.target.name) {
      case "teamConcept":
        setTeamConceptValue(e.target.value);
        break;
      case "teamName":
        setTeamNameValue(e.target.value);
        break;
      //no default
    }
  };

  // 追加ボタンを押すと、大会参加実績を追加するための記述（上限は５個に設定している。）。
  // const [compePartPerform, setCompePartPerform] = useState([]);
  // const [keyNumber, setKeyNumber] = useState(-1);

  // 大会参加実績の記入欄を増やす関数
  // function handleClick() {
  //   if (compePartPerform.length <= 4) {
  //     setKeyNumber(keyNumber + 1);
  //     setCompePartPerform(compePartPerform.concat(keyNumber));
  //   }
  // }
  // const compePartPerforms = compePartPerform.map((number) => (
  //   <CompePartPerform key={number} />
  // ));

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
        teamId: team_id, //team_idでどのチームの編集をするのかを管理する。
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
    <div>
      <div className={styles.teamEditTitleBar}>
        <p className={styles.teamEditTitle}>チームの編集</p>
        <Link className={styles.teamEditPreviewBtn} to="/Home">
          変更せずに戻る
        </Link>
      </div>
      <div className={styles.teamCreateBody}>
        <div className={styles.teamCreateContainer}>
          <TextField
            id="teamName"
            label="チーム名"
            name="teamName"
            value={teamNameValue}
            defaultValue={before_team_name}
            onChange={handleValueChange}
          />
        </div>
        <CreatePhoto
          className={styles.teamCreateContainer}
          height={450}
          width={700}
          myTitle="チームの写真"
          getImages={getImages}
          firstImages={before_picture}
          storageFolder={"team_images"}
        />
        {/* <div className={styles.basicProfile}>基本プロフィール</div> */}
        <TeamProfile
          className={styles.teamCreateContainer}
          before_sport_name={before_sport_name}
          before_prefectures={before_prefectures}
          before_activity_frequency={before_activity_frequency}
          before_day_of_the_week={before_day_of_the_week}
        />
        <div className={styles.teamCreateContainer}>
          <TextField
            id="teamConcept"
            label="チームコンセプト"
            multiline
            rows={4}
            className={styles.teamConcept}
            // DBに値を送るための記述
            name="teamConcept"
            value={teamConceptValue}
            onChange={handleValueChange}
          />
        </div>
        {/* <div className={styles.teamCreateContainer}>
          <span>大会参加実績</span>
          <Button onClick={handleClick}>追加する</Button>
          <div>{compePartPerforms}</div>
        </div> */}
        <div className={styles.teamCreateButton}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={teamCreateBtn}
          >
            上記の内容に変更
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamEdit;

import React, { useState } from "react";
// material-UIの読み込み
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import styles from "../style/TeamCreate.module.css";

import axios from "axios";
import { auth, db } from "../firebase/index";

// コンポーネントの読み込み
import { CreatePhoto } from "../UIkit/index";
import { TeamProfile } from "./TeamProfile";
// import { CompePartPerform } from "./CompePartPerform";

export const TeamCreate = (props) => {
  const [teamNameValue, setTeamNameValue] = useState(""), //チーム名
    [images, setImages] = useState(""), //画像のURL
    [teamConceptValue, setTeamConceptValue] = useState(""); //チームコンセプト

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
      .then((res) => {
        //firebaseDBにチャットルーム作成
        db.collection("chat")
          .doc("teamId" + res.data.teamId)
          .set({
            message: [],
          })
          .then(function () {
            console.log("Document successfully written!");
          })
          .catch(function (error) {
            alert("チャットルーム作成エラー：" + error);
          });

        //作成者をチームに参加させる
        axios
          .post("http://localhost:8080/api/usersTeams", {
            uid: auth.currentUser.uid,
            teamId: res.data.teamId,
            teamName: res.data.teamName,
          })
          .then(() => {
            props.history.push("/Chat");
          })
          .catch((error) => {
            alert("チーム参加エラー：" + error);
          });
      })
      .catch((error) => {
        alert("チーム作成エラー：" + error);
      });
  };

  return (
    <div>
      <p className={styles.teamCreateTitle}>チームの作成</p>
      <div className={styles.teamCreateBody}>
        <div className={styles.teamCreateContainer}>
          <TextField
            id="teamName"
            label="チーム名"
            name="teamName"
            value={teamNameValue}
            onChange={handleValueChange}
            required
          />
        </div>
        <CreatePhoto
          className={styles.teamCreateContainer}
          height={450}
          width={700}
          myTitle="チームの写真"
          getImages={getImages}
          storageFolder={"team_images"}
        />
        {/* <div className={styles.basicProfile}>基本プロフィール</div> */}
        <TeamProfile className={styles.teamCreateContainer} />
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
            上記の内容で チーム を作る
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamCreate;

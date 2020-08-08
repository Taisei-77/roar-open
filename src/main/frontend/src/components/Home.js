import React, { useState, useEffect } from "react";
import styles from "../style/Home.module.css";

import Profile from "./Profile";
import HomeTeamList from "./HomeTeamList";

import { auth, db } from "../firebase/index";
import axios from "axios";

const usersTeams_url = "http://localhost:8080/api/usersTeams"; //uid取得
const search_url = "http://localhost:8080/api/search"; //searchInfoからチーム情報取得

const Home = () => {
  const [teamList, setTeamList] = useState([]),
    [teamCount, setTeamCount] = useState(0);
  // [teamInfoList, setTeamInfoList] = useState([]);

  //mySQLから取得したチーム情報を格納する変数
  let teamInfoList = [];
  // const UserInfo = () => {
  //   axios
  //     .get(url + "/" + auth.currentUser.uid)
  //     .then((res) => setIcon(res.data.icon));
  // };

  // useEffect(() => {
  //   UserInfo();
  // }, []);
  const authUid = auth.currentUser.uid;
  useEffect(() => {
    let resData = [];
    const getTeamList = async () => {
      // チーム情報受信API
      await axios
        .get(usersTeams_url + "/" + authUid)
        .then((res) => {
          //mySQLのusers_teams_infoテーブルから、ログインユーザーのUidと一致するフィールドを取得
          // res.data は　[{id:値 , teams_uid:値 , teams_team_id:値 , teams_team_name:値 }]で返ってくる。
          setTeamCount(res.data.length); //所属チーム数を取得し、TeamCountのstateを更新。
          resData = res.data;
          for (let i = 0; i < resData.length; i++) {
            //team_idと一致するチーム情報をMySQLのsearch_infoから検索して取得する。
            axios
              .get(search_url, {
                params: {
                  team_name: "",
                  teamId: resData[i].teamId,
                  sportName: "",
                  prefectures: "",
                  activityFrequency: "",
                  dayOfTheWeek: "",
                  freeWord: "",
                },
              })
              .then((res) => {
                //res.dataは [{activityFrequency:値 , count:値, dayOfTheWeek:値, picture:値, prefectures:値, sportName:値,
                //             teamConcept:値, teamId:値,  teamName:値,  }]　この形で返ってくる。
                teamInfoList = teamInfoList.concat(res.data); //teamInfoListにres.dataをループ毎に格納する。
                if (teamInfoList.length == resData.length) {
                  //ループの最後にteamListのstateを、teamInfoListに変更する。
                  setTeamList(teamInfoList);
                  console.log(teamInfoList);
                }
              })
              .catch((error) => {
                alert(error);
              });
          }
        })
        .catch((error) => {
          alert(error);
        });
    };
    // const getTeamInfoList = async () => {
    //   for (let i = 0; i < resData.length; i++) {
    //     axios
    //       .get(search_url, { params: { team_name: resData[i] } })
    //       .then((res) => {
    //         console.log("TeamInfo:" + res.data);
    //         setTeamInfoList(res.data);
    //       })
    //       .catch((error) => {
    //         alert(error);
    //       });
    //   }
    // };
    getTeamList();
    // getTeamInfoList();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeader}>ホーム</div>
      <div className={styles.topContainer}>
        <Profile teamCount={teamCount} />
      </div>
      <div className={styles.teamListContainer}>
        <div className={styles.teamListTitle}>所属チーム一覧</div>
        <div className={styles.teamListMain}>
          <div className={styles.teamList}>
            {/* 所属チームのデータをmap()で<HomeTeamList>に展開する */}
            {teamList.map((data) => (
              <HomeTeamList data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useEffect } from "react";
import styles from "../style/Home.module.css";

import Profile from "./Profile";
import HomeTeamList from "./HomeTeamList";

import { auth, db } from "../firebase/index";
import axios from "axios";

const Home = () => {
  // const UserInfo = () => {
  //   axios
  //     .get(url + "/" + auth.currentUser.uid)
  //     .then((res) => setIcon(res.data.icon));
  // };

  // useEffect(() => {
  //   UserInfo();
  // }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeHeader}>ホーム</div>
      <div className={styles.topContainer}>
        <Profile />
      </div>
      <div className={styles.teamListContainer}>
        <div className={styles.teamListTitle}>所属チーム一覧</div>
        <div className={styles.teamListMain}>
          <div className={styles.teamList}>
            {/* 所属チームのデータをmap()で<HomeTeamList>に展開する */}
            <HomeTeamList />
            <HomeTeamList />
            <HomeTeamList />
            <HomeTeamList />
            <HomeTeamList />
            <HomeTeamList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

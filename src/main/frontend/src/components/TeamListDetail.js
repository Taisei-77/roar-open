import React from "react";

import { auth } from "../firebase/index";
import axios from "axios";

//propsにhistoryを渡すため
import { Link } from "react-router-dom";

import styles from "../style/TeamListDetail.module.css";
import { Button } from "@material-ui/core";

import { GiJapan, GiRunningShoe } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

// スタイルの設定

const TeamListDetail = (props) => {
  //チームの編集
  const handleEdit = () => {};

  //チームの退会
  const handleWithdraw = () => {};
  return (
    <div className={styles.container}>
      <div className={styles.team_details_title}>チーム詳細</div>
      <div className={styles.team_details_main}>
        <p className={styles.team_name}>{props.team_name}</p>
        <img
          className={styles.teamPicture}
          src={props.picture}
          alt="チーム画像"
        />
        <p className={styles.team_info_title}>基本プロフィール</p>
        <div className={styles.team_info_container}>
          <div className={styles.team_info_card}>
            <div
              className={`${styles.team_info_card_title} ${styles.sport_name_background_color}`}
            >
              <GiRunningShoe className={styles.team_info_card_icon} />
              スポーツ
            </div>
            <div className={styles.team_info_card_body}>
              <p className={styles.team_info_card_value}>{props.sport_name}</p>
            </div>
          </div>
          <div className={styles.team_info_card}>
            <div
              className={`${styles.team_info_card_title} ${styles.prefectures_background_color}`}
            >
              <GiJapan className={styles.team_info_card_icon} />
              活動地域
            </div>
            <div className={styles.team_info_card_body}>
              <p className={styles.team_info_card_value}>{props.prefectures}</p>
            </div>
          </div>
          <div className={styles.team_info_card}>
            <div
              className={`${styles.team_info_card_title} ${styles.activity_frequency_background_color}`}
            >
              <DiCodeigniter className={styles.team_info_card_icon} />
              活動頻度
            </div>
            <div className={styles.team_info_card_body}>
              <p className={styles.team_info_card_value}>
                {props.activity_frequency}
              </p>
            </div>
          </div>
          <div className={styles.team_info_card}>
            <div
              className={`${styles.team_info_card_title} ${styles.day_of_the_week_background_color}`}
            >
              <FaRegCalendarAlt className={styles.team_info_card_icon} />
              活動曜日
            </div>
            <div className={styles.team_info_card_body}>
              <p className={styles.team_info_card_value}>
                {props.day_of_the_week}
              </p>
            </div>
          </div>
        </div>
        <p className={styles.team_info_title}>チームコンセプト</p>
        <p className={styles.team_concept}>{props.team_concept}</p>
        <div className={styles.edit_btn}>
          <Link
            to={{
              pathname: "/TeamEdit",
              state: {
                team_id: props.team_id,
                before_team_name: props.team_name,
                before_picture: props.picture,
                before_sport_name: props.sport_name,
                before_prefectures: props.prefectures,
                before_activity_frequency: props.activity_frequency,
                before_day_of_the_week: props.day_of_the_week,
                before_team_concept: props.team_concept,
              },
            }}
          >
            <Button variant="contained" color="primary" onClick={handleEdit}>
              内容を編集する
            </Button>
          </Link>
        </div>
        <div className={styles.withdraw_btn}>
          <Button variant="contained" size="small" onClick={handleWithdraw}>
            チームを退会する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamListDetail;

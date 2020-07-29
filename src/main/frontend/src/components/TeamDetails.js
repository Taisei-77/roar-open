import React from "react";

import styles from "../style/TeamDetails.module.css";
import { Button } from "@material-ui/core";

import { GiJapan, GiRunningShoe } from "react-icons/gi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";

// スタイルの設定

const TeamDetails = (props) => {
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
        <div className={styles.join_btn}>
          <Button variant="contained" color="primary">
            {props.team_name}に参加する
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;

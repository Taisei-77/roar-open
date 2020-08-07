import React, { useState, useEffect } from "react";
import styles from "../style/Profile.module.css";

import { FcSettings } from "react-icons/fc";

import { Link } from "react-router-dom";
import { auth, db } from "../firebase/index";
import axios from "axios";

const url = "http://localhost:8080/api/profile";

const Profile = (props) => {
  const [name, setName] = useState(""),
    [icon, setIcon] = useState(""),
    [profile, setProfile] = useState(""),
    [activity, setActivity] = useState(""),
    [like, setLike] = useState(""),
    [sns, setSns] = useState(""),
    [gallery, setGallery] = useState("");

  //ユーザー名取得
  db.collection("users")
    .doc(auth.currentUser.uid)
    .get()
    .then((doc) => {
      console.log(doc.data().name);
      setName(doc.data().name);
    });

  const UserInfo = () => {
    //送信
    axios
      .get(url + "/" + auth.currentUser.uid) //パスパラメータにユーザーIDを追加
      .then((res) => {
        setIcon(res.data.icon);
        setProfile(res.data.profile);
        setActivity(res.data.activity);
        setLike(res.data.likes);
        setSns(res.data.sns);
        setGallery(res.data.gallery);
      })
      .catch((error) => {
        alert(error);
      });
  };

  useEffect(() => {
    UserInfo();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.mainHeader}>
        <div className={styles.mainHeaderLeft}>
          <img src={icon} className={styles.avatar} alt="アイコン画像" />
          <p className={styles.userName}>{name}</p>
        </div>
        <div className={styles.mainHeaderRight}>
          <p className={styles.teamCount}>{props.teamCount}</p>
          <p className={styles.teamCountTitle}>所属チーム数</p>
        </div>
      </div>
      <header className={styles.header}>
        <p className={styles.profileTitle}>プロフィール</p>
        <Link
          to={{
            pathname: "/ProfileCreate",
            state: {
              beforeIcon: icon,
              beforeProfile: profile,
              beforeActivity: activity,
              beforeLike: like,
              beforeSns: sns,
              beforeGallery: gallery,
            },
          }}
        >
          プロフィールの編集
          <FcSettings className={styles.profileCreateButton} />
        </Link>
      </header>

      <div className={styles.main}>
        <div className={styles.mainBody}>
          <div className={styles.mainContentLeft}>
            <div className={styles.profileItem}>自己紹介</div>
            <div className={styles.profileItemValue}>{profile}</div>
            <div className={styles.profileItem}>活動</div>
            <div className={styles.profileItemValue}>{activity}</div>
          </div>
          <div className={styles.mainContentRight}>
            <div className={styles.profileItem}>趣味</div>
            <div className={styles.profileItemValue}>{like}</div>
            <div className={styles.profileItem}>SNS</div>
            <div className={styles.profileItemValue}>{sns}</div>
            {/* <div className={styles.gallery}>ギャラリー</div>
            <div className={styles.galleryValue}>{gallery}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

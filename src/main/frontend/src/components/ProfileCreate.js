import React, { useState } from "react";
import styles from "../style/ProfileCreate.module.css";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";
import { CreatePhoto } from "../UIkit/index";
import { auth } from "../firebase/index";
import axios from "axios";

const url = "http://localhost:8080/api/profile";

const ProfileCreate = (props) => {
  const {
    beforeIcon,
    beforeProfile,
    beforeActivity,
    beforeLike,
    beforeSns,
    beforeGallery,
  } = props.location.state;
  const [icon, setIcon] = useState(beforeIcon),
    [profile, setProfile] = useState(beforeProfile),
    [activity, setActivity] = useState(beforeActivity),
    [like, setLike] = useState(beforeLike),
    [sns, setSns] = useState(beforeSns),
    [gallery, setGallery] = useState(beforeGallery);

  const handleChange = (e) => {
    //name属性に応じてvalueをセット
    switch (e.target.name) {
      case "profile":
        setProfile(e.target.value);
        break;
      case "activity":
        setActivity(e.target.value);
        break;
      case "like":
        setLike(e.target.value);
        break;
      case "sns":
        setSns(e.target.value);
        break;
      case "gallery":
        setGallery(e.target.value);
        break;
      //no default
    }
  };

  const handleFormSubmit = (e) => {
    //通常の送信処理等を停止
    e.preventDefault();
    //送信
    axios
      .post(url, {
        uid: auth.currentUser.uid,
        icon: icon,
        profile: profile,
        activity: activity,
        likes: like,
        sns: sns,
        gallery: gallery,
      })
      .then(() => {
        props.history.push("/Profile");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const getImages = (url) => {
    setIcon(url);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileCreateTitle}>プロフィール編集</div>
        <div>
          <Link className={styles.profileCreatePreviewBtn} to="/Home">
            変更せずに戻る
          </Link>
        </div>
      </header>
      <div className={styles.main}>
        <Form onSubmit={handleFormSubmit}>
          {/* <div className={styles.profileItem}>アイコン</div> */}
          <CreatePhoto
            height={140}
            width={140}
            getImages={getImages}
            firstImages={beforeIcon}
            myTitle="アイコン"
            storageFolder={"images"}
          />
          <div className={styles.mainContent}>
            <div className={styles.mainContentLeft}>
              <div className={styles.profileItem}>プロフィール</div>
              <TextField
                name="profile"
                multiline
                rows={4}
                variant="outlined"
                value={profile}
                className={styles.profileItemValue}
                onChange={handleChange}
              />

              <div className={styles.profileItem}>活動</div>
              <TextField
                name="activity"
                multiline
                rows={4}
                variant="outlined"
                value={activity}
                className={styles.profileItemValue}
                onChange={handleChange}
              />

              <div className={styles.profileItem}>趣味</div>
              <TextField
                name="like"
                multiline
                rows={4}
                variant="outlined"
                value={like}
                className={styles.profileItemValue}
                onChange={handleChange}
              />

              <div className={styles.profileItem}>SNS</div>
              <TextField
                name="sns"
                multiline
                rows={4}
                variant="outlined"
                value={sns}
                className={styles.profileItemValue}
                onChange={handleChange}
              />
            </div>
            <div className={styles.mainContentRight}>
              <div className={styles.profileItem}>ギャラリー</div>
              <div>
                <Form.Group>
                  <Form.File name="" value="" />
                </Form.Group>
              </div>
            </div>
          </div>
          <div className={styles.submitBtn}>
            <Button type="submit" variant="contained" color="primary">
              プロフィールに反映させる
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ProfileCreate;

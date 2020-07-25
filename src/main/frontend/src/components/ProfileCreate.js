import React, { useState } from "react";
import "../style/Profile.css";
import { Container, Col, Form, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { CreatePhoto } from "../UIkit/CreatePhoto";
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
    <Container>
      <header>
        <div className="text-right m-3 p-3">
          <Link to="/Profile">キャンセル</Link>
        </div>
      </header>

      <Form onSubmit={handleFormSubmit}>
        <Row>
          <Col md={6}>
            <div className="my-3">アイコン</div>
            <CreatePhoto
              height={140}
              width={140}
              getImages={getImages}
              firstImages={beforeIcon}
            />
            <div className="my-3">プロフィール</div>
            <TextField
              name="profile"
              multiline
              rows={4}
              variant="outlined"
              value={profile}
              className="w-100"
              onChange={handleChange}
            />

            <div className="my-3">活動</div>
            <TextField
              name="activity"
              multiline
              rows={4}
              variant="outlined"
              value={activity}
              className="w-100"
              onChange={handleChange}
            />

            <div className="my-3">趣味</div>
            <TextField
              name="like"
              multiline
              rows={4}
              variant="outlined"
              value={like}
              className="w-100"
              onChange={handleChange}
            />

            <div className="my-3">SNS</div>
            <TextField
              name="sns"
              multiline
              rows={4}
              variant="outlined"
              value={sns}
              className="w-100"
              onChange={handleChange}
            />
          </Col>
          <Col md={6}>
            <div className="my-3">ギャラリー</div>
            <div>
              <Form.Group>
                <Form.File name="" value="" />
              </Form.Group>
            </div>
          </Col>
        </Row>
        <Button type="submit" className="m-3">
          保存
        </Button>
      </Form>
    </Container>
  );
};

export default ProfileCreate;

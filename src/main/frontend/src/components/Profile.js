import React, { useState, useEffect } from "react";
import "../style/Profile.css";
import { Container, Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { auth } from "../firebase/index";
import axios from "axios";

const url = "http://localhost:8080/api/profile";

const Profile = () => {
  const [icon, setIcon] = useState(""),
    [profile, setProfile] = useState(""),
    [activity, setActivity] = useState(""),
    [like, setLike] = useState(""),
    [sns, setSns] = useState(""),
    [gallery, setGallery] = useState("");

  const UserInfo = () => {
    //送信
    axios
      .get(url + "/" + auth.currentUser.uid) //パスパラメータにユーザーIDを追加
      .then((res) => {
        // alert(res.data.user_name);
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
    <Container>
      <header>
        <div className="text-right m-3 p-3">
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
          </Link>
        </div>
      </header>

      <Row>
        <Col md={6}>
          {/* <div className="my-3">{icon}</div> */}

          <Image src={icon} height="140" width="140" roundedCircle />

          <div className="my-3">プロフィール</div>
          <div className="border p-2">{profile}</div>

          <div className="my-3">活動</div>
          <div className="border p-2">{activity}</div>

          <div className="my-3">趣味</div>
          <div className="border p-2">{like}</div>

          <div className="my-3">SNS</div>
          <div className="border p-2">{sns}</div>
        </Col>
        <Col md={6}>
          <div className="my-3">ギャラリー</div>
          <div className="border p-2">{gallery}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;

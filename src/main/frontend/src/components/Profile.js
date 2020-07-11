import React from "react";
import "../style/Profile.css";
import { Container, Col, Image, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    return (
      <Container>
        <header>
          <div  className="text-right m-3 p-3">
            <Link to={{ pathname: "/ProfileCreate", state: { name: "test" }}}>プロフィールの編集</Link>
          </div>
        </header>

        <Row>
          <Col md={6}>
            <div className="my-3">
              アイコン
            </div>
            <Image
             src=""
             rounded />
              
            <div className="my-3">
              プロフィール
            </div>
            <div className="border p-2">
              プロフィール内容
            </div>

            <div className="my-3">
              活動
            </div>
            <div className="border p-2">
              活動内容
            </div>

            <div className="my-3">
              趣味
            </div>
            <div className="border p-2">
              趣味内容
            </div>

            <div className="my-3">
              SNS
            </div>
            <div className="border p-2">
              SNS一覧
            </div>
          </Col>
          <Col md={6}>
            <div className="my-3">
              ギャラリー
            </div>
            <div className="border p-2">
              ギャラリー集
            </div>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default Profile;

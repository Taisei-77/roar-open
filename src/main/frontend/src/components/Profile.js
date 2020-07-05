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
            <Link to="/ProfileCreate">プロフィールの編集</Link>
          </div>
        </header>

        <Row>
          <Col md={6}>
            <div>
              アイコン
            </div>
            <Image
             src=""
             rounded />
              
            <div>
              プロフィール
            </div>
            <div>
              
            </div>

            <div>
              活動
            </div>
            <div>
              活動内容
            </div>

            <div>
              趣味
            </div>
            <div>
              趣味内容
            </div>

            <div>
              SNS
            </div>
            <div>
              SNS一覧
            </div>
          </Col>
          <Col md={6}>
            <div>
              ギャラリー
            </div>
            <div>
              ギャラリー集
            </div>
          </Col>
        </Row>
      </Container>


    );
  }
}

export default Profile;

import React from "react";
import "../style/Profile.css";
import { Col, Image, Row,} from "react-bootstrap";

const ProfileCreate = () => {
    return (
      <container>
        <header>
          <div className="text-right m-3 p-3">
            保存
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
              <textarea></textarea>
            </div>

            <div>
              活動
            </div>
            <div>
              <textarea></textarea>
            </div>

            <div>
              趣味
            </div>
            <div>
              <textarea></textarea>
            </div>

            <div>
              SNS
            </div>
            <div>
              <textarea></textarea>
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
      </container>


    );
}

export default ProfileCreate;

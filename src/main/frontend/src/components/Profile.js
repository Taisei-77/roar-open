import React from "react";
import "../style/Profile.css";
import { Col, Image,} from "react-bootstrap";

class Profile extends React.Component {
  render() {
    return (
      <container>
        <header>
          <div className="text-right m-3 p-3">
            プロフィールの編集
          </div>
        </header>

        
        <div>
          アイコン
        </div>
          <Col md={4}>
            <Image src="" rounded />
          </Col>
        

        <div>
          プロフィール
        </div>
        <div>
          プロフィール文
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

        <div>
          ギャラリー
        </div>
        <div>
          ギャラリー集
        </div>
      </container>


    );
  }
}

export default Profile;

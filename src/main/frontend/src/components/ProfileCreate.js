import React from "react";
import "../style/Profile.css";
import { Container, Col, Form, FormFile, FormGroup, Button, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";


const ProfileCreate = () => {
    return (
      <Container>
        <header>
          <div  className="text-right m-3 p-3">
            <Link to="/Profile">プロフィール</Link>
          </div>
        </header>

        <Form>
          <Row>
            <Col md={6}>
              <div>
                アイコン
              </div>
              <Form.Group>
                <Form.File
                  name=""
                  value="" />
              </Form.Group>
                
              <div>
                プロフィール
              </div>
              <Form.Group>
                <textarea
                  name=""
                  className="w-100"
                />
              </Form.Group>

              <div>
                活動
              </div>
              <Form.Group>
                <textarea 
                  name=""
                />
              </Form.Group>

              <div>
                趣味
              </div>
              <Form.Group>
                <textarea
                  name=""
                />
              </Form.Group>

              <div>
                SNS
              </div>
              <Form.Group>
                <textarea
                  name=""
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <div>
                ギャラリー
              </div>
              <div>
                <Form.Group>
                  <Form.File name="" value="" />
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Button type="submit">保存</Button>
        </Form>
      </Container>


    );
}

export default ProfileCreate;

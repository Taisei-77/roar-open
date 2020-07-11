import React from "react";
import "../style/Profile.css";
import { Container, Col, Form, FormFile, FormGroup, Button, Row,} from "react-bootstrap";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";


const ProfileCreate = (props) => {
    const { name } = props.location.state;
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
              <div className="my-3">
                アイコン
              </div>
                <Form.File
                  name=""
                  value="" />
                
              <div className="my-3">
                プロフィール
              </div>
                <TextField
                  name=""
                  multiline
                  rows={4}
                  variant="outlined"
                  value={name}
                  className="w-100"
                />

              <div className="my-3">
                活動
              </div>
                <TextField
                  name=""
                  multiline
                  rows={4}
                  variant="outlined"
                  value={name}
                  className="w-100"
                />

              <div className="my-3">
                趣味
              </div>
                <TextField
                  name=""
                  multiline
                  rows={4}
                  variant="outlined"
                  value={name}
                  className="w-100"
                />

              <div className="my-3">
                SNS
              </div>
                <TextField
                  name="sns"
                  multiline
                  rows={4}
                  variant="outlined"
                  value={name}
                  className="w-100"
                />

            </Col>
            <Col md={6}>
              <div className="my-3">
                ギャラリー
              </div>
              <div>
                <Form.Group>
                  <Form.File name="" value="" />
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Button type="submit" className="m-3">保存</Button>
        </Form>
      </Container>


    );
}

export default ProfileCreate;

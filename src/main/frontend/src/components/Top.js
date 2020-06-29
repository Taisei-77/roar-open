import React from "react";
import "../style/Top.css";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
class Top extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      loginShow: false,
      registerShow: false,
    };
  }

  render() {
    let loginClose = () => this.setState({ loginShow: false });
    let registerClose = () => this.setState({ registerShow: false });

    return (
      <div>
        <main>
          {/* <!-- ログイン新規会員登録モーダルの右上寄せブロック --> */}
          <ButtonToolbar className="float-right">
            <Button onClick={() => this.setState({ loginShow: true })}>
              ログイン
            </Button>
            <Button
              onClick={() => this.setState({ registerShow: true })}
              style={{ marginLeft: 5 }}
            >
              新規会員登録
            </Button>

            <Modal show={this.state.loginShow} onHide={loginClose}>
              <Modal.Header closeButton>
                <Modal.Title>ログイン</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicEmail" className="m-3">
                    <Form.Label className="mb-3">メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="m-3">
                    <Form.Label className="mb-3">パスワード</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox" className="mb-3">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="m-3">
                    ログイン
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Form.Text className="text-muted m-3">
                  アカウントをお持ちでない場合、新規会員登録
                </Form.Text>
              </Modal.Footer>
            </Modal>

            <Modal show={this.state.registerShow} onHide={registerClose}>
              <Modal.Header closeButton>
                <Modal.Title>アカウントを作成</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formBasicName" className="m-3">
                    <Form.Label className="mb-3">ユーザーネーム</Form.Label>
                    <Form.Control type="name" placeholder="Username" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail" className="m-3">
                    <Form.Label className="mb-3">メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword" className="m-3">
                    <Form.Label className="mb-3">
                      パスワード
                      <span id="characterlimit">(半角英数字8~16桁)</span>
                    </Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="m-3">
                    登録
                  </Button>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Form.Text className="text-muted m-3">
                  すでにアカウントをお持ちの場合、ログイン
                </Form.Text>
              </Modal.Footer>
            </Modal>
          </ButtonToolbar>
          <div className="clearfix"></div>
          {/* <!-- 真ん中のメッセージブロック --> */}
          <div id="labelContents" className="text-center">
            <h1 id="labelTitle">roar</h1>
            <div id="labelExplanation">
              <p>スポーツ専門のチャットツールでチームの輪を広げよう</p>
              <p>簡単にチームのメンバーを募れる</p>
              <p>スポーツコミュニティユーザー数世界１位</p>
              <p>さあ、今すぐroarで新しい体験を...</p>
            </div>
            {/* <!--  ページ下部の登録ボタンのブロック--> */}
          </div>
          <div id="startUpContent" className="text-center">
            <Button id="startUp">今すぐはじめる</Button>
          </div>
        </main>
      </div>
    );
  }
}

export default Top;

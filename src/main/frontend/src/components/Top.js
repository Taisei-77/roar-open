import React, { useState } from "react";
import "../style/Top.css";
import { Button, ButtonToolbar, Modal, Form } from "react-bootstrap";
import { auth, db } from "../firebase/index";
import { Spinner } from "../UIkit/index";

const Top = (props) => {
  const [login, isLoginShow] = useState(false),
    [register, isRegisterShow] = useState(false),
    [login_email, setLogEmail] = useState(""),
    [login_pass, setLogPass] = useState(""),
    [register_user, setRegUser] = useState(""),
    [register_email, setRegEmail] = useState(""),
    [register_pass, setRegPass] = useState(""),
    [login_text, setLogin_text] = useState(false),
    [register_text, setRegister_text] = useState(false);
  //modalの切り替え
  const toggleModal = () => {
    isLoginShow(!login);
    isRegisterShow(!register);
  };

  //ボタンの回転のオンオフ
  const toggleSpinner = (flag) => {
    setLogin_text(flag);
    setRegister_text(flag);
  };

  //送信中ボタンを更新マークにする
  const login_button_text = login_text ? (
    <div className="d-flex justify-content-center spinner-border text-light spinner-border-sm">
      <Spinner />
    </div>
  ) : (
    "ログイン"
  );
  const register_button_text = register_text ? (
    <div className="d-flex justify-content-center spinner-border text-light spinner-border-sm">
      <Spinner />
    </div>
  ) : (
    "登録"
  );

  //テキストをセット
  const handleChange = (e) => {
    //name属性に応じてvalueをセット
    switch (e.target.name) {
      case "login_email":
        setLogEmail(e.target.value);
        break;
      case "login_pass":
        setLogPass(e.target.value);
        break;
      case "register_user":
        setRegUser(e.target.value);
        break;
      case "register_email":
        setRegEmail(e.target.value);
        break;
      case "register_pass":
        setRegPass(e.target.value);
        break;
      //no default
    }
  };

  //ログイン認証
  const sendLogin = async (e) => {
    if (login) {
      await auth
        .signInWithEmailAndPassword(login_email, login_pass)
        .then(() => {
          //正常終了時
          props.history.push("/Home");
        })
        .catch((error) => {
          toggleSpinner(false);
          alert("送信エラー　" + error);
        });
    } else if (register) {
      //新規登録認証
      await auth
        .createUserWithEmailAndPassword(register_email, register_pass)
        .then(() => {
          //正常終了時
          props.history.push("/Home");
        })
        .catch((error) => {
          toggleSpinner(false);
          alert("送信エラー　" + error);
        });
    }
  };

  //ユーザー名をfireStoreに登録
  const sendRegister = async () => {
    await db
      .collection("users")
      .doc(auth.currentUser.uid)
      .set({
        name: register_user,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        alert("登録エラー　Error writing document：" + error);
      });
  };

  //送信
  const handleFormSubmit = async (e) => {
    //通常の送信処理等を停止
    e.preventDefault();
    toggleSpinner(true);
    await sendLogin();

    //ユーザー名登録
    if (register) {
      await sendRegister();
    }
  };

  return (
    <div>
      <main>
        {/* <!-- ログイン新規会員登録モーダルの右上寄せブロック --> */}
        <ButtonToolbar className="float-right">
          <Button onClick={() => isLoginShow(true)}>ログイン</Button>
          <Button
            onClick={() => isRegisterShow(true)}
            style={{ marginLeft: 5 }}
          >
            新規会員登録
          </Button>

          <Modal show={login} onHide={() => isLoginShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>ログイン</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicEmail" className="m-3">
                  <Form.Label className="mb-3">メールアドレス</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="login_email"
                    value={login_email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="m-3">
                  <Form.Label className="mb-3">パスワード</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="login_pass"
                    value={login_pass}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group
                  controlId="formBasicCheckbox"
                  className="mb-3"
                ></Form.Group>
                <Button variant="primary" type="submit" className="m-3">
                  {/* ログインボタンのテキスト */}
                  {login_button_text}
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Form.Text className="text-muted m-3">
                アカウントをお持ちでない場合、
                <span className="btn btn-link" onClick={() => toggleModal()}>
                  新規会員登録
                </span>
              </Form.Text>
            </Modal.Footer>
          </Modal>

          <Modal show={register} onHide={() => isRegisterShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>アカウントを作成</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formBasicName" className="m-3">
                  <Form.Label className="mb-3">ユーザーネーム</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Username"
                    name="register_user"
                    value={register_user}
                    onChange={handleChange}
                    required
                    pattern="\S+.*" // 始まりは空白以外\S 以後は+ 文字. 全て* 許可
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail" className="m-3">
                  <Form.Label className="mb-3">メールアドレス</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="register_email"
                    value={register_email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="m-3">
                  <Form.Label className="mb-3">
                    パスワード
                    <span id="characterlimit">(半角英数字6~16桁)</span>
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="register_pass"
                    value={register_pass}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox"></Form.Group>
                <Button variant="primary" type="submit" className="m-3">
                  {/* 登録ボタンのテキスト */}
                  {register_button_text}
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Form.Text className="text-muted m-3">
                すでにアカウントをお持ちの場合、
                <span className="btn btn-link" onClick={() => toggleModal()}>
                  ログイン
                </span>
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
          <Button id="startUp" onClick={() => isRegisterShow(true)}>
            今すぐはじめる
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Top;

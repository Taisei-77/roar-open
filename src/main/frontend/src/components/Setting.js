import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth, db } from "../firebase/index";
import { Container, Button, Modal, TextField } from "@material-ui/core";
import styles from "../style/Setting.module.css";
import * as firebase from 'firebase';

const Setting = (props) => {

  const
   [open, setOpen] = useState(false),
   [password, setPassword] = useState("");

//ログアウトボタン
  const handleLogout = () => {
    props.toggleSidebar(false);
    auth.signOut();
  };

//modalを開く
  const handleOpen = () => {
    setOpen(true);
  };

//modalを閉じる
  const handleClose = () => {
    setOpen(false)
  };

//firestoreからドキュメントを削除する
  const dbDelete = () => {
    db.collection("users").doc(auth.currentUser.uid).delete()
    .then(() => {
      console.log("Document successfully deleted!");
    })
    .catch((error) => {
      console.error("Error removing document: ", error);
    });
  };

//アカウントを削除する
  const withdrawal = () => {
    var user = auth.currentUser;
    console.log(user);
    user.delete().then(() => {
      //うまくいけばユーザーが削除される
    })
    .catch((error) => {
      //エラーが起きた場合
      console.log(error);
    });
  };

//アカウントを削除する前に必要な再認証をする。
  const reLogin = () => {
    var user = auth.currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    );
    user.reauthenticateWithCredential(credential)
    .then(() => {
//再認証が完了した場合、アカウントを削除する関数が起動する
      dbDelete();
      withdrawal();
    })
    .catch((error) => {
//再認証が失敗した場合はエラーがアラートされる
      alert(error);
    });
  };

//再認証するために必要なpasswordを入力するためのもの
  const handleChange = (e) => {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        break;
    }
    // switch (e.target.name) {
    //   case "mail":
    //     setNewMail(e.target.value);
    //     break;
    // }
  };

  // const mailChange = () => {
  //   var user = auth.currentUser;
  //   user.updateEmail(newMail)
  //   .then(function() {
  //     // Update successful.
  //   })
  //   .catch(function(error) {
  //     // An error happened.
  //   });
  // };

  return (
    <Container>
      <div className={styles.title}>
        <h1 className="text-left">設定画面</h1>
      </div>
      <ul>
        <li>
          <div className={styles.btn}>メールアドレス変更</div>
        </li>
        <li>
          <div className={styles.btn} onClick={handleLogout}>ログアウト</div>
        </li>
        <li>
          <div className={styles.btn} onClick={handleOpen}>退会する</div>
        </li>
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
      >
        <div className={styles.modal}>
          <div className="m-4">
            <h2 className={styles.modalTitle}>本当に退会しますか？</h2>
            <div className={styles.modalBody}>
              <p>本当に退会するならパスワードを入力</p>
              <TextField
                type="password"
                placeholder="Your Password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.modalFooter}>
              <Button className="mt-3" onClick={reLogin}>退会する</Button>
              <Button className="mt-3" onClick={handleClose}>戻る</Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Setting;

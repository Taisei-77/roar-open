import React, { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../firebase/index";
import { Container, Button, Modal } from "@material-ui/core";
import styles from "../style/Setting.module.css";

const url = "http://localhost:8080/api/users";

const Setting = (props) => {

  const [open, setOpen] = useState(false);

  // const [userData, fetchUserInfo] = useState([]);
  // const UserInfo = () => {
  //   var arr = [];
  //   axios
  //     .get(url)
  //     //get(エンドポイント, { params: {送りたいパラメーターの指定}　}
  //     .then((res) => {
  //       // 通信に成功後レスポンスが返ってきた時に実行したい処理
  //       //取得データ全てをリスト化表示
  //       for (var i = 0; i < res.data.length; i++) {
  //         arr.push(
  //           <li key={res.data[i].id}>
  //             {res.data[i].id}/{res.data[i].user}/{res.data[i].address}/
  //             {res.data[i].password}
  //           </li>
  //         );
  //       }
  //       fetchUserInfo(arr);
  //     })
  //     .catch((error) => {
  //       // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
  //       alert(error);
  //     });
  //     console.log(userData);
  // };
  // //1回目のレンダー後一度だけ呼ばれる
  // useEffect(() => {
  //   UserInfo();
  // }, []);

  const handleLogout = () => {
    props.toggleSidebar(false);
    auth.signOut();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false)
  };

      // todo
      // ログアウト
      // 退会する
      // メアド変更

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
              <Button className="mt-3">退会する</Button>
              <Button className="mt-3" onClick={handleClose}>閉じる</Button>
            </div>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Setting;

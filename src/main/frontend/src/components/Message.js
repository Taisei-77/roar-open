import React from "react";
import styles from "../style/Message.module.css";
import { auth } from "../firebase/index";

const Message = (props) => {
  const currentUid = auth.currentUser.uid;
  if (props.uid === currentUid) {
    return (
      //現在ログインしているユーザーが送信したメッセージの描画
      <div className={`${styles.messageRight} ${styles.MessageContainer}`}>
        <div className={styles.message}>
          <div className={`${styles.textRight} ${styles.messageText}`}>
            {props.text}
          </div>
          <img className={styles.avatar} src={props.avatar} />
        </div>
        <p className={`${styles.dateRight} ${styles.date}`}>
          {props.dateString}
        </p>
      </div>
    );
  } else {
    return (
      //現在ログインしているユーザー以外が送信したメッセージの描画
      <div className={`${styles.messageLeft} ${styles.MessageContainer}`}>
        <div className={styles.message}>
          <img className={styles.avatar} src={props.avatar} />
          <div className={`${styles.textLeft} ${styles.messageText}`}>
            {props.text}
          </div>
        </div>
        <p className={`${styles.dateLeft} ${styles.date}`}>
          {props.dateString}
        </p>
      </div>
    );
  }
};

export default Message;

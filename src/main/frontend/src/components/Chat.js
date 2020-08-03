import React, { useState, useEffect } from "react";
import { db } from "../firebase/index";

import "react-chat-elements/dist/main.css";
import styles from "../style/Chat.module.css";

// import MessageList from "./MessageList";

import ChatGroupList from "./ChatGroupList";
import { MessageList, Input } from "react-chat-elements";
import { Button } from "@material-ui/core";

//現在時刻取得
const date = new Date();
const customDate =
  date.getFullYear() +
  "-" +
  (date.getMonth() + 1) +
  "-" +
  date.getDate() +
  " " +
  date.getHours() +
  ":" +
  date.getMinutes() +
  ":" +
  date.getSeconds();

// fireStoreのChatコレクションのroomドキュメントを参照する変数
let docRef = db.collection("Chat").doc("room");
let messageData = []; //colud fireStoreの内容を代入するための変数
const addMessageData = () => {
  docRef
    .get()
    .then((snapshot) => (messageData = snapshot.data().message))
    .catch((err) => alert("エラー"));
};

// メッセージの書き方
// const messages = [
//   {
//     position: "left", //メッセージの位置
//     type: "text", //メッセージの型
//     text: "サンプルチャット",　//メッセージのテキスト
//     date: new Date(customDate), //メッセージの時間
//   },
//   {
//     position: "right",
//     type: "text",
//     text: "サンプルチャット2",
//     date: new Date("2020-03-12 14:00:00"),
//   },
// ];
const Chat = () => {
  const [resultMessages, setResultMessages] = useState([]);

  useEffect(() => {
    const fn = async () => {
      await addMessageData();
      setResultMessages(messageData);
    };
    fn();

    console.log(messageData);
  }, []);

  //送信・追加
  const addMessage = () => {
    // ユーザーが入力したテキストを取得
    const messageValue = document.getElementById("messageValue").value;
    // ユーザーが送信する新しいメッセージ情報
    const newMessage = [
      {
        position: "right", //メッセージを右に配置
        type: "text",
        text: messageValue,
        date: new Date(customDate),
      },
    ];
    // 新しいメッセージをCloud Firestoreのメッセージ配列に追加する

    const saveMassage = messageData.concat(newMessage);
    docRef.set({ message: saveMassage });
    console.log(messageData);
    setResultMessages(saveMassage);
    addMessageData();
    // messageData変数に最新のメッセージデータを再代入する（更新する）。
    // docRef.get().then((doc) => (messageData = doc.data().message));
    // メッセージを取得
    // console.log(messageData);
    // setResultMessages(messageData);
    // console.log(resultMessages);
  };
  return (
    <div>
      <div className={styles.chat}>
        <div className={styles.list}>
          <ChatGroupList />
        </div>
        <div className={styles.message}>
          {/* {messageData.map((data) => (
            <MessageList dataSource={data} />
          ))} */}
          <MessageList
            toBottomHeight={"100%"}
            // lockable={true}
            dataSource={resultMessages}
          />
          <div>
            <input id="messageValue" placeholder="入力" />
            <Button variant="contained" onClick={() => addMessage()}>
              送信
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;

{
  /* <ChatItem
          avatar={"https://facebook.github.io/react/img/logo.svg"}
          alt={"アイコン"}
          title={"ユーザー名"}
          // subtitle={"What are you doing?"}
          // date={new Date()}
          unread={1}
        /> */
}

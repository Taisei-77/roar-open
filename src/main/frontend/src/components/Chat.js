import React, { useState, useEffect } from "react";

import { auth } from "../firebase/index";

import { db } from "../firebase/index";
import "react-chat-elements/dist/main.css";
import styles from "../style/Chat.module.css";
import Message from "./Message";
import ChatGroupList from "./ChatGroupList";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

//現在時刻取得
//使用時はcustomDateを直接使う。
const date = new Date();
const customDate =
  date.getFullYear() +
  "年" +
  (date.getMonth() + 1) +
  "月" +
  date.getDate() +
  "日" +
  date.getHours() +
  ":" +
  date.getMinutes(); //+
// ":"+
// date.getSeconds();

//変数の定義
let docRef = db.collection("Chat").doc("room"); // Cloud FirestoreのChatコレクションのroomドキュメントを参照する変数;
let messageData = []; //Colud Firestoreの内容を代入するための変数

//関数の定義
const messageAreaScroll = () => {
  const messageArea = document.getElementById("messageArea");
  messageArea.scrollTop = messageArea.scrollHeight;
};

const Chat = () => {
  const [resultMessages, setResultMessages] = useState([]), //メッセージ配列を管理する。
    [loading, isLoading] = useState(false); //描画を管理する。（初回レンダリングの準備が　完了=>ture 未完了=>false）

  //初回のレンダリングのみ起動。
  useEffect(() => {
    const fn = async () => {
      await initialMessageData();
    };
    fn();
  }, []);

  //初回レンダリング時に実行。Cloud Firestoreからメッセージ情報を取得して、ResultMessagesの値を取得した情報に置き換える。
  const initialMessageData = () => {
    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          //ドキュメントが存在した場合の処理
          messageData = doc.data().message; //Chatコレクション>roomドキュメント>データ>メッセージ配列をmessageDataへ代入。
          console.log("Document data:", doc.data());
          setResultMessages(messageData); //ResultMessagesの値を書き換える。
          console.log("a", messageData.message);
          isLoading(true); //初回レンダリング処理の準備が完了したことを示す。
        } else {
          //ドキュメントが存在しなかった場合の処理
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  };

  //送信・追加
  const addMessage = () => {
    // ユーザーが入力したテキストを取得
    const messageValue = document.getElementById("messageValue").value;
    // ユーザーが送信する新しいメッセージ情報
    const newMessage = [
      {
        avatar:
          "https://firebasestorage.googleapis.com/v0/b/roar-b54b1.appspot.com/o/images%2FIpUsst5ZpOB2GUy5?alt=media&token=82158741-deea-4fd4-bfe2-09ee67c2c6a1",
        uid: auth.currentUser.uid, //メッセージを右に配置
        // position: uid === userUid ならright　 uid !== userUid　ならleft
        type: "text",
        text: messageValue, //ユーザーが入力したテキスト
        dateString: customDate, // 2020/8/20/13:34のように表示される。
      },
    ];
    // 新しいメッセージをCloud Firestoreのメッセージ配列に追加する
    console.log("b", messageData);
    messageData = messageData.concat(newMessage);
    docRef.set({ message: messageData });
    console.log(messageData);
    console.log(messageData.message);
    setResultMessages(messageData);

    //textareaの値をクリアする
    document.getElementById("messageValue").value = "";
    messageAreaScroll();
  };

  if (loading === false) {
    //読み込み中
    return (
      <>
        <p>Loading..................</p>
      </>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.navBar}>チャット</div>
        <div className={styles.mainContainer}>
          <div className={styles.listContainer}>
            <div className={styles.searchBar}>
              <input className={styles.listSearchWord} type="text" />
              <Button>
                <SearchIcon className={styles.searchIcon} />
              </Button>
            </div>
            <ChatGroupList />
          </div>
          <div className={styles.messageContainer}>
            <div className={styles.searchBar}>
              <div className={styles.roomName}>チャット相手の名前</div>
              <input className={styles.messageSearchWord} type="text" />
              <Button>
                <SearchIcon className={styles.searchIcon} />
              </Button>
            </div>
            <div id="messageArea" className={styles.messageArea}>
              {resultMessages.map((data) => (
                <Message
                  avatar={data.avatar}
                  uid={data.uid} //メッセージの位置
                  text={data.text} //メッセージのテキスト
                  dateString={data.dateString} //時間
                  // notch={false} //ノッチ削除
                  // toBottomHeight={"100%"} //?
                />
              ))}
            </div>
            <div className={styles.messageActionArea}>
              <textarea
                id="messageValue"
                className={styles.submitText}
                placeholder="テキストを入力"
                maxLength="200"
                minLength="1"
              />
              <Button variant="contained" onClick={() => addMessage()}>
                送信
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Chat;

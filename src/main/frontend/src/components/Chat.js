import React, { useState, useEffect } from "react";
import "react-chat-elements/dist/main.css";
import { ChatItem } from "react-chat-elements";
import axios from "axios";
import { auth, db } from "../firebase/index";

import styles from "../style/Chat.module.css";
import { Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import { Spinner } from "../UIkit/index";
import Message from "./Message";

const Chat = () => {
  const [loading, isLoading] = useState(false), //描画を管理する
    [teamList, setTeamList] = useState([]), //取得チーム格納
    [show, isShow] = useState(false),
    [messageData, setMessageData] = useState([]),
    [id, setId] = useState(""),
    [name, setName] = useState("");

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
    date.getMinutes();

  //関数の定義
  const messageAreaScroll = () => {
    const messageArea = document.getElementById("messageArea");
    messageArea.scrollTop = messageArea.scrollHeight;
  };

  const url = "http://localhost:8080/api/usersTeams";
  let messageList = []; //Cloud Firestoreの内容を代入するための変数

  //初回API受信
  useEffect(() => {
    const fn = async () => {
      // チーム情報受信API
      await axios
        .get(url + "/" + auth.currentUser.uid)
        .then((res) => {
          setTeamList(res.data);
          isLoading(true);
        })
        .catch((error) => {
          alert(error);
        });
    };
    fn();
  }, []);

  //チャット内容表示
  const handleShow = (id, name) => {
    db.collection("chat")
      .doc("teamId" + id)
      .onSnapshot(
        {
          includeMetadataChanges: true,
        },
        function (doc) {
          setMessageData(doc.data().message);
        }
      );
    setId(id);
    setName(name);
    isShow(true);
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
    messageList = messageData.concat(newMessage);
    db.collection("chat")
      .doc("teamId" + id)
      .set({ message: messageList });
    setMessageData(messageList);

    //textareaの値をクリアする
    document.getElementById("messageValue").value = "";
    messageAreaScroll();
  };

  if (loading === false) {
    //読み込み中
    return (
      <div className={styles.flexCenter}>
        <div className="spinner-border text-primary">
          <Spinner />
        </div>
      </div>
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
            <div>
              {teamList.map((data) => (
                <ChatItem
                  avatar={data.avatar} //アイコン
                  alt={"チーム画像"}
                  title={data.teamName} //チーム名
                  subtitle={"What are you doing?"} //最新コメント
                  dateString={"2020/08/05 10:10"} //最新コメントの時刻
                  // unread={1} //未読数
                  onClick={() => handleShow(data.teamId, data.teamName)} //チャット内容表示
                />
              ))}
            </div>
          </div>
          {/* グループをクリックしたら以下チャット内容を表示 */}
          {show ? (
            <div className={styles.messageContainer}>
              <div className={styles.searchBar}>
                <div className={styles.roomName}>チャット相手の名前</div>
                <input className={styles.messageSearchWord} type="text" />
                <Button>
                  <SearchIcon className={styles.searchIcon} />
                </Button>
              </div>
              <div id="messageArea" className={styles.messageArea}>
                {messageData.map((data) => (
                  <Message
                    avatar={data.avatar}
                    uid={data.uid} //メッセージの位置
                    text={data.text} //メッセージのテキスト
                    dateString={data.dateString} //時間
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
          ) : null}
        </div>
      </div>
    );
  }
};

export default Chat;

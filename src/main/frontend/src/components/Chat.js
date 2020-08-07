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
  const urlSearch = "http://localhost:8080/api/search";
  let teamInfoList = []; //APIで取得してチーム情報をリスト保存
  let messageList = []; //Cloud fireStoreの内容を代入するための変数

  let i = "";

  //初回API受信
  useEffect(() => {
    const fn = async () => {
      // チームリスト情報受信API
      await axios
        .get(url + "/" + auth.currentUser.uid)
        .then((res) => {
          //各チーム情報取得API
          for (i = 0; i < res.data.length; i++) {
            console.log(i);
            SearchInfo(res.data[i].teamId);
          }
          isLoading(true);
        })
        .catch((error) => {
          alert("チームリスト情報取得エラー：" + error);
        });
    };
    fn();
  }, []);

  //各チーム情報取得API
  const SearchInfo = (id) => {
    axios
      .get(urlSearch, {
        params: {
          teamId: id,
          sportName: "",
          prefectures: "",
          activityFrequency: "",
          dayOfTheWeek: "",
          freeWord: "",
        },
      })
      .then((resSearch) => {
        teamInfoList = teamInfoList.concat(resSearch.data);
        if (i == teamInfoList.length) {
          setTeamList(teamInfoList);
        }
      })
      .catch((error) => {
        alert("各チーム情報取得エラー：" + error);
      });
  };

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
        },
        function (error) {
          alert(error);
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
    // 新しいメッセージをCloud Fire storeのメッセージ配列に追加する
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
                  avatar={data.picture} //アイコン
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
                  maxlength="200" //ほぼ意味なし
                  required //意味なし
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

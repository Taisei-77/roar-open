import React, { useState, useEffect } from "react";
import "react-chat-elements/dist/main.css";
import ChatGroupList from "./ChatGroupList";
import { MessageList, Input } from "react-chat-elements";
import { Button } from "react-bootstrap";
import "../style/Chat.css";

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

const Chat = () => {
  const [text, setText] = useState("");
  const [aa, setAa] = useState(false);

  //初期メッセージリスト
  const messages = [
    {
      position: "left",
      type: "text",
      text: "サンプルチャット",
      date: new Date(customDate),
    },
    {
      position: "right",
      type: "text",
      text: "サンプルチャット2",
      date: new Date("2020-03-12 14:00:00"),
    },
  ];
  let resultMessages = messages;
  // useEffect(() => {
  // }, [resultMessages]);

  //送信・追加
  const addMessage = () => {
    // alert(document.getElementsByClassName("a").value);

    let a = "a";
    const newMessage = [
      {
        position: "right",
        type: "text",
        text: a,
        date: new Date(customDate),
      },
    ];
    resultMessages = messages.concat(newMessage);
    console.log(resultMessages);
    setAa(!aa);
  };
  return (
    <div>
      <div className="chat">
        <div ClassName="list">
          <ChatGroupList />
        </div>
        <div ClassName="message">
          <MessageList
            toBottomHeight={"100%"}
            // lockable={true}
            dataSource={resultMessages}
          />
          <Input
            placeholder="入力"
            multiline={true}
            className="a"
            defaultValue="a"
            rightButtons={<Button onClick={() => addMessage()}>送信</Button>}
          />
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

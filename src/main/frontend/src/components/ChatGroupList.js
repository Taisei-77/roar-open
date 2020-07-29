import React from "react";
import "react-chat-elements/dist/main.css";
import { ChatList } from "react-chat-elements";

const ChatGroupList = () => {
  return (
    <div>
      <div>
        <ChatList
          dataSource={[
            {
              avatar:
                "https://firebasestorage.googleapis.com/v0/b/roar-b54b1.appspot.com/o/images%2FIpUsst5ZpOB2GUy5?alt=media&token=82158741-deea-4fd4-bfe2-09ee67c2c6a1",
              alt: "Reactjs",
              title: "ゴジータ",
              date: new Date(),
              unread: 1,
            },
            {
              avatar: "https://facebook.github.io/react/img/logo.svg",
              alt: "Reactjs",
              title: "Facebook",
              subtitle: "What are you doing?",
              date: new Date(),
              unread: 1,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ChatGroupList;

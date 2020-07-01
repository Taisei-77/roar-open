import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:8080/api/users";

const Setting = () => {
  const [userData, fetchUserInfo] = useState([]);

  const UserInfo = () => {
    var arr = [];
    axios
      .get(url)
      //get(エンドポイント, { params: {送りたいパラメーターの指定}　}
      .then((res) => {
        // 通信に成功後レスポンスが返ってきた時に実行したい処理
        //取得データ全てをリスト化表示
        for (var i = 0; i < res.data.length; i++) {
          arr.push(
            <li key={res.data[i].id}>
              {res.data[i].id}/{res.data[i].user}/{res.data[i].address}/
              {res.data[i].password}
            </li>
          );
        }
        fetchUserInfo(arr);
      })
      .catch((error) => {
        // 通信に失敗してレスポンスが返ってこなかった時に実行したい処理
      });
  };

  //1回目のレンダー後一度だけ呼ばれる
  useEffect(() => {
    UserInfo();
  }, []);

  return (
    <div>
      <h1>ここは設定画面が入る予定！</h1>
      <p>{userData}</p>
    </div>
  );
};

export default Setting;

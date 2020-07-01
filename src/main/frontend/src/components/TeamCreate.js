import React from "react";

class TeamCreate extends React.Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="チーム名"></input>
        <div>画像をアップロードして、データベースに追加する機能</div>
        <div>基本プロフィール</div>
        {/* ここはreact-selectを使う */}
        <p>チームコンセプト</p>
        <textarea placeholder="チームコンセプトを自由に記述"></textarea>
        <div>大会参加実績の記述場所</div>
        <button type="submit">作成</button>
      </div>
    );
  }
}

export default TeamCreate;

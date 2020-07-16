import React, { useState } from "react";
// material-UIの読み込み
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// cssの読み込み
import "../style/TeamCreate.css";

// コンポーネントの読み込み
import { CreatePhoto } from "../UIkit/CreatePhoto";
import { TeamProfile } from "./TeamProfile";
import { CompePartPerform } from "./CompePartPerform";

export const TeamCreate = () => {
  // ユーザーが入力したチームコンセプトの値を動的に取得する記述。
  const [teamConceptValue, setTeamConceptValue] = useState("");
  const teamConceptValueChenge = (e) => {
    setTeamConceptValue(e.target.value);
  };

  // 追加ボタンを押すと、大会参加実績を追加するための記述（上限は５個に設定している。）。
  const [compePartPerform, setCompePartPerform] = useState([]);
  const [keyNumber, setKeyNumber] = useState(-1);

  function handleClick() {
    if (compePartPerform.length <= 4) {
      setKeyNumber(keyNumber + 1);
      setCompePartPerform(compePartPerform.concat(keyNumber));
    }
  }
  const compePartPerforms = compePartPerform.map((number) => (
    <CompePartPerform key={number} />
  ));

  return (
    <div className="teamCreateBody">
      <div className="teamCreateContainer">
        <TextField id="teamName" label="チーム名" name="" value="" />
      </div>
      <CreatePhoto className="teamCreateContainer" height={450} width={700} />
      <div>基本プロフィール</div>
      <TeamProfile className="teamCreateContainer" />
      <div className="teamCreateContainer">
        <TextField
          id="teamConcept"
          label="チームコンセプト"
          multiline
          rows={4}
          // DBに値を送るための記述
          name=""
          value={teamConceptValue}
          onChange={teamConceptValueChenge}
        />
      </div>
      <div className="teamCreateContainer">
        <span>大会参加実績</span>
        <Button onClick={handleClick}>追加する</Button>
        <div>{compePartPerforms}</div>
      </div>
      <div className="teamCreateButton">
        <Button variant="contained" type="submit">
          作成
        </Button>
      </div>
    </div>
  );
};

export default TeamCreate;

import React, { useState } from "react";
// material-UIの読み込み
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// cssの読み込み
import "../style/TeamCreate.css";

// コンポーネントの読み込み
import { TeamCreateView } from "./TeamCreateView";
import { TeamProfile } from "./TeamProfile";
import { CompePartPerform } from "./CompePartPerform";

export const TeamCreate = () => {
  const [teamConceptValue, setTeamConceptValue] = useState("");
  const teamConceptValueChenge = (e) => {
    setTeamConceptValue(e.target.value);
  };

  return (
    <div className="teamCreateBody">
      <div className="teamCreateContainer">
        <TextField id="teamName" label="チーム名" name="" value="" />
      </div>
      <TeamCreateView className="teamCreateContainer" />
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
        <Button>追加する</Button>
        <CompePartPerform />
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

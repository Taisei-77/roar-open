import React from "react";
import TextField from "@material-ui/core/TextField";

// cssの読み込み
import "../style/TeamCreate.css";
import { Button } from "react-bootstrap";

// コンポーネントの読み込み
import { TeamCreateView } from "./TeamCreateView";
import { TeamProfile } from "./TeamProfile";

class TeamCreate extends React.Component {
  render() {
    return (
      <div className="teamCreateBody">
        <div className="teamCreateContainer">
          <TextField id="teamName" label="チーム名" />
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
            variant="outlined"
          />
        </div>
        <div className="teamCreateContainer">
          <p>大会参加実績</p>
          <div className="compePartPerform">
            <TextField className="partYear" label="参加年" variant="standard" />
            <span></span>
            <TextField
              className="compeName"
              label="大会名"
              variant="standard"
            />
          </div>
          <div className="compePartPerform">
            <TextField className="partYear" label="参加年" variant="standard" />
            <span></span>
            <TextField
              className="compeName"
              label="大会名"
              variant="standard"
            />
          </div>
        </div>
        <div className="teamCreateButton">
          <Button variant="outline-primary" type="submit">
            作成
          </Button>
        </div>
      </div>
    );
  }
}

export default TeamCreate;

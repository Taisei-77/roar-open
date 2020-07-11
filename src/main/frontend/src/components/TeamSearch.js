import React, { useState } from "react";
import Select from "react-select";

// material-uiの読み込み
import { AppBar, Toolbar, Button, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

// CSSの読み込み
import "../style/TeamSearch.css";

// 他ファイルからコンポーネントの読み込み
import {
  SportName,
  Prefectures,
  ActivityFrequency,
  DayOfTheWeek,
} from "../data/data";
import { TeamSearchCard } from "./TeamSearchCard";

export const TeamSearch = () => {
  const [freeWord, setFreeWord] = useState("");
  const freeWordChange = (e) => {
    setFreeWord(e.target.value);
  };
  return (
    <div>
      <AppBar color="default" position="sticky">
        <Toolbar>
          <Select
            className="select"
            isClearable
            options={SportName}
            placeholder="スポーツ名"
          />
          <Select
            className="select"
            isMulti
            isClearable
            options={Prefectures}
            placeholder="活動地域"
          />
          <Select
            className="select"
            isClearable
            options={ActivityFrequency}
            placeholder="活動頻度"
          />
          <Select
            className="select"
            isMulti
            isClearable
            options={DayOfTheWeek}
            placeholder="活動曜日"
          />
          <TextField
            className="freeWordBox"
            size="small"
            label="フリーワード"
            variant="standard"
            name=""
            value={freeWord}
            onChange={freeWordChange}
          />
          <Button color="inherit">
            <SearchIcon />
          </Button>
        </Toolbar>
      </AppBar>
      <div>
        <TeamSearchCard />
        <TeamSearchCard />
        <TeamSearchCard />
        <TeamSearchCard />
      </div>
    </div>
  );
};

export default TeamSearch;

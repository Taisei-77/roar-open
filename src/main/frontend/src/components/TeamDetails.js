import React from "react";
import { makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  paper: {
    width: 700,
    height: 700,
    backgroundColor: "white",
    padding: theme.spacing(10, 10, 10),
    overflow: "scroll",
    borderRadius: 20,
  },
  team_name: {
    borderBottom: "3px solid gray",
    fontSize: "30px",
  },
  team_profile: {
    fontSize: "20px",
    margin: "20px 0",
  },
  join_btn: {
    display: "block",
    textAlign: "center",
    margin: "20px auto",
  },
}));

const TeamDetails = (props) => {
  const classes = useStyle();

  return (
    <div className={classes.paper}>
      <p className={classes.team_name}>{props.team_name}</p>
      <img src={props.picture} alt="チーム画像" />
      <div className={classes.team_profile}>
        <p>スポーツ名：{props.sport_name}</p>
        <p>活動地域：{props.prefectures}</p>
        <p>活動頻度：{props.activity_frequency}</p>
        <p>活動曜日：{props.day_of_the_week}</p>
        <p>チームメンバー数</p>
      </div>
      <p>チームコンセプト</p>
      <p>{props.team_concept}</p>
      <Button className={classes.join_btn} variant="contained" color="primary">
        {props.team_name}に参加する
      </Button>
    </div>
  );
};

export default TeamDetails;

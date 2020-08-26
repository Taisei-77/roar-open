import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../style/TeamEditComplete.module.css";

const WithdrawComplete = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>チームを退会しました。</div>
      <Button>
        <Link to="/home"> ホームへ戻る</Link>
      </Button>
    </div>
  );
};

export default WithdrawComplete;

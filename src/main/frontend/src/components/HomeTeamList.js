import React, { useState } from "react";
import styles from "../style/HomeTeamList.module.css";

import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

import TeamListDetail from "./TeamListDetail";

const HomeTeamList = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img
          className={styles.teamListImg}
          src="https://source.unsplash.com/random"
        />
      </div>
      <div className={styles.mainContainer}>
        <p className={styles.teamName}>チーム名</p>
        <div className={styles.teamInfo}>
          <p className={styles.teamMenber}>メンバー数 : 1人</p>
          <Button className={styles.teamDetail} onClick={handleOpen}>
            チーム詳細
          </Button>
        </div>
      </div>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className={styles.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modalOpen}>
          <TeamListDetail
          // team_id={props.team_id}
          // team_name={props.team_name}
          // picture={props.picture}
          // sport_name={props.sport_name}
          // prefectures={props.prefectures}
          // activity_frequency={props.activity_frequency}
          // day_of_the_week={props.day_of_the_week}
          // team_concept={props.team_concept}
          />
        </Fade>
      </Modal>
    </div>
  );
};

export default HomeTeamList;

import React, { useState } from "react";

// import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

// css modules
import styles from "../style/TeamSearchCard.module.css";

import TeamDetails from "./TeamDetails";

export const TeamSearchCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.root}>
      <Grid container>
        <Grid item xs={4}>
          <div>
            <img
              className={styles.teamPicture}
              src={props.picture}
              height="225"
              alt="チーム画像は、まだありません"
            />
          </div>
        </Grid>
        <Grid item xs={8}>
          <div className={styles.cardContent}>
            <div className={styles.cardHead}>
              <h2 className={styles.teamNameContent}>{props.team_name}</h2>
              <Button
                className={styles.detailButton}
                size="small"
                color="primary"
                onClick={handleOpen}
              >
                詳細を確認する
              </Button>
            </div>
            <p className={styles.teamConcept}>{props.team_concept}</p>
          </div>
        </Grid>
      </Grid>
      {/* チーム詳細を表示するモーダル */}
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
          <TeamDetails
            id={props.id}
            team_name={props.team_name}
            picture={props.picture}
            sport_name={props.sport_name}
            prefectures={props.prefectures}
            activity_frequency={props.activity_frequency}
            day_of_the_week={props.day_of_the_week}
            team_concept={props.team_concept}
          />
        </Fade>
      </Modal>
    </div>
  );
};

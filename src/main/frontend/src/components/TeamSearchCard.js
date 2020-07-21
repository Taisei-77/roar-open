import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Modal from "@material-ui/core/Modal";
import Fade from "@material-ui/core/Fade";
import Backdrop from "@material-ui/core/Backdrop";

import TeamDetails from "./TeamDetails";

const useStyles = makeStyles({
  root: {
    maxWidth: 1000,
    margin: 20,
  },
  cardContent: {
    background: "#CBE6F3",
    height: 225,
  },
  teamConcept: {
    marginTop: 10,
    height: 120,
  },
  cardAction: {
    marginLeft: "auto",
  },
  Modal: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    // maxHeight: 500,
  },
});

export const TeamSearchCard = (props) => {
  const classes = useStyles(),
    [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="チーム画像"
              height="225"
              image={props.picture}
              title="チーム画像"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.team_name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.teamConcept}
            >
              {props.team_concept}
              {}
            </Typography>
            <CardActions>
              <Button
                className={classes.cardAction}
                size="small"
                color="primary"
                onClick={handleOpen}
              >
                詳細を確認する
              </Button>
            </CardActions>
          </CardContent>
        </Grid>
      </Grid>
      {/* チーム詳細を表示するモーダル */}
      <Modal
        open={modalOpen}
        onClose={handleClose}
        className={classes.Modal}
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
    </Card>
  );
};

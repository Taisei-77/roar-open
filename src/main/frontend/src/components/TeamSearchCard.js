import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
});

export const TeamSearchCard = ({
  id,
  team_name,
  picture,
  sport_name,
  prefectures,
  activity_frequency,
  day_of_the_week,
  team_concept,
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={4}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="チーム画像"
              height="225"
              image={picture}
              title="チーム画像"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {team_name}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.teamConcept}
            >
              {team_concept}
            </Typography>
            <CardActions>
              <Button
                className={classes.cardAction}
                size="small"
                color="primary"
              >
                詳細を確認する
              </Button>
            </CardActions>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

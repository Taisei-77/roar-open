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

export const TeamSearchCard = (props) => {
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
              image="https://source.unsplash.com/random"
              title="チーム画像"
            />
          </CardActionArea>
        </Grid>
        <Grid item xs={8}>
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              大阪ハリケーンず
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.teamConcept}
            >
              ゆる〜く活動中！
              週に１回、体育館を借りて、バスケットボールをやっています。
              時々、地域の大会に参加したり、他チームとの練習試合などもしています。
              和やかな雰囲気でバスケットボールを楽しみたい方は是非チームに参加してください！
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

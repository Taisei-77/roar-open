import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export const TeamSearchCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="チーム画像"
          height="225"
          image="https://source.unsplash.com/random"
          title="チーム画像"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            チーム名
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            チームコンセプト
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          詳細を確認する
        </Button>
      </CardActions>
    </Card>
  );
};

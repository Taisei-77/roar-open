import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewsCard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //ニュースを引っ張ってくるAPIキー
      const url = "https://gnews.io/api/v3/topics/sports?&token=9447084710d08d9bd7bb1663cfabdb25";
      //APIの中身をJSONに変換し、articlesをステートに入れている。
      const result = await fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
      });
    };
    fetchData();
  }, []);

  return (
    //カードの見た目
    <ul>
      {news.map((item) => (
        <li key={item.id} className="m-3">
          <Card>
            <Grid container>
              <Grid item xs={2}>
                {/* ニュースのサムネイル */}
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="ニュース画像"
                    height="150"
                    image={item.image}
                    title="ニュース画像"
                  />
                </CardActionArea>
              </Grid>
              <Grid item xs={10}>
                <CardContent>
                  {/* ニュースタイトル */}
                  <Typography gutterBottom variant="h5">
                    {item.title}
                  </Typography>
                  <CardActions>
                    <Button size="small" color="primary" href={item.url}>
                      詳細を確認する
                    </Button>
                  </CardActions>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default NewsCard;

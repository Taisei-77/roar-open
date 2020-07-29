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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //ニュースを引っ張ってくるwebAPI
      const url =
        "http://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=c68b6097d82e46b7bb27b7d19e3110cf";
      //成功させたい処理
      try {
        const result = await fetch(url);
        const json = await result.json();
        setArticles(json.articles);
      } catch (e) {
        //tryに例外が発生するとすぐこちらが呼び出される
        console.log(e);
      }
    };
    fetchData();
  }, []);

  console.log(articles);

  //取得したニュースの中からauthorが一致するもの以外をresultに返す
  // const result = articles.filter(function(i){
  //     return i.author !== "F1-Gate.com";　ゲキサカのauthorが分かり次第書き換える
  // });
  // console.log(result);
  return (
    //カードの見た目
    <ul>
      {/* articlesをresultに後で変える */}
      {articles.map((item) => (
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
                    image={item.urlToImage}
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

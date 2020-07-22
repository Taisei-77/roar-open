import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const NewsCard = () =>  {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                //ニュースを引っ張ってくるwebAPI
                const url = "http://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=c68b6097d82e46b7bb27b7d19e3110cf";
                //成功させたい処理
                try {
                    const result = await fetch(url);
                    const json = await result.json();
                    setArticles(
                        json.articles
                    );
                } 
                //tryに例外が発生するとすぐこちらが呼び出される//tryに例外が発生するとすぐこちらが呼び出される
                catch (e) {
                    console.log(e);
                }
              
            };
            
            fetchData();

            }, []
    );

    return (
        //カードの見た目
        <ul>
            {articles.map( item => (
                <li key={item.id} className="m-3 d-block col-md-12">
                <Card>
                    <Grid container>
                        <Grid item xs={4}>
                            {/* ニュースのサムネイル */}
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="ニュース画像"
                                    height="255"
                                    image={item.urlToImage}
                                    title="ニュース画像"
                                />
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={8}>
                            <CardContent>
                                {/* ニュースタイトル */}
                                <Typography gutterBottom variant="h5" component="h2">
                                    {item.title}
                                </Typography>
                                {/* ニュースディスクリプション */}
                                <Typography
                                    variant="caption"
                                    color="textSecondary"
                                    component="p"
                                >
                                    {item.description}
                                </Typography>
                                <CardActions>
                                    <Button
                                        size="small"
                                        color="primary"
                                        href={item.url}
                                    >
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
}
    
export default NewsCard;
import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class NewsCard extends React.Component {
  state = {
    articles: [], //オブジェクトの入れ物
    refreshing: false, // これは何のためにあるのかは不明
  };

    state = {
        articles: []//オブジェクトの入れ物
    }
  

    getNews = async () => {//APIからdataを取り出す処理
        this.setState({ refreshing: true });
        const url = "http://newsapi.org/v2/top-headlines?country=jp&category=sports&apiKey=c68b6097d82e46b7bb27b7d19e3110cf";
        try {//成功させたい処理
            const result = await fetch(url);
            const json = await result.json();
            this.setState({
                articles: json.articles
            });
        } 
        catch (e) {//tryに例外が発生するとすぐこちらが呼び出される
            console.log(e);
        }
    }

    componentDidMount = () => {//マウント時に行われる処理。
        this.getNews();
    }

    render() {
        return (//カードの見た目
            <ul>
                {this.state.articles.map(item => (
                    <li key={item.id} className="m-3 d-block col-md-12">
                    <Card>
                        <Grid container>
                            <Grid item xs={4}>
                                {/* ニュースのサムネイル */}
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="ニュース画像"
                                        height="100%"
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
}

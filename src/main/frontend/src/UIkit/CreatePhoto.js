import React, { useState } from "react";

// material-UIの読み込み
import Button from "@material-ui/core/Button";

// CSSの読み込み
import "../style/TeamCreateView.css";
import { makeStyles } from "@material-ui/core";

// スタイリングをする。
const useStyle = makeStyles({
  trimming: {
    objectFit: "cover",
  },
});

// createObjectURLのメソッドを定義。
let createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

// ファイルサイズを縮小させるための記述（ここは変数を定義する）
let files = ""; //取得したファイルを格納するための変数
let blob = ""; //画像データが格納される変数

export const CreatePhoto = (props) => {
  const [image_src, set_image_src] = useState("");
  const classes = useStyle();

  // ユーザーが画像を選択した時に実行される処理
  const handleChangeFile = (e) => {
    files = e.target.files; //取得したファイルデータをfilesに格納する
    // 画像をpreviewするための処理。
    let image_url = files.length === 0 ? "" : createObjectURL(files[0]);
    set_image_src(image_url);
  };

  const handleChangeImg = (e) => {
    const image = document.getElementById("image"); //img要素の取得
    const imageNaturalWidth = image.naturalWidth; //元の画像の幅
    const imageNaturalHeigth = image.naturalHeight; //元の画像の高さ
    const canvas = document.getElementById("canvas"); //canvas要素の取得
    let canvasWidth, canvasHeigth; //画像をcanvasに描画する時の幅と高さ
    const ctx = canvas.getContext("2d"); //canvasを描画可能にするためのメソッド。（描画などの時はこの変数を使う）

    // canvasに既に描画されている画像があればそれを消す
    ctx.clearRect(0, 0, props.width, props.height);

    // 写真の縦横の比率を計算してくれる関数
    const canvasSizeCalc = () => {
      if (imageNaturalWidth > imageNaturalHeigth) {
        // 写真が横長の時
        canvasWidth = props.width;
        canvasHeigth = (props.width * imageNaturalHeigth) / imageNaturalWidth;
      } else {
        // 写真が縦長の時
        canvasWidth = (imageNaturalWidth * props.height) / imageNaturalHeigth;
        canvasHeigth = props.height;
      }
    };
    canvasSizeCalc();

    // canvasに縮小画像を描画する
    ctx.drawImage(
      image, //これを描画します。<img>,<canvas>,<video>が使える
      0, //sx...使用範囲の開始座標x
      0, //sy...使用範囲の開始座標y
      image.naturalWidth, //sw...開始座標xからの幅
      image.naturalHeight, //sh...開始座標yからの高さ
      0, //dx...描画イメージを配置するx座標
      0, //dy...描画イメージを配置するy座標
      canvasWidth, //dw...描画イメージの幅
      canvasHeigth //dh...描画イメージの高さ
    );

    // canvasから画像をbase64として取得する
    let base64 = canvas.toDataURL("image/jpeg");

    // base64から画像データを作成する
    let barr, bin, i, len;
    bin = atob(base64.split("base64,")[1]);
    len = bin.length;
    barr = new Uint8Array(len);
    i = 0;
    for (let i = 0; i < len; i++) {
      barr[i] = bin.charCodeAt(i);
    }
    blob = new Blob([barr], { type: "image/jpeg" });
    console.log(blob);
    console.log(image_src);
  };

  return (
    <div>
      <div className="imgPreview">
        <img
          id="image"
          className={classes.trimming}
          src={image_src}
          alt=""
          name=""
          value={image_src}
          height={props.height}
          width={props.width}
          // onChange={handleChangeImg}
        />
        <canvas id="canvas" height={props.height} width={props.width}></canvas>
      </div>
      <div className="imgUploadBtn">
        <input
          accept="image/*"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleChangeFile}
        />
        <label htmlFor="contained-button-file">
          <Button variant="contained" color="primary" component="span">
            チームの写真を選択
          </Button>
        </label>
        <Button onClick={handleChangeImg}> 写真データ作成</Button>
      </div>
    </div>
  );
};

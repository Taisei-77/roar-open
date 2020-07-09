import React from "react";

// material-UIの読み込み
import Button from "@material-ui/core/Button";

// CSSの読み込み
import "../style/TeamCreateView.css";

var createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export class TeamCreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { image_src: "" };
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }
  handleChangeFile(e) {
    var files = e.target.files;
    var image_url = files.length === 0 ? "" : createObjectURL(files[0]);
    this.setState({ image_src: image_url });
  }

  render() {
    return (
      <div>
        <div className="imgPreview">
          <img
            src={this.state.image_src}
            alt=""
            name=""
            value={this.state.image_src}
          />
        </div>
        <div className="imgUploadBtn">
          <input
            accept="image/*"
            id="contained-button-file"
            multiple
            type="file"
            onChange={this.handleChangeFile}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              チームの写真を選択
            </Button>
          </label>
        </div>
      </div>
    );
  }
}

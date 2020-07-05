import React from "react";

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
        <input type="file" ref="file" onChange={this.handleChangeFile} />
        <div className="imgPreview">
          <img src={this.state.image_src} alt="" />
        </div>
      </div>
    );
  }
}

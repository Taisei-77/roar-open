import React from "react";

var createObjectURL =
  (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export class View extends React.Component {
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
        <div>
          <img src={this.state.image_src} />
        </div>
      </div>
    );
  }
}

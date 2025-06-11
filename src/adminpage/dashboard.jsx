import React, { Component } from "react";
import "../style/dashboard.css";
import Reviews from "./reviews.jsx";
import Upload from "./uploader.jsx";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviews: false,
      showUpload: false,
    };
  }

  handleReviewClick = () => {
    this.setState({ showReviews: true, showUpload: false });
  };

  handleUploadClick = () => {
    this.setState({ showUpload: true, showReviews: false });
  };

  render() {
    return (
      <>
        <div className="container">
          <div className="sidebar">
            <button onClick={this.handleReviewClick}>Reviews</button>
            <button onClick={this.handleUploadClick}>Upload Magazines</button>
          </div>
          <div className="mainarea">
            <div className="header">
              <h1>Welcome Admin</h1>
            </div>
            {this.state.showReviews && <Reviews />}
            {this.state.showUpload && <Upload />}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;

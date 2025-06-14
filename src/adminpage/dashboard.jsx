import React, { Component } from "react";
import "../style/dashboard.css";
import Reviews from "./reviews.jsx";
import Uploader from "./uploader.jsx";

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
        <div className="dashboard-container">
          <div className="db-navbar">
            <button onClick={this.handleReviewClick}>Reviews</button>
            <button onClick={this.handleUploadClick}>Upload Magazines</button>
          </div>
          <div className="db-mainarea">
            {this.state.showReviews && <Reviews />}
            {this.state.showUpload && <Uploader />}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;

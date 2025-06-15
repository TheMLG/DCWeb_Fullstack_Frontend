import React, { Component } from "react";
import "../style/dashboard.css";
import Reviews from "./reviews.jsx";
import Uploader from "./uploader.jsx";
import GalleryDB from "./gallerydb.jsx";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showReviews: false,
      showUpload: false,
      showGallery: false
    };
  }

  handleReviewClick = () => {
    this.setState({ showReviews: true, showUpload: false });
  };

  handleUploadClick = () => {
    this.setState({ showUpload: true, showReviews: false, showGallery: false});
  };
  handleGalleryClick = () => {
    this.setState({ showGallery: true, showReviews: false, showUpload: false});
  };

  render() {
    return (
      <>
        <div className="dashboard-container">
          <div className="db-navbar">
            <button onClick={this.handleReviewClick}>Reviews</button>
            <button onClick={this.handleUploadClick}>Upload Magazines</button>
            <button onClick={this.handleGalleryClick}>Gallery</button>
          </div>
          <div className="db-mainarea">
            {this.state.showReviews && <Reviews />}
            {this.state.showUpload && <Uploader />}
            {this.state.showGallery && <GalleryDB />}
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;

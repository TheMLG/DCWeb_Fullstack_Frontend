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
      showGallery: false,
      sidebarVisible: false
    };
  }

  handleReviewClick = () => {
    this.setState({ showReviews: true, showUpload: false, showGallery: false, sidebarVisible: false });
  };

  handleUploadClick = () => {
    this.setState({ showUpload: true, showReviews: false, showGallery: false, sidebarVisible: false });
  };
  handleGalleryClick = () => {
    this.setState({ showGallery: true, showReviews: false, showUpload: false, sidebarVisible: false });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({ sidebarVisible: !prevState.sidebarVisible }));
  };

  render() {
    return (
      <>
        <div className="dashboard-container">
          <button className="sidebar-toggle" onClick={this.toggleSidebar} aria-label="Toggle sidebar">&#9776;</button>
          <div className={`db-navbar ${this.state.sidebarVisible ? "visible" : ""}`}>
            <button className={this.state.showReviews ? "active" : ""} onClick={this.handleReviewClick}>Reviews</button>
            <button className={this.state.showUpload ? "active" : ""} onClick={this.handleUploadClick}>Upload Magazines</button>
            <button className={this.state.showGallery ? "active" : ""} onClick={this.handleGalleryClick}>Gallery</button>
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

import React, { Component } from "react";
import "../../style/aboutus.css";

class AuEng extends Component {
  render() {
    return (
      <div className="au-main">
        
        <div className="ltinfo">
          <div className="ltname">
            <div className="ltimg"></div>
            <div>
              <p className="lt-p1">Lalitpuri Rampuri Goswami</p>
              <p className="lt-p2">Curator</p>
            </div>
          </div>

          <p>
            Dashnam Circular is curated by L. R. Goswami, a dedicated member of
            the Dashnam community. With a deep passion for literature, culture,
            and heritage, Shri L. R. Goswami works tirelessly to preserve and
            promote the values and traditions of our community. Through
            thoughtful selection of articles, stories, and messages, he ensures
            that every issue of the magazine reflects the spirit and voice of
            the community, inspiring readers across generations.
          </p>
        </div>
        <div className="aboutus">
          <div className="auheader">
            <h2>Dashnaam Circular E-Magazine</h2>
          </div>
          <div className="audiscription">
            <p>
              A unique digital platform that connects the Dashnaam Goswami
              community.
            </p>
            <p>
              Welcome to Dashnaam Circular, a vibrant space designed to inform,
              inspire, and instill pride in every member of our community.
              Together, we celebrate our heritage, achievements, and
              aspirations.
            </p>
          </div>
          <div className="ausubheader">
            <p>Our Mission</p>
          </div>
          <div>
            <p>
              <b> &#8226; Keep you informed —</b> Bringing you the latest news
              and articles about our community in simple, accessible language.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Highlight inspiring individuals —</b>Exclusive
              interviews with outstanding contributors and role models from our
              community.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Share stories of success —</b>Discover powerful tales
              of perseverance, struggle, and triumph that make us proud.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226;Preserve our cultural heritage —</b> Dedicated to
              passing on our history, traditions, and values to future
              generations.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Empower the youth —</b>Guiding young minds to dream
              big, achieve their goals, and build a brighter future.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Encourage the exchange of ideas —</b> Your thoughts,
              experiences, and creativity have a home here — contribute and
              connect.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226;Promote community development —</b>A strong platform
              that unites us all and helps our community move forward, together.
            </p>
          </div>
        </div>
        <div className="ourm">
          <div className="mheader">
            <h2>Our Vision</h2>
          </div>
          <div className="mdiscription">
            <p>At Dashnaam Circular E-Magazine, our mission is clear —</p>
            <p>
              to unite every member of the Dashnaam Goswami community on a
              single platform and strengthen our collective bond.
            </p>
          </div>
          <div className="msubheader">
            <p>What Drives Us?</p>
          </div>
          <div>
            <p>
              <b>
                &#8226; Delivering knowledge, information, and inspiration —
              </b>
              Bringing accurate and meaningful updates to every corner of our
              community.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Preserving our rich cultural heritage — </b>Honoring
              our history and traditions, and passing this pride on to future
              generations.
            </p>
          </div>
          <div>
            <p>
              <b>&#8226; Spreading social awareness</b>Through news, articles,
              interviews, and inspirational stories that enlighten and engage.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Guiding and encouraging our youth —</b>
              Boosting confidence and helping young minds plan and build a
              better future.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Strengthening social unity — </b>Promoting the
              exchange of ideas, experiences, and cultural values within our
              community.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226;Driving collective progress — </b>Moving forward
              together to build a strong, empowered, and well-organized society.
            </p>
          </div>
        </div>

        <div className="oura">
          <div className="aheader">
            <h2> Our Achievements</h2>
          </div>
          <div className="adiscription">
            <p>A strong digital platform</p>
            <p>
              Through Dashnaam Circular E-Magazine, we have built a dynamic and
              robust digital platform for the Dashnaam Goswami community.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Reaching thousands of members—</b>We consistently
              deliver news, inspiring articles, and valuable information to
              thousands of community members.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; A source of inspiration for youth — </b>By sharing
              interviews with successful individuals from our community, we’ve
              helped instill confidence and positivity among our youth.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226; Preserving cultural heritage —</b>Our special editions
              focused on tradition and culture have helped connect the new
              generation with their roots.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226;Strengthening unity and brotherhood — </b>By covering
              social events and initiatives, we have contributed to greater
              unity and harmony within the community.
            </p>
          </div>
          <div>
            <p>
              <b> &#8226;Building bridges of communication — </b>Our greatest
              success has been establishing continuous contact and meaningful
              dialogue among community members.
            </p>
          </div>
        </div>

        <div className="photo-gallery">
          <h2>Awards</h2>
          <div className="image-container">
            <img
              className="image"
              src="/assets/gallery/achievemement2.jpg"
              alt="Award 2"
            />
            <img
              className="image"
              src="/assets/gallery/achievemement3.jpg"
              alt="Award 3"
            />
            <img
              className="image"
              src="/assets/gallery/achievemement2.jpg"
              alt="Award 2"
            />
            <img
              className="image"
              src="/assets/gallery/achievemement3.jpg"
              alt="Award 3"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default AuEng;

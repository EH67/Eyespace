import React from "react";
import PropTypes from "prop-types";
import "./WhoWeAre.css";

export default class WhoWeAre extends React.Component {
  static propTypes = {
    name: PropTypes.string,
  };

  render() {
    return (
      <div className="WhoWeAre">
        <ul>
          <img
            className="background-image"
            src="https://i.ibb.co/BPMX4SC/OR-scaled.jpg"
          />
        </ul>
        <div className="text-overlay">
          <h2 className="title">Who We Are</h2>
          <p className="subtext">
            eyeSpace is a cross-platform Ophthalmology utility, social media,
            networking service that provides users with a wide array of eye care
            tools to optimize and track their surgical outcomes.
            <br />
            <br />
            eyeSpace was conceptualized by Matt Hirabayashi MD and Gurpal Virdi
            MD and technological development is done through an engineering team
            at EyeLabs. The founders have extensive experience with ocular
            surgery, technological development, scaling products, overseeing
            projects, and managing teams.
            <br />
            <br />
            eyeSpace is a private entity with no financial relationship to any
            of the manufacturers whose data is archived. Neither of the founders
            have conflicts of interest.
          </p>
        </div>
      </div>
    );
  }
}

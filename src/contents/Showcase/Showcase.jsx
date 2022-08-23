import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import "./Showcase.scss";
import images from "../../constants/images";

function Showcase() {
  return (
    <div className="app__showcase">
      <div className="app__showcase-component">
        <div className="app__showcase-right">
          <h2>Manage your business wherever you are.</h2>
          <p>
            Design to deliver the best experience and accessiblity possible,
            RexRetail is also available for download on your mobile phone. You
            can download it on play store.
          </p>

          <span>
            Google Play
            <FaGooglePlay />
          </span>
        </div>

        <div className="app__showcase-left"></div>
      </div>
    </div>
  );
}

export default Showcase;

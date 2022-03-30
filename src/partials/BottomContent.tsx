import React from "react";
import topImg from "../assets/CVtop.svg";
import btmImg from "../assets/CVbtm.svg";

function BottomContent() {
  return (
    <div className="bottomContainer">
      <div className="bottomContent">
        <img src={topImg} alt="curriculum vitae" />
        <div className="textContainer">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Doloribus rem, dignissimos earum excepturi amet eligendi. Ipsa, esse
            reprehenderit nulla nobis, ullam iure alias soluta dolorem
            exercitationem est laborum facilis quod. <br />
            <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            <br />
            Doloribus rem, dignissimos earum excepturi amet eligendi. Ipsa, esse
            reprehenderit nulla nobis, ullam iure alias soluta dolorem
            exercitationem est laborum facilis quod.
          </p>
        </div>
        <img src={btmImg} alt="curriculum vitaeo" />
      </div>
    </div>
  );
}

export default BottomContent;

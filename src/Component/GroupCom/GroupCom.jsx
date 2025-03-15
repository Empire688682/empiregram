import React from "react";
import style from "./GroupCom.module.css";
import YourGroups from "../YourGroups/YourGroup";
import DiscoverGroups from "../DiscoverGroups/DiscoverGroups";

const GroupCom = ({ showGroups }) => {
  return (
    <div className={style.group_com}>
      {showGroups === "group" && <YourGroups />}
      {showGroups === "discover" && <DiscoverGroups />}
      {showGroups === "allYourGroup" && <YourGroups showGroups={showGroups} />}
    </div>
  );
};

export default GroupCom;



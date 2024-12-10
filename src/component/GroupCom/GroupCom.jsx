import React from 'react';
import style from './GroupCom.module.css';
import YourGroups from '../YourGroups/YourGroup';
import DiscoverGroups from '../DiscoverGroups/DiscoverGroups';

const GroupCom = ({showGroups}) => {
  return (
    <div className={style.group_com}>
      {
        showGroups === "groups" && (
        <YourGroups/>
        )
      }
      {
        showGroups === "discover" && (
          <DiscoverGroups/>
        )
      }
    </div>
  )
}

export default GroupCom

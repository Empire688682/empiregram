import React from 'react';
import style from './GroupCom.module.css';
import YourGroups from '../YourGroups/YourGroup';

const GroupCom = ({showGroups}) => {
  return (
    <div className={style.group_com}>
      {
        showGroups && (
        <YourGroups/>
        )
      }
    </div>
  )
}

export default GroupCom

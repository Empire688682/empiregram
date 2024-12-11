import React from 'react';
import style from './CreateGroupPrev.module.css';
import Image from 'next/image';

const CreateGroupPrev = () => {
  return (
    <div className={style.create_group_prev}>
      <div className={style.group_prev_con}>
        <h2>Group preview</h2>
        <div className={style.group_prev_img_con}>
          <Image className={style.group_prev_img} src="/group_creation_placeholder.webp" alt='IMG' fill sizes='100%' />
        </div>
        <div className={style.group_prev_details}>
          <h3>Group name</h3>
          <p>Group description</p>
          <span>1 members</span>
          <span>Group privacy</span>
        </div>
      </div>
    </div>
  )
}

export default CreateGroupPrev

import React from 'react';
import style from './create.module.css'
import CreateGroupLeftbar from '@/component/CreateGroupLeftbar/CreateGroupLeftbar';

const Page = () => {
  return (
    <div className={style.create}>
      <CreateGroupLeftbar/>
    </div>
  )
}

export default Page

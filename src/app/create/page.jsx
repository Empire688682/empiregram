import React from 'react';
import style from './create.module.css'
import CreateGroupLeftbar from '@/component/CreateGroupLeftbar/CreateGroupLeftbar';
import MenuBar from '@/component/MenuBar/MenuBar';

const Page = () => {
  return (
    <div className={style.create}>
      <MenuBar/>
      <div className={style.create_leftbar}>
        <CreateGroupLeftbar />
      </div>
      <div className={style.create_Container}>
        
      </div>
    </div>
  )
}

export default Page

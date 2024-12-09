import React from 'react';
import style from './group.module.css';
import GroupLeftBar from '@/component/GroupLeftBar/GroupLeftBar';
import GroupCom from '@/component/GroupCom/GroupCom';
import MenuBar from '@/component/MenuBar/MenuBar';


const page = () => {
    return (
        <div className={style.group}>
            <MenuBar/>
            <div className={style.group_Con}>
                <div className={style.group_left_bar}>
                    <GroupLeftBar />
                </div>
                <div className={style.group_Com}>
                    <GroupCom />
                </div>
            </div>
        </div>
    )
}

export default page

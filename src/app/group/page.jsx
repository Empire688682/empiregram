'use client';
import React, { useState } from 'react';
import style from './group.module.css';
import GroupLeftBar from '@/component/GroupLeftBar/GroupLeftBar';
import GroupCom from '@/component/GroupCom/GroupCom';
import MenuBar from '@/component/MenuBar/MenuBar';


const Page = () => {
    const [showGroups, setShowGroups] = useState(false);
    return (
        <div className={style.group}>
            <MenuBar/>
            <div className={style.group_Con}>
                <div className={style.group_left_bar}>
                    <GroupLeftBar setShowGroups={setShowGroups} />
                </div>
                <div className={style.group_Com}>
                    <GroupCom showGroups={showGroups} />
                </div>
            </div>
        </div>
    )
}

export default Page

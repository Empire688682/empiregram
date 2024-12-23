"use client";
import React, { useEffect, useState } from 'react';
import style from './GroupPost.module.css';
import GroupPostCreator from '../PostCreator/GroupPostCreator';
import SinglePost from '../SinglePost/SinglePost';

const GroupPost = () => {
    return (
        <div className={style.groupPost}>
            <GroupPostCreator/>
            <SinglePost/>
        </div>
    )
}

export default GroupPost

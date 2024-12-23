"use client";
import React, { useEffect, useState } from 'react';
import style from './GroupPost.module.css';
import GroupPostCreator from '../PostCreator/GroupPostCreator';
import GroupSinglePost from '../SinglePost/GroupSinglePost';
import Image from 'next/image';


const GroupPost = () => {
    const [createPost, setCreatePost] = useState(false);
    return (
        <div className={style.groupPost}>
            <div className={style.createPost}>
                {
                    !createPost && <div className={style.home_user_post}>
                        <div className={style.img_Con}>
                            <Image src='/avatar_icon.png' alt='User' fill sizes='100%' />
                        </div>
                        <p onClick={() => setCreatePost(true)}>What it is in your mind?</p>
                    </div>
                }
            </div>
            {
                createPost && <div className={style.postCreator}>
                    <GroupPostCreator setCreatePost={setCreatePost} />
                </div>
            }
            <div className={style.singlePost}>
                <GroupSinglePost createPost={createPost} />
            </div>
        </div>
    )
}

export default GroupPost

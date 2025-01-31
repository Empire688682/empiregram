import React from 'react'
import style from "./UserProfilePost.module.css"
import Image from "next/image";
import PostCreator from '../PostCreator/PostCreator';

const UserProfilePost = () => {
    const [createPost, setCreatePost] = useState(false);
  return (
    <div className={style.userProfilePost}>
      {!createPost && (
            <div className={style.home_user_post}>
              <div className={style.img_Con}>
                <Image src="/avatar_icon.png" alt="User" fill sizes="100%" />
              </div>
              <p onClick={() => setCreatePost(true)}>
                What it is in your mind?
              </p>
            </div>
          )}
          {createPost && <PostCreator setCreatePost={setCreatePost} />}
    </div>
  )
}

export default UserProfilePost

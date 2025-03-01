import React from "react";
import style from "./StatusBar.module.css";
import Image from "next/image";
import { useGlobalContext } from "../Context";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const StatusBar = ({ handleGetPostId }) => {
  const { posts, loading } = useGlobalContext();
  console.log("posts", posts);
  return (
    <div className={style.status_bar}>
      <div className={style.status_bar_Con}>

       {
         loading && (
          <div className={style.loading}>
            <LoadingSpinner/>
          </div>
           )
       }

        <div className={style.status_Con}>
          {
            posts.map((post, i) => (
              //{
              //User Status bar
             //   <div className={style.status} key={i}>
             //   <Image
             //     className={style.user_img}
             //     src="/avatar_icon.png"
              //    fill
              //    alt="IMG"
              //    sizes="100%"
              //  />
              //  <div className={style.user_plus}>
              //    <p>+</p>
                //  <span>Create story</span>
               // </div>
             // </div>
             // }
              <div className={style.status} key={i}>
              <Image
                className={style.user_img}
                src={post.picture.large}
                fill
                alt="IMG"
                sizes="100%"
              />
              <div className={style.friends_small_img_container}>
                <Image
                className={style.friends_small_img}
                src={post.picture.medium}
                width={45}
                alt="IMG"
                sizes="100%"
                height={45}
                />
              </div>
              <p className={style.friends_name}>{post.name.first} {post.name.last.charAt(0)}...</p>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

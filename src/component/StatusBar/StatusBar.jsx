import React from "react";
import style from "./StatusBar.module.css";
import Image from "next/image";
import { useGlobalContext } from "../Context";

const StatusBar = ({ handleGetPostId }) => {
  const { posts, loading } = useGlobalContext();
  console.log("posts", posts);
  return (
    <div className={style.status_bar}>
      <div className={style.status_bar_Con}>

       {
         loading && (
          <div className={style.loading}>
            <h2>Loading...</h2>
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
                src="/avatar_icon.png"
                fill
                alt="IMG"
                sizes="100%"
              />
              <div className={style.friends_small_img_container}>
                <Image
                className={style.friends_small_img}
                src="/avatar_icon.png"
                width={45}
                alt="IMG"
                sizes="100%"
                height={45}
                />
              </div>
            </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default StatusBar;

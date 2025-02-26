import React from "react";
import style from "./StatusBar.module.css";
import Image from "next/image";
import { useGlobalContext } from "../Context";

const StatusBar = ({ handleGetPostId }) => {
  const { posts, loading } = useGlobalContext();
  return (
    <div className={style.status_bar}>
      <div className={style.status_bar_Con}>
      <div className={style.user_Con}>
      <div className={style.user}>
          <Image
            className={style.user_img}
            src="/avatar_icon.png"
            fill
            alt="IMG"
            sizes="100%"
          />
          <div className={style.user_plus}>
            <p>+</p>
            <span>Create story</span>
          </div>
        </div>
      </div>

        {//loading && (
          //<div className={style.loading}>
          //  <h2>Loading...</h2>
          //</div>
          // )
        }

        <div className={style.post_slider_Con}>
          {
            Array.from({ length: 100 }).map((_, i) => (
              <div className={style.freiend} key={i}>
                <Image
                  className={style.user_img}
                  src="/avatar_icon.png"
                  fill
                  alt="IMG"
                  sizes="100%"
                />
                <div className={style.user_plus}>
                  <p>+</p>
                  <span>Create story</span>
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

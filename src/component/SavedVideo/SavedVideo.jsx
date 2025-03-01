"use client";
import React, { useState } from "react";
import style from "./SavedVideo.module.css";
import Image from "next/image";
import { AiOutlineLike } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";
import { allVideoPost } from "../data";
import { BsThreeDots } from "react-icons/bs";

const SavedVideo = () => {
  // Function to shorten text
  const shortenText = (text, maxWords) => {
    const words = text.split(" ");
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className={style.saved_video_Con}>
      <h2>Saved video</h2>
      {allVideoPost.map((video, id) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [readMore, setReadMore] = useState(false); // Local state for each video

        return (
          <div className={style.saved_video} key={id}>
            <div className={style.left_side}>
              <video src={video.video} controls></video>
            </div>
            <div className={style.right_side}>
              <div className={style.right_author_info_header}>
              <div className={style.right_author_info}>
                <div className={style.author_img_Con}>
                  <Image
                    style={{ borderRadius: "50%" }}
                    src={video.user_Img}
                    width={40}
                    height={40}
                    alt="Avatar"
                    sizes="100%"
                  />
                </div>
                <div className={style.author_name_date_Con}>
                  <p>{video.user_Name}</p>
                  <p>{video.date}</p>
                </div>
              </div>
              <div>
                <BsThreeDots className={style.dot_icon}/>
              </div>
              </div>

              {/* Read More / Read Less Logic */}
              <p>
                {readMore ? video.text : shortenText(video.text, 30)}
                {video.text.split(" ").length > 30 && (
                  <span
                    style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                    onClick={() => setReadMore(!readMore)}
                  >
                    {readMore ? " Read Less" : " Read More"}
                  </span>
                )}
              </p>

              <div className={style.saved_video_reactions}>
                <MdFavorite className={style.icons} />
                <AiOutlineLike className={style.icons} />
                <p>
                  You and 2k others . {video.comment_No} comments .{" "}
                  {video.comment_No} views
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedVideo;

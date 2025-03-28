import React, { useState } from "react";
import style from "./Video.module.css";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { MdOutlinePublic } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import Image from "next/image";
import { allVideoPost } from "../data";

const Video = () => {
  const [readmore, setReadmore] = useState(true);
  const shortenText = (text, maxText) => {
    const words = text.split(" ");
    if (words.length > maxText) {
      return words.splice(0, maxText).join(" ") + "..."
    }
    else return text
  };
  return (
    <div className={style.video}>
      {allVideoPost.map((video, id) => {
        return (
          <div className={style.single_post_Con} key={id}>
            <div className={style.header}>
              <div className={style.header_left}>
                <Image
                  className={style.user_img}
                  src={video.user_Img}
                  width={50}
                  height={50}
                  alt="Img"
                  sizes="100%"
                />
                <div className={style.user_name_time}>
                  <p className={style.user_name}>{video.user_Name}</p>
                  <div className={style.date_privacy}>
                    <p className={style.date}>{video.date}</p>
                    {video.privacy === "public" ? (
                      <MdOutlinePublic className={style.icon} />
                    ) : (
                      <LiaUserFriendsSolid className={style.icon} />
                    )}
                  </div>
                </div>
              </div>
              <div className={style.header_right}>
                <BsThreeDots className={style.icon} />
                <LiaTimesSolid className={style.icon} />
              </div>
            </div>
            <p className={style.post_text}>
              {
                readmore ? shortenText(video.text, 30) : video.text
              }
              {
                video.text.split("").length > 30 && (
                  <span
                    style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                    onClick={() => setReadmore(!readmore)}
                  >
                    {readmore ? "Read more" : "Read less"}
                  </span>
                )
              }
            </p>
            <div className={style.post_video}>
              <video
                src={video.video}
                controls
                title={`${video.user_Name}_empiregram_video`}
              ></video>
            </div>
            <div className={style.post_reaction_header}>
              <div className={style.post_reaction_header_left}>
                <AiOutlineLike className={style.icon} />
                <p>{video.like_No}</p>
              </div>
              <div className={style.post_reaction_header_right}>
                <div className={style.comment}>
                  <p>{video.comment_No}</p>
                  <BiMessage className={style.icon} />
                </div>
                <div className={style.forward}>
                  <p>{video.forward_No}</p>
                  <TiArrowForward className={style.icon} />
                </div>
              </div>
            </div>
            <div className={style.post_reaction_Con}>
              <div className={style.like}>
                <AiOutlineLike className={style.icon} />
                <p>Like</p>
              </div>
              <div className={style.comment}>
                <BiMessage className={style.icon} />
                <p>Comment</p>
              </div>
              <div className={style.share}>
                <p>Share</p>
                <TiArrowForward className={style.icon} />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Video;



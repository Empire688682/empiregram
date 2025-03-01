"use client";
import React, { useEffect, useState } from "react";
import style from "./SinglePost.module.css";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { MdOutlinePublic } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { allPosts } from "../data";

// Function to truncate text to a specific word limit
const truncateText = (text, wordLimit) => {
  const words = text.split(" "); // Split text into words
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(" ") + " ..."; // Return first 50 words + "..."
  }
  return text; // Return full text if it's within the limit
};

const SinglePost = () => {
  const [posts, setAllPost] = useState([]);

  useEffect(() => {
    setAllPost(allPosts);
  }, []);

  const removePost = (postId) => {
    const updatedPosts = posts.filter((post) => post.id !== postId);
    if (updatedPosts) {
      setAllPost(updatedPosts);
    }
  };

  return (
    <div className={style.single_post}>
      {posts.map((post, id) => (
        <div className={style.single_post_Con} key={post.id}>
          <div className={style.header}>
            <div className={style.header_left}>
              <Image
                className={style.user_img}
                src={post.user_Img}
                width={50}
                height={50}
                alt="Img"
                sizes="100%"
              />
              <div className={style.user_name_time}>
                <p className={style.user_name}>{post.user_Name}</p>
                <div className={style.date_privacy}>
                  <p className={style.date}>{post.date}</p>
                  {post.privacy === "public" ? (
                    <MdOutlinePublic className={style.icon} />
                  ) : (
                    <LiaUserFriendsSolid className={style.icon} />
                  )}
                </div>
              </div>
            </div>
            <div className={style.header_right}>
              <BsThreeDots className={style.icon} />
              <LiaTimesSolid
                className={style.icon}
                onClick={() => removePost(post.id)}
              />
            </div>
          </div>

          {/* Display truncated text */}
          <p className={style.post_text}>{truncateText(post.text, 20)}</p>

          <div className={style.post_images}>
            <div className={style.img_big_Con}>
              <Image
                className={style.post_img}
                src={post.big_Img}
                fill
                alt="Img"
                sizes="100%"
              />
            </div>
            <div className={style.small_img_Cons}>
              {post.small_Img1 && (
                <div className={style.img_small_Con}>
                  <Image
                    className={style.post_img}
                    src={post.small_Img1}
                    fill
                    alt="Img"
                    sizes="100%"
                  />
                </div>
              )}
              {post.small_Img2 && (
                <div className={style.img_small_Con}>
                  <Image
                    className={style.post_img}
                    src={post.small_Img2}
                    fill
                    alt="Img"
                    sizes="100%"
                  />
                </div>
              )}
            </div>
          </div>

          <div className={style.post_reaction_header}>
            <div className={style.post_reaction_header_left}>
              <AiOutlineLike className={style.icon} />
              <p>{post.like_No}</p>
            </div>
            <div className={style.post_reaction_header_right}>
              <div className={style.comment}>
                <p>{post.comment_No}</p>
                <BiMessage className={style.icon} />
              </div>
              <div className={style.forward}>
                <p>{post.forward_No}</p>
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
      ))}
    </div>
  );
};

export default SinglePost;

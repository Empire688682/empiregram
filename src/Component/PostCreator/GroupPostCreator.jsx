import React, { useState } from "react";
import style from "./PostCreator.module.css";
import Image from "next/image";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { FaFileImage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

const GroupPostCreator = ({ setCreatePost }) => {
  const [media, setMedia] = useState([]);
  const [imageUploader, setImageUploader] = useState(false);

  const removeMedia = (index) => {
    setMedia((prevMedia) => prevMedia.filter((_, i) => i !== index));
  };

  const getMediaPreview = () => {
    return media.map((file, index) => {
      const mediaURL = window.URL.createObjectURL(file);
      console.log("mediaURL", mediaURL);
      if (file.type.startsWith("image/")) {
        return (
          <div className={style.post_image_Con} key={index}>
            <LiaTimesSolid
              className={style.post_image_time_icon}
              onClick={() => removeMedia(index)}
            />
            <Image
              src={mediaURL}
              alt="User"
              fill
              sizes="100%"
              className={style.post_image}
            />
          </div>
        );
      } else if (file.type.startsWith("video/")) {
        return (
          <div className={style.post_image_Con} key={index}>
            <LiaTimesSolid
              className={style.post_image_time_icon}
              onClick={() => removeMedia(index)}
            />
            <video controls className={style.post_image}>
              <source src={mediaURL} type={media.type} />
              Your browser does not support the video tag.
            </video>
          </div>
        );
      }
      return null;
    });
  };

  const handleOnchange = (e) => {
    const files = Array.from(e.target.files);
    if (files) {
      setMedia((prevMedia) => [...prevMedia, ...files]);
    }
    setImageUploader(false);
  };
  return (
    <div className={style.post_creator}>
      <LiaTimesSolid
        className={style.time_icon}
        onClick={() => setCreatePost(false)}
      />
      <h2>Create post</h2>
      <hr />
      <div className={style.content}>
        <div className={style.user_details}>
          <div className={style.img_Con}>
            <Image src="/avatar_icon.png" alt="User" fill sizes="100%" />
          </div>
          <div className={style.user_name}>
            <p>Daniel Juwon Asehinde</p>
            <select name="" id="">
              <option value="Public">Public</option>
              <option value="Friends">Friends</option>
              <option value="Friends except">Friends except</option>
            </select>
          </div>
        </div>
        <textarea
          name=""
          id=""
          cols="5"
          rows="2"
          placeholder="What it is in your mind @Username"
        ></textarea>
        {imageUploader && (
          <div className={style.uploader}>
            <input
              type="file"
              onChange={handleOnchange}
              name="image"
              id="media"
              hidden
              accept="image/*, video/*"
            />
            <label htmlFor="media">
              <IoIosAddCircle className={style.add_image_icon} />
            </label>
          </div>
        )}
        {media.length > 0 && getMediaPreview()}
        <div className={style.icon_Con}>
          <MdOutlineEmojiEmotions className={style.icon} />
          <hr />
        </div>
        <div className={style.post_fotter}>
          <p>Add to your post</p>
          <div className={style.fotter_icons}>
            <FaFileImage
              className={style.fotter_icon}
              onClick={() => setImageUploader(true)}
            />
            <IoIosContacts className={style.fotter_icon} />
            <FaLocationDot className={style.fotter_icon} />
            <MdOutlineEmojiEmotions className={style.fotter_icon} />
          </div>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default GroupPostCreator;



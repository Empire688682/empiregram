import React, { useState } from 'react';
import style from './PostCreator.module.css';
import Image from 'next/image';
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { LiaTimesSolid } from "react-icons/lia";
import { FaFileImage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosAddCircle } from "react-icons/io";

const PostCreator = ({ setCreatePost }) => {
  const [media, setMedia] = useState(null); // Holds either image or video
  const [mediaUploader, setMediaUploader] = useState(false);

  const handleMediaChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedia(file);
      setMediaUploader(false);
    }
  };

  const getMediaPreview = () => {
    const mediaURL = window.URL.createObjectURL(media);
    if (media.type.startsWith('image/')) {
      return (
        <div className={style.post_media_Con}>
          <LiaTimesSolid className={style.post_media_time_icon} onClick={() => setMedia(null)} />
          <Image src={mediaURL} alt="Preview" fill sizes="100%" className={style.post_media} />
        </div>
      );
    } else if (media.type.startsWith('video/')) {
      return (
        <div className={style.post_media_Con}>
          <LiaTimesSolid className={style.post_media_time_icon} onClick={() => setMedia(null)} />
          <video controls className={style.post_media}>
            <source src={mediaURL} type={media.type} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }
    return null;
  };

  return (
    <div className={style.post_creator}>
      <LiaTimesSolid className={style.time_icon} onClick={() => setCreatePost(false)} />
      <h2>Create post</h2>
      <hr />
      <div className={style.content}>
        <div className={style.user_details}>
          <div className={style.img_Con}>
            <Image src="/avatar_icon.png" alt="User" fill sizes="100%" />
          </div>
          <div className={style.user_name}>
            <p>Daniel Juwon Asehinde</p>
            <select>
              <option value="Public">Public</option>
              <option value="Friends">Friends</option>
              <option value="Friends except">Friends except</option>
            </select>
          </div>
        </div>
        <textarea rows="2" placeholder="What is on your mind @Username"></textarea>
        {mediaUploader && (
          <div className={style.uploader}>
            <input
              type="file"
              onChange={handleMediaChange}
              id="media"
              hidden
              accept="image/*,video/*"
            />
            <label htmlFor="media">
              <IoIosAddCircle className={style.add_media_icon} />
            </label>
          </div>
        )}
        {media && getMediaPreview()}
        <div className={style.icon_Con}>
          <MdOutlineEmojiEmotions className={style.icon} />
          <hr />
        </div>
        <div className={style.post_fotter}>
          <p>Add to your post</p>
          <div className={style.fotter_icons}>
            <FaFileImage className={style.fotter_icon} onClick={() => setMediaUploader(true)} />
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

export default PostCreator;

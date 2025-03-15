import React from "react";
import style from "./UserData.module.css";
import Image from "next/image";
import { IoIosCamera } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import UserProfilePost from "../UserProfilePost/UserProfilePost";

const UserData = () => {
  return (
    <div className={style.userData}>
      <div className={style.userBanner}>
        <Image
          style={{ objectFit: "cover" }}
          src="/my_banner.jpg"
          alt=""
          fill
          sizes="100%"
        />
        <button aria-label="Edit cover photo" className={style.editCoverBtn}>
          <IoIosCamera /> <span>Edit cover photo</span>
        </button>
      </div>
      <div className={style.userProfileCon}>
        <div className={style.userProfile}>
          <div className={style.userProfileImg}>
            <Image
              className={style.userProfileImg}
              style={{ objectFit: "cover" }}
              src="/profile_alison.png"
              alt=""
              fill
              sizes="100%"
            />
            <div className={style.userProfileImgIcon}>
              <IoIosCamera />
            </div>
          </div>
          <div className={style.userProfileNamesNfriends}>
            <div className={style.userProfileName}>
              <h2>Juwon Asehinde</h2>
              <span>-Jayempire</span>
              <span>505 friends</span>
            </div>
            <div className={style.userProfileFriends}>
              {Array.from({ length: 8 }).map((_, id) => (
                <Image
                  style={{ borderRadius: "50%", cursor: "pointer" }}
                  key={id}
                  className={style.userfriendsImg}
                  src="/profile_enrique.png"
                  alt=""
                  width={30}
                  height={30}
                  sizes="100%"
                />
              ))}
            </div>
          </div>
        </div>
        <div className={style.userProfileEdit}>
          <button>
            <FaPlus />
            <span>Add to story</span>
          </button>
          <button>
            <MdEdit />
            <span>Edit profile</span>
          </button>
          <button>
            <FaAngleDown />
          </button>
        </div>
      </div>
      <div className={style.userProfileBioNuserPost}>
        <div className={style.userProfileBio}>

        </div>
        <div className={style.userProfilePost}>
          <UserProfilePost/>
        </div>
      </div>
    </div>
  );
};

export default UserData;

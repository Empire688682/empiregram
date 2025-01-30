import React from 'react';
import style from "./UserData.module.css";
import Image from 'next/image';
import { IoIosCamera } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const UserData = () => {
    return (
        <div className={style.userData}>
            <div className={style.userBanner}>
                <Image style={{ objectFit: "cover" }} src="/pic3.png" alt="" fill sizes="100%" />
                <button aria-label="Edit cover photo" className={style.editCoverBtn}> <IoIosCamera /> <span>Edit cover photo</span></button>
            </div>
            <div className={style.userProfile}>
                <div className={style.userProfileImg}>
                    <Image className={style.userProfileImg} style={{ objectFit: "cover" }} src="/profile_alison.png" alt="" fill sizes="100%" />
                    <IoIosCamera className={style.userProfileImgIcon} />
                </div>
            </div>
            <div className={style.userProfileNamesNfriends}>
                <div className={style.userProfileName}>
                    <h2>Juwon Asehinde</h2>
                    <span>-Jayempire</span>
                    <span>505 friends</span>
                </div>
                <div className={style.userProfileFriends}>
                    {
                        Array.from({ length: 10 }).map((_, id) => (
                            <Image key={id} className={style.userfriendsImg} src="/profile_enrique.png" alt="" width={100} height={100} sizes="100%" />
                        ))
                    }
                </div>
            </div>
            <div className={style.userProfileEdit}>
                <button>
                    <FaPlus />
                    <span>Add to story</span>
                </button>
                <button>
                    <MdEdit />
                    <span>Add to story</span>
                </button>
                <button>
                    <FaAngleDown />
                </button>
            </div>
        </div>
    )
}

export default UserData

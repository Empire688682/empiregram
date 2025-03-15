"use client";
import React, {useState} from 'react';
import style from "./SingleGridDisplay.module.css";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";
import { MdOutlinePublic } from "react-icons/md";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { RxAvatar } from "react-icons/rx";
import { MdInsertEmoticon } from "react-icons/md";
import { IoCamera } from "react-icons/io5";
import { MdSend } from "react-icons/md";
import { allPosts } from '@/component/data';

const SingleGridDisplay = ({ id, setSingleGridId }) => {
    const data = allPosts.find((post) => post.id === id);
    const [showIputIcons, setShowIputIcons] = useState(false);
    return (
        <div className={style.singleGridDisplay}>
            <div className={style.single_post_Con} >
                <div className={style.header}>
                    <div className={style.header_left}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className={style.user_img}
                            src={data.user_Img}
                            width={40}
                            height={40}
                            alt="Img"
                            sizes="100%"
                        />
                        <div className={style.user_name_time}>
                            <p className={style.user_name}>{data.user_Name}</p>
                            <div className={style.date_privacy}>
                                <p className={style.date}>{data.date}</p>
                                {data.privacy === "public" ? (
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
                            onClick={() => setSingleGridId(null)}
                        />
                    </div>
                </div>
                <p className={style.post_text}>{data.text}</p>
                <div className={style.post_images}>
                    <div className={style.img_big_Con}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className={style.post_img}
                            src={data.big_Img}
                            fill
                            alt="Img"
                            sizes="100%"
                        />
                    </div>
                    <div className={style.small_img_Cons}>
                        {data.small_Img1 && (
                            <div className={style.img_small_Con}>
                                <Image
                                    style={{ objectFit: "cover" }}
                                    className={style.post_img}
                                    src={data.small_Img1}
                                    fill
                                    alt="Img"
                                    sizes="100%"
                                />
                            </div>
                        )}
                        {data.small_Img2 && (
                            <div className={style.img_small_Con}>
                                <Image
                                    style={{ objectFit: "cover" }}
                                    className={style.post_img}
                                    src={data.small_Img2}
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
                        <p>{data.like_No}</p>
                    </div>
                    <div className={style.post_reaction_header_right}>
                        <div className={style.comment}>
                            <p>{data.comment_No}</p>
                            <BiMessage className={style.icon} />
                        </div>
                        <div className={style.forward}>
                            <p>{data.forward_No}</p>
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
                <div className={style.userCommentCon}>
                    <div className={style.userComment}>
                        <Image
                            style={{ objectFit: "cover" }}
                            className={style.user_img}
                            src={data.user_Img}
                            width={40}
                            height={40}
                            alt="Img"
                            sizes="100%"
                        />
                        <div className={style.inputNicons}>
                            <input onClick={() => setShowIputIcons(true)} aria-details="comment" type="text" placeholder={`Comment as ${data.user_Name}`} />
                            {
                                showIputIcons && (
                                    <div className={style.iconsBoxCon}>
                                        <div className={style.iconsBox}>
                                            <RxAvatar className={style.icon} />
                                            <MdInsertEmoticon className={style.icon} />
                                            <IoCamera className={style.icon} />
                                        </div>
                                        <div className={style.sendIcon}>
                                            <MdSend className={style.icon} />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleGridDisplay



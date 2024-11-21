import React from 'react';
import style from './SinglePost.module.css';
import Image from 'next/image';
import { BsThreeDots } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { BiMessage } from "react-icons/bi";
import { TiArrowForward } from "react-icons/ti";

const SinglePost = () => {
    return (
        <div className={style.single_post}>
            <div className={style.single_post_Con}>
                <div className={style.header}>
                    <div className={style.header_left}>
                        <Image className={style.user_img} src='/profile_alison.png' width={50} height={50} alt='Img' sizes='100%' />
                        <div className={style.user_name_time}>
                            <p className={style.user_name}>Simba Rossie</p>
                            <span>Nov 19 at 4:25 PM</span>
                        </div>
                    </div>
                    <div className={style.header_right}>
                        <BsThreeDots className={style.icon} />
                        <LiaTimesSolid className={style.icon} />
                    </div>
                </div>
                <p className={style.post_text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, sapiente molestiae. Modi ratione, nesciunt libero optio eaque doloremque quia, sapiente amet facilis repellat maxime voluptas aliquid fugit enim ab impedit.
                    Praesentium illum, sit rem voluptatum reprehenderit neque? Praesentium quaerat nemo distinctio possimus vero architecto enim illo voluptas dolorem nostrum voluptatibus et reiciendis error, temporibus nisi omnis quis aut, deleniti necessitatibus.
                </p>
                <div className={style.post_images}>
                    <div className={style.img_big_Con}>
                        <Image className={style.post_img} src='/pic1.png' fill alt='Img' sizes='100%' />
                    </div>
                    <div className={style.small_img_Cons}>
                    <div className={style.img_small_Con}>
                        <Image className={style.post_img} src='/img1.jpg' fill alt='Img' sizes='100%' />
                    </div>
                    <div className={style.img_small_Con}>
                        <Image className={style.post_img} src='/img2.jpg' fill alt='Img' sizes='100%' />
                    </div>
                    </div>
                </div>
                <div className={style.post_reaction_header}>
                    <div className={style.post_reaction_header_left}>
                        <AiOutlineLike className={style.icon} />
                        <p>10k</p>
                    </div>
                    <div className={style.post_reaction_header_right}>
                        <div className={style.comment}>
                            <p>10</p>
                            <BiMessage className={style.icon} />
                        </div>
                        <div className={style.forward}>
                            <p>8</p>
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
        </div>
    )
}

export default SinglePost

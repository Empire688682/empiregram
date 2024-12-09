import React from "react";
import style from './YourGroups.module.css';
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const YourGroups = () => {
    return (
        <div className={style.your_groups}>
            <div className={style.pending_group_con}>
                <h2>Pending group request (2) </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni sunt similique unde quibusdam cupiditate modi autem ut architecto! Sapiente, repudiandae facilis dicta neque laborum ipsam quisquam vitae atque natus.</p>
                <div className={style.pending_group_cart_con}>
                {
                    Array.from({length: 2}).map((_, id) => (
                        <div className={style.pending_group_cart} key={id}>
                            <div className={style.pending_group_header}>
                                <div className={style.pending_group_img_con}>
                                    <Image className={style.pending_group_img} src='/img1.jpg' alt='IMG' fill />
                                </div>
                                <div className={style.pending_group_text_all}>
                                    <p>Amazon kindle group</p>
                                    <span>Last request 2 years ago</span>
                                </div>
                            </div>
                            <div className={style.pending_group_footer}>
                                <button>Update responses</button>
                                <BsThreeDots className={style.icon} />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className={style.group_you_are_con}>
                <h2>All groups you have joined (200) </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum magni sunt similique unde quibusdam cupiditate modi autem ut architecto! Sapiente, repudiandae facilis dicta neque laborum ipsam quisquam vitae atque natus.</p>
                <div className={style.group_you_are_cart_con}>
                {
                    Array.from({length: 2}).map((_, id) => (
                        <div className={style.group_you_are_cart} key={id}>
                            <div className={style.group_you_are_header}>
                                <div className={style.group_you_are_img_con}>
                                    <Image className={style.group_you_are_img} src='/img1.jpg' alt='IMG' fill />
                                </div>
                                <div className={style.group_you_are_text_all}>
                                    <p>Amazon kindle group</p>
                                    <span>Last request 2 years ago</span>
                                </div>
                            </div>
                            <div className={style.group_you_are_footer}>
                                <button>Update responses</button>
                                <BsThreeDots className={style.icon} />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default YourGroups
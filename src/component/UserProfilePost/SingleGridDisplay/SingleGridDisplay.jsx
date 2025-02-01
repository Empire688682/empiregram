import React from 'react';
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
import { allPosts } from "@/component/data";

const SingleGridDisplay = ({id}) => {
    const data = allPosts.find((post) => post.id === id);
    console.log("Data:", id);
    return (
        <div className={style.singleGridDisplay}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut deleniti eius officia, placeat aperiam iste nostrum at temporibus, doloremque voluptatibus quidem sapiente obcaecati voluptates consequatur? Possimus expedita cupiditate modi et.
        </div>
    )
}

export default SingleGridDisplay

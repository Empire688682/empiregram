import React from 'react';
import style from './DiscoverGroups.module.css';
import Image from 'next/image';
import { groupYML } from '../data';
import { BsThreeDots } from "react-icons/bs";

const DiscoverGroups = () => {
    return (
        <div className={style.discover_groups_container}>
            <div className={style.discover_groups}>
            <div className={style.discover_groups_header}>
                <div>
                <h2>Popular near you</h2>
                <p>Groups people in your area are in</p>
                </div>
                <span>See all</span>
            </div>
            <div className={style.discover_groups_contents}>
                <div className={style.discover_groups_contents_img_con}>
                    <Image className={style.discover_groups_contents_img} src='/empiregram-hero-bg.webp' alt="IMG" fill />
                </div>
                <div className={style.discover_groups_contents_text}>
                    <h3>BYC (BackYardChickens)</h3>
                    <span>1.2M members . 10+ posts a day</span>
                </div>
            </div>
            <button>Join group</button>
            </div>
        </div>
    );
};

export default DiscoverGroups;
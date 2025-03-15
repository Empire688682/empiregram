"use client";
import React, { useState } from "react";
import style from "./DiscoverGroups.module.css";
import Image from "next/image";
import { LiaTimesCircleSolid } from "react-icons/lia";

const DiscoverGroups = () => {
  const [discoverGroups, setDiscoverGroups] = useState([]);
  const [friendGroups, setFriendGroups] = useState([]);
  const [sugestedGroups, setSugestedGroups] = useState([]);
  return (
    <div className={style.discover_groups_container}>
      {/*Discover GROUPS*/}
      <div className={style.discover_groups}>
        <div className={style.discover_groups_header}>
          <div>
            <h2>Popular near you</h2>
            <p>Groups people in your area are in</p>
          </div>
          <span>See all</span>
        </div>
        <div className={style.discover_groups_contents_container}>
          {Array.from({ length: 2 }).map((_, id) => (
            <div className={style.discover_groups_contents} key={id}>
              <div className={style.discover_groups_contents_img_con}>
                <Image
                  className={style.discover_groups_contents_img}
                  src="/empiregram-hero-bg.webp"
                  alt="IMG"
                  fill
                />
                <LiaTimesCircleSolid className={style.icons} />
              </div>
              <div className={style.discover_groups_contents_text}>
                <h3>BYC (BackYardChickens)</h3>
                <span>1.2M members . 10+ posts a day</span>
              </div>
              <div className={style.discover_groups_contents_btn}>
                <button>Join group</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*GROUPS YOUR FREINDS ARE IN*/}
      <div className={style.discover_groups}>
        <div className={style.discover_groups_header}>
          <div>
            <h2>Friends groups</h2>
            <p>Groups your friends are in.</p>
          </div>
          <span>See all</span>
        </div>
        <div className={style.discover_groups_contents_container}>
          {Array.from({ length: 2 }).map((_, id) => (
            <div className={style.discover_groups_contents} key={id}>
              <div className={style.discover_groups_contents_img_con}>
                <Image
                  className={style.discover_groups_contents_img}
                  src="/img1.jpg"
                  alt="IMG"
                  fill
                />
                <LiaTimesCircleSolid className={style.icons} />
              </div>
              <div className={style.discover_groups_contents_text}>
                <h3>BYC (BackYardChickens)</h3>
                <span>1.2M members . 10+ posts a day</span>
              </div>
              <div className={style.discover_groups_contents_btn}>
                <button>Join group</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*More suggestion*/}
      <div className={style.discover_groups}>
        <div className={style.discover_groups_header}>
          <div>
            <h2>More suggestion </h2>
          </div>
          <span>See all</span>
        </div>
        <div className={style.discover_groups_contents_container}>
          {Array.from({ length: 10 }).map((_, id) => (
            <div className={style.discover_groups_contents} key={id}>
              <div className={style.discover_groups_contents_img_con}>
                <Image
                  className={style.discover_groups_contents_img}
                  src="/img2.jpg"
                  alt="IMG"
                  fill
                />
                <LiaTimesCircleSolid className={style.icons} />
              </div>
              <div className={style.discover_groups_contents_text}>
                <h3>BYC (BackYardChickens)</h3>
                <span>1.2M members . 10+ posts a day</span>
              </div>
              <div className={style.discover_groups_contents_btn}>
                <button>Join group</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiscoverGroups;



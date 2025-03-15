"use client";
import React, { useState } from "react";
import style from "./GroupEvent.module.css";
import { MdOutlineEventBusy } from "react-icons/md";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const GroupEvent = () => {
  const [upcomingEvent, setUpcomingEvent] = useState(false);
  const [ifMore, setIfmore] = useState(true);
  return (
    <div className={style.groupEventCom}>
      <div className={style.groupEvent}>
        <div className={style.groupEventHeader}>
          <h2>Upcoming events</h2>
          <div className={style.groupEventHeaderBtns}>
            <button className={style.createEventBtn}>Find event</button>
            <button className={style.findEventBtn}>Create event</button>
          </div>
        </div>
        {!upcomingEvent && (
          <div className={style.ifUpcomingEvent}>
            <MdOutlineEventBusy className={style.upcomingIcon} />
            <p>No upcomning evets</p>
          </div>
        )}
        <div className={style.pastEvents}>
          <h1>Past events</h1>
          {Array.from({ length: 10 })
            .fill("")
            .map((_, id) => (
              <div className={style.pastEventCart} key={id}>
                <div className={style.imgCon}>
                  <Image
                    className={style.img}
                    src="/empiregram-logo.webp"
                    alt="IMG"
                    fill
                  />
                </div>
                <div className={style.pastEventText}>
                  <span>Wed, Jul 17</span>
                  <h3>PRECIOUS CARNIVAL</h3>
                  <div className={style.pastEventAuthor}>
                    <Image
                      className={style.img}
                      src="/profile_enrique.png"
                      alt="IMG"
                      width={30}
                      height={30}
                    />
                    <p>Shared by Olamide Gudoo</p>
                  </div>
                  <BsThreeDots className={style.icon} />
                </div>
              </div>
            ))}
        </div>
        {ifMore && <button className={style.seeMoreBtn}>See more</button>}
      </div>
    </div>
  );
};

export default GroupEvent;



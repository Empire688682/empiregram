import React from "react";
import style from "./MediaPhotos.module.css";
import Image from "next/image";

const MediaPhotos = () => {
  return (
    <div className={style.mediaPhotos}>
      {Array.from({ length: 50 }).map((_, id) => (
        <Image
          key={id}
          alt="Img"
          src="/profile_richard.png"
          className={style.img}
          width={100}
          height={100}
          sizes="100%"
        />
      ))}
    </div>
  );
};

export default MediaPhotos;

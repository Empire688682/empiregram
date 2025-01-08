import React from "react";
import style from "./PostDisplay.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";

const PostDisplay = ({ setPostDisplayData, postDisplayData }) => {

    if (!postDisplayData) {
        return null; // Return null if there is no data to display
      }
    
      const { picture, login } = postDisplayData;

  return (
    <div className={style.postDisplay}>
      <div className={style.postDisplayCon}>
        <LiaTimesSolid
          className={style.cancelIcon}
          onClick={() => setPostDisplayData(null)}
        />
        <div className={style.userImgCon}>
          <Image
            className={style.userImg}
            src={picture.medium}
            width={50}
            height={50}
            alt="Img"
            sizes="100%"
          />
        </div>
        {/* Custom Navigation Buttons */}
        <div className={`${style.customButton} ${style.customPrev}`}>-</div>
        <div className={`${style.customButton} ${style.customNext}`}>+</div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: `.${style.customNext}`,
            prevEl: `.${style.customPrev}`,
            clickable: true,
          }}
          scrollbar={true}
          loop={true}
        >
          {Object.keys(postDisplayData).map((_, id) => (
            <SwiperSlide key={id} className={style.post_slider}>
              <div className={style.posts}>
                <div className={style.posts_img_wrapper}>
                  <Image
                    className={style.posts_img}
                    src={postDisplayData.picture.large}
                    fill
                    alt="Img"
                    sizes="100%"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PostDisplay;

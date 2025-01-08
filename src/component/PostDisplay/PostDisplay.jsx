import React from 'react';
import style from "./PostDisplay.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGlobalContext } from "../Context";
import Image from 'next/image';

const PostDisplay = () => {
    const { posts } = useGlobalContext();

    return (
        <div className={style.postDisplay}>
            <div className={style.postDisplayCon}>
                {/* Custom Navigation Buttons */}
                <div className={`${style.customButton} ${style.customPrev}`} >-</div>
                <div className={`${style.customButton} ${style.customNext}`} >+</div>

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
                    {posts.map((post) => (
                        <SwiperSlide key={post.login.uuid} className={style.post_slider}>
                            <div className={style.posts}>
                                <div className={style.posts_img_wrapper}>
                                    <Image
                                        className={style.posts_img}
                                        src={post.picture.large}
                                        fill
                                        alt={`Post image for ${post.login.username}`}
                                        sizes="100%"
                                    />
                                </div>
                                <div className={style.posts_post_Con}>
                                    <Image
                                        className={style.secondary_posts_img}
                                        src={post.picture.thumbnail}
                                        width={50}
                                        height={50}
                                        alt={`Thumbnail image for ${post.login.username}`}
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

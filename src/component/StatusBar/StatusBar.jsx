import React from 'react';
import style from './StatusBar.module.css';
import Image from 'next/image';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useGlobalContext } from '../Context';

const StatusBar = () => {
  const {posts, loading} = useGlobalContext();
  return (
    <div className={style.status_bar}>
      <div className={style.status_bar_Con}>
        <div className={style.user}>
          <Image className={style.user_img} src='/avatar_icon.png' fill alt='IMG' sizes='100%' />
          <div className={style.user_plus}>
            <p>+</p>
            <span>Create story</span>
          </div>
        </div>
        {
          loading ? <div className={style.loading}>
            <h2>Loading...</h2>
          </div>
          :
          <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={4}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          scrollbar={false}
          loop={false}
        >
          {
            posts.map((post) => (
              <SwiperSlide key={post.login.uuid} className={style.post_slider}>
                <div className={style.friends}>
                      <Image className={style.friends_img} src={post.picture.large} fill alt='IMG' sizes='100%' />
                      <div className={style.friends_post_Con}>
                        <Image className={style.secondary_friends_img} src={post.picture.thumbnail} width={50} height={50} alt='IMG' sizes='100%' />
                      </div>
                      <p className={style.friends_name}>{`${post.name.first} ${post.name.last}`}</p>
                    </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        }
      </div>
    </div>
  );
}

export default StatusBar;

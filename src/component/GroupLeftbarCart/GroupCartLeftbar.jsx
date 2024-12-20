import React from 'react';
import style from './GroupLeftbarCart.module.css';
import { IoIosAddCircle } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";

const GroupLeftbarCart = () => {
  return (
    <div className={style.groupLeftbarCartContainer}>
         <div className={style.groupLeftbar}>
        <div className={style.header_fixed}>
          <div className={style.header}>
            <h2>Chats</h2>
            <IoIosAddCircle className={style.icon} />
            <BsThreeDotsVertical className={style.icon} />
          </div>
          <div className={style.search_bar}>
            <label htmlFor="search">
              <IoSearchOutline className={style.search_bar_icon} />
            </label>
            <input type="text" id='search' placeholder='Search' name='search' required />
          </div>
        </div>
        {
          loading ? <div className={style.loading}>
            <h2>Loading...</h2>
          </div>
          :
          <div className={style.users_list}>
        {
          friends.map((friend) => (
            <div className={style.users} key={friend.id}>
              <div className={style.left_side}>
                <div className={style.img_Con}>
                  <Image src={friend.user_Img} fill alt='User' sizes='100%' />
                </div>
                <div className={style.name_msg}>
                  <p>{friend.user_Name}</p>
                  <span>{friend.currentMessage}</span>
                </div>
              </div>
              <div className={style.right_side}>
                <p>Today</p>
                <span>1</span>
              </div>
            </div>
          ))
        }
        </div>
        }
      </div>
    </div>
  )
}

export default GroupLeftbarCart

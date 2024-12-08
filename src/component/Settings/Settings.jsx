'use client'
import React, { useState } from 'react';
import style from './Settings.module.css';
import SettingsLeftBar from '../SettingsLeftBar/SettingsLeftBar';
import { FaRegMessage } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowRoundUp } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { LuMessagesSquare } from "react-icons/lu";
import { AiTwotoneMail } from "react-icons/ai";
import { AiOutlinePushpin } from "react-icons/ai";

const Settings = () => {
    const [mode, setMode] = useState("on");
    const handleMode = () => {
        setMode((prev) => (prev === "on" ? "off" : "on"))
    };
    const [settingTag, setSettingTag] = useState("notifications");
    const [hiddenTag, setHiddenTag] = useState("");
    return (
        <div className={style.settings}>
            <div className={style.settings_Con}>
                <div className={style.SettingsLeftBar}>
                    <SettingsLeftBar setSettingTag={setSettingTag} />
                </div>
                <div className={style.Settings_Content}>
                    {
                        settingTag === "notifications" && (
                            <div className={style.container}>
                                <h2>Notifications settings</h2>
                                <p style={{ color: "#1c1e21" }}>Empiregram may still send you important notifications about your account and content outside of your preferred notification settings.</p>
                                <h3 style={{ color: "#1c1e21" }}>What Notification You Recieve</h3>
                                <div className={style.cart}>
                                    <div className={style.cart_cart}>
                                        <div className={style.secondary_cart}>
                                            <div className={style.cart_left_notification}>
                                                <div className={style.cart_left_icon_Con}>
                                                    <FaRegMessage className={style.icon} />
                                                </div>
                                                <div>
                                                    <div className={style.cart_left_text}>
                                                        <p>Comments</p>
                                                        <span>Push, Email, SMS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className={style.cart_right} onClick={() => setHiddenTag((prev) => prev !== "comments" ? "comments" : "")}>
                                                {
                                                    hiddenTag === "comments" ?
                                                        <IoIosArrowUp className={style.icon} /> :
                                                        <IoIosArrowDown className={style.icon} />
                                                }
                                            </div>
                                        </div>
                                        {
                                            hiddenTag === "comments" && (
                                                <div className={style.hidden_content}>
                                                    <p>These are notifications for comments on your posts and replies to your comments.</p>
                                                    <span>Where you receive these notifications</span>
                                                    <div className={style.hidden_btn}>
                                                        <div className={style.btn_text}>
                                                            <AiOutlinePushpin className={style.icon} />
                                                            <small>Push</small>
                                                        </div>
                                                        <div className={style.btn_btn}>

                                                        </div>
                                                    </div>
                                                    <div className={style.hidden_btn}>
                                                        <div className={style.btn_text}>
                                                            <AiTwotoneMail className={style.icon} />
                                                            <small>Email</small>
                                                        </div>
                                                        <div className={style.btn_btn}>

                                                        </div>
                                                    </div>
                                                    <div className={style.hidden_btn}>
                                                        <div className={style.btn_text}>
                                                            <FaRegMessage className={style.icon} />
                                                            <small>SMS</small>
                                                        </div>
                                                        <div className={style.btn_btn}>

                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className={style.secondary_cart}>
                                        <div className={style.cart_left_notification}>
                                            <div className={style.cart_left_icon_Con}>
                                                <FaUserFriends className={style.icon} />
                                            </div>
                                            <div className={style.cart_left_text}>
                                                <p>Updates from friends</p>
                                                <span>Push, Email, SMS</span>
                                            </div>
                                        </div>
                                        <div className={style.cart_right} onClick={() => setHiddenTag((prev) => prev !== "updates" ? "updates" : "")}>
                                            {
                                                hiddenTag === "updates" ?
                                                    <IoIosArrowUp className={style.icon} /> :
                                                    <IoIosArrowDown className={style.icon} />
                                            }
                                        </div>
                                    </div>
                                    {
                                        hiddenTag === "updates" && (
                                            <div className={style.hidden_content}>
                                                <p>These are notifications for comments on your posts and replies to your comments.</p>
                                                <span>Where you receive these notifications</span>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiOutlinePushpin className={style.icon} />
                                                        <small>Push</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiTwotoneMail className={style.icon} />
                                                        <small>Email</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <FaRegMessage className={style.icon} />
                                                        <small>SMS</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className={style.secondary_cart}>
                                        <div className={style.cart_left_notification}>
                                            <div className={style.cart_left_icon_Con}>
                                                <LiaUserFriendsSolid className={style.icon} />
                                            </div>
                                            <div className={style.cart_left_text}>
                                                <p>Friends request</p>
                                                <span>Push, Email, SMS</span>
                                            </div>
                                        </div>
                                        <div className={style.cart_right} onClick={() => setHiddenTag((prev) => prev !== "friends" ? "friends" : "")}>
                                            {
                                                hiddenTag === "friends" ?
                                                    <IoIosArrowUp className={style.icon} /> :
                                                    <IoIosArrowDown className={style.icon} />
                                            }
                                        </div>
                                    </div>
                                    {
                                        hiddenTag === "friends" && (
                                            <div className={style.hidden_content}>
                                                <p>These are notifications for comments on your posts and replies to your comments.</p>
                                                <span>Where you receive these notifications</span>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiOutlinePushpin className={style.icon} />
                                                        <small>Push</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiTwotoneMail className={style.icon} />
                                                        <small>Email</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <FaRegMessage className={style.icon} />
                                                        <small>SMS</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    <div className={style.secondary_cart}>
                                        <div className={style.cart_left_notification}>
                                            <div className={style.cart_left_icon_Con}>
                                                <LuMessagesSquare className={style.icon} />
                                            </div>
                                            <div className={style.cart_left_text}>
                                                <p>Messages</p>
                                                <span>Push, Email, SMS</span>
                                            </div>
                                        </div>
                                        <div className={style.cart_right} onClick={() => setHiddenTag((prev) => prev !== "messages" ? "messages" : "")}>
                                            {
                                                hiddenTag === "messages" ?
                                                    <IoIosArrowUp className={style.icon} /> :
                                                    <IoIosArrowDown className={style.icon} />
                                            }
                                        </div>
                                    </div>

                                    {
                                        hiddenTag === "messages" && (
                                            <div className={style.hidden_content}>
                                                <p>These are notifications for comments on your posts and replies to your comments.</p>
                                                <span>Where you receive these notifications</span>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiOutlinePushpin className={style.icon} />
                                                        <small>Push</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <AiTwotoneMail className={style.icon} />
                                                        <small>Email</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                                <div className={style.hidden_btn}>
                                                    <div className={style.btn_text}>
                                                        <FaRegMessage className={style.icon} />
                                                        <small>SMS</small>
                                                    </div>
                                                    <div className={style.btn_btn}>

                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        )
                    }
                    {
                        settingTag === "posts" && (
                            <div className={style.container}>
                                <h2>Posts</h2>
                                <div className={style.cart}>
                                    <div className={style.secondary_cart}>
                                        <div className={style.cart_left}>
                                            <h3>Who can see your post</h3>
                                            <p>Your default audience is set to Public. This will be your audience for future posts, but you can always change it for a specific post.</p>
                                        </div>
                                        <div className={style.cart_right}>
                                            <select name="viewer" id="">
                                                <option value="Public">Public</option>
                                                <option value="Private">Private</option>
                                                <option value="Friends">Friends</option>
                                                <option value="Only me">Only me</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className={style.secondary_cart}>
                                        <div className={style.cart_left}>
                                            <h3>Allow visual search on your posts</h3>
                                            <p>Visual search finds other content on Facebook related to your post, to help people discover more of what they are interested in. This is your default, but you can always change it for specific posts. </p>
                                        </div>
                                        <div className={style.cart_right}>
                                            <div className={style.mode_right}>
                                                <span onClick={handleMode} className={mode === "on" ? `${style.mode_motor} ${style.dark}` : `${style.mode_motor}`}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Settings

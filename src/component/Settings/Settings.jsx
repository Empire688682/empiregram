'use client'
import React, { useState } from 'react';
import style from './Settings.module.css';
import SettingsLeftBar from '../SettingsLeftBar/SettingsLeftBar';

const Settings = () => {
    const [mode, setMode] = useState("on");
    const handleMode = () =>{
        setMode((prev)=> (prev === "on"? "off":"on"))
    }
    return (
        <div className={style.settings}>
            <div className={style.settings_Con}>
                <div className={style.SettingsLeftBar}>
                    <SettingsLeftBar />
                </div>
                <div className={style.Settings_Content}>
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
                                        <span onClick={handleMode} className={mode === "on" ? `${style.mode_motor} ${style.dark}`:`${style.mode_motor}`}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings

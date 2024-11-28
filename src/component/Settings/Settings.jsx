'use client'
import React from 'react';
import style from './Settings.module.css';
import SettingsLeftBar from '../SettingsLeftBar/SettingsLeftBar';

const Settings = () => {
    return (
        <div className={style.settings}>
            <div className={style.settings_Con}>
                <div className={style.SettingsLeftBar}>
                    <SettingsLeftBar />
                </div>
                <div className={style.Settings_Content}>

                </div>
            </div>
        </div>
    )
}

export default Settings

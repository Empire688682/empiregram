import React, { useEffect } from 'react';
import style from './CreateGroupLeftbar.module.css';
import Image from 'next/image';

const CreateGroupLeftbar = ({setGroupData, groupData}) => {
    const handleOnchange = (e)=>{
        const {name, value} = e.target;
        setGroupData((prev)=> ({...prev, [name]:value}))
    }
    
    return (
        <div className={style.create_group_leftbar}>
            <div className={style.create_group_leftbar_header}>
                <div className={style.header_links}>
                    <p>Group</p>
                    <p>-</p>
                    <p>Create group</p>
                </div>
                <h2>Create group</h2>
            </div>
            <div className={style.admin}>
                <Image className={style.user_img} src='/avatar_icon.png' width={40} height={40} alt='IMG' />
                <div className={style.admin_details}>
                    <p>Juwon Asehinde</p>
                    <span>Admin</span>
                </div>
            </div>
            <div className={style.group_details}>
                <h3>Group details</h3>
                <div>
                    <p>Group name</p>
                    <input onChange={handleOnchange} type="text" value={groupData.group_name} placeholder='Group name' name='group_name' required />
                </div>
                <div>
                    <p>Group description</p>
                    <input onChange={handleOnchange} type="text" value={groupData.group_description} placeholder='Group description' name='group_description' required />
                </div>
                <div>
                    <p>Group image</p>
                    <input onChange={handleOnchange} type="file" placeholder='Group image' name='group_img' required />
                </div>
                <div>
                    <p>Group privacy</p>
                    <select onChange={handleOnchange} value={groupData.group_privacy} name="group_privacy" id="group_privacy" required>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <button>Create</button>
            </div>
        </div>
    )
}

export default CreateGroupLeftbar

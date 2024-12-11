import React from 'react';
import style from './CreateGroupLeftbar.module.css';
import Image from 'next/image';

const CreateGroupLeftbar = () => {
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
                    <input type="text" placeholder='Group name' name='group_name' required />
                </div>
                <div>
                    <p>Group description</p>
                    <input type="text" placeholder='Group description' name='group_description' required />
                </div>
                <div>
                    <p>Group image</p>
                    <input type="file" placeholder='Group image' name='group_image' required />
                </div>
                <div>
                    <p>Group privacy</p>
                    <select name="group_privacy" id="group_privacy" required>
                        <option value="public">Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
                <div>
                    <p>Group category</p>
                    <select name="group_category" id="group_category" required>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Music">Music</option>
                        <option value="Science">Science</option>
                        <option value="Politics">Politics</option>
                        <option value="Business">Business</option>
                        <option value="Technology">Technology</option>
                        <option value="Health">Health</option>
                        <option value="Travel">Travel</option>
                        <option value="Food">Food</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Gaming">Gaming</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div>
                    <p>Group members</p>
                    <input type="text" placeholder='Group members' name='group_members' required />
                </div>
                <div>
                    <p>Group tags</p>
                    <input type="text" placeholder='Group tags' name='group_tags' required />
                </div>
                <div>
                    <p>Group location</p>
                    <input type="text" placeholder='Group location' name='group_location' required />
                </div>
                <button>Create</button>
            </div>
        </div>
    )
}

export default CreateGroupLeftbar

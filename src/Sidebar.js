import React from 'react'
import "./Sidebar.css"
import { Avatar } from "@material-ui/core";
import sidebar_top_image from "./assets/luke-chesser-pJadQetzTkI-unsplash.jpg"
import { selectUser} from "./features/userSlice";
import { useSelector} from "react-redux";


function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem =(topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )


    return (
        <div className='sidebar'>
            <div className="sidebar__top">
                <img src={sidebar_top_image} alt=""/>
                <Avatar className="sidebar__avatar" >
                    {user.email[0] + user.email[1]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>who viewed</p>
                    <p className="sidebar__statNumber">3000</p>

                </div>
                <div className="sidebar__stat">
                    <p>views on post</p>
                    <p className="sidebar__statNumber">2300</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('ruby on rails')}
                {recentItem('programming')}
                {recentItem('javascript')}
                {recentItem('design')}
                {recentItem('software engineering')}
            </div>
            
        </div>
    )
}

export default Sidebar

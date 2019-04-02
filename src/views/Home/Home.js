import React, { Component } from 'react';
import './Home.css';

export default class Home extends Component{

    constructor(prop){
        super(prop);
        this.state={
            
        }
    };

    render(){
        return (
            <div>
                <div className="fixed-bar">
                    <div className="musictitle">音乐播放器</div>
                    <ul className="tabUl">
                        <li >
                            <router-link  to="/index/recommend">精选歌曲</router-link>
                        </li>
                        <li >
                            <router-link  to="/index/hotmusic">热歌榜</router-link>
                        </li>
                        <li >
                            <router-link  to="/index/songList">推荐歌单</router-link>
                        </li>
                    </ul>
                </div>


            </div>
        )
    }
}
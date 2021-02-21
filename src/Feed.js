import './Header.css';
import React from 'react';
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post
                profilePic="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                message="works"
                timestamp="some timestamp"
                username="some username"
                image="https://t4.ftcdn.net/jpg/03/02/74/89/360_F_302748918_Vs76DTDodjhhkYuCEFahu0LcoDZkBuaW.jpg"
            />
            <Post
                profilePic="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
                message="works"
                timestamp="some timestamp"
                username="some username"
            />
        </div>
    );
}

export default Feed;

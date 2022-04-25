import React from 'react';
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostReacts = styled.div`
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
    margin-left:25px;
    margin-bottom:20px;

    & button{
        border:none;
        background-color:transparent;
    }

    & button:hover{
        cursor:pointer;
    }

`

const Reactions = ({ reactions, postId }) => {
    const likes = reactions.filter(el => el.type === 'like');
    const loves = reactions.filter(el => el.type === 'love');
    const wows = reactions.filter(el => el.type === 'wow');
    const unlikes = reactions.filter(el => el.type === 'unlike');

    return (
        <PostReacts>
            <div>
                <b>{likes.length}</b>
                <button><FontAwesomeIcon icon={faThumbsUp} style={{ color: '#3DA1FF' }} size="2x" /></button>
            </div>
            <div>
                <b>{loves.length}</b>
                <button><FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} size="2x" /></button>
            </div>
            <div>
                <b>{wows.length}</b>
                <button><FontAwesomeIcon icon={faFaceSurprise} style={{ color: '#F7BF47' }} size="2x" /></button>
            </div>
            <div>
                <b>{unlikes.length}</b>
                <button><FontAwesomeIcon icon={faThumbsDown} style={{ color: '#3DA1FF' }} size="2x" /></button>
            </div>
        </PostReacts>
    );
}

export default Reactions;


import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faFaceSurprise } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    border:1px solid lightgray;
    margin-left:6%;
    margin-top:30px;
    width:85%;
    background-color:#FCFCFC;
    border-radius:8px;
    box-shadow:3px 2px 3px lightgray;

`
const PostInfo = styled.div`
    margin:10px;
    display:flex;
    justify-content:space-between;
    color:#3C3D3D;

    & div{
        display:flex;
        flex-direction:row;
    }

    & img{
        width:50px;
        height:50px;
        border-radius:60%;
    }
    & h3{
        margin-left:8px;
    }
`
const PostDetail = styled.div`
    margin-left:10px;
    padding-top:2%;
    width:95%;
    border-top:1px solid #B6B3B3;

    & div{
        margin:10px;
        display:flex;
        padding:10px;
        justify-content:space-between;
        font-size:16px;
    }

    & img{
        width:20%;
    }

    & p {
        margin-left:10px;
    }
`
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
const Post = ({ post }) => {
    return (
        <Wrapper>
            <PostInfo>
                <div>
                    <img src={require("../../images/profile.jpg")} alt="user-profile" />
                    <h3>{post.owner}</h3>
                </div>
                <h6>3 Days Ago</h6>
            </PostInfo>

            <PostDetail>
                <h2>{post.title}</h2>
                <div>
                    <img src={post.image} alt="post" />
                    <p>
                        {post.description}
                    </p>
                </div>
            </PostDetail>

            <PostReacts>
                <div>
                    <b>10</b>
                    <button><FontAwesomeIcon icon={faThumbsUp} style={{ color: '#3DA1FF' }} size="2x" /></button>
                </div>
                <div>
                    <b>23</b>
                    <button><FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} size="2x" /></button>
                </div>
                <div>
                    <b>20</b>
                    <button><FontAwesomeIcon icon={faFaceSurprise} style={{ color: '#F7BF47' }} size="2x" /></button>
                </div>
                <div>
                    <b>1</b>
                    <button><FontAwesomeIcon icon={faThumbsDown} style={{ color: '#3DA1FF' }} size="2x" /></button>
                </div>
            </PostReacts>
        </Wrapper>
    );
}

export default Post;
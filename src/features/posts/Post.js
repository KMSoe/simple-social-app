import styled from "styled-components";
import { formatDistanceToNow } from 'date-fns';
import Reactions from '../../components/Reactions';

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
    align-items: center;
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

const Post = ({ post }) => {
    return (
        <Wrapper>
            <PostInfo>
                <div className="d-flex align-items-center">
                    <img src={require("../../images/profile.jpg")} alt={post.owner} className="me-2" />
                    <h5 className="h6">{post.owner}</h5>
                </div>
                <small>{formatDistanceToNow(new Date(post.created_at))}</small>
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
            <Reactions reactions={post.reactions} postId={post.id} />
            
        </Wrapper>
    );
}

export default Post;
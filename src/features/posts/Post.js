import styled from "styled-components";
import { formatDistanceToNow } from 'date-fns';
import Reactions from '../../components/Reactions';
import { Link} from "react-router-dom";
import { Row, Col } from "react-bootstrap";


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

            <hr />
            
            <h2 className="m-3">{post.title}</h2>
            <Row className="mt-4">
                <Col xs={12} md={4}>
                    <img src={post.image} alt="post" style={{width:"80%",marginLeft:"20px"}}/>
                </Col>

                <Col xs={12} md={8}>
                    <p>
                        {post.description}
                    </p>
                    <Link to={`/posts/${post.id}`} 
                      className="float-start"
                      style={{textDecoration:"none"}}
                      >
                        See More...
                    </Link>   
                </Col>
            </Row>

            <Reactions reactions={post.reactions} postId={post.id}/>
            
        </Wrapper>
    );
}

export default Post;
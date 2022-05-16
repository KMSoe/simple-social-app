import Post from "./Post";
import { Container, Row, Col } from 'react-bootstrap';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts } from './postsSlice';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button`
    position: fixed;
    bottom: 20px;
    background-color:#F9F8F8;
    border:1px solid transparent;
    border-radius:50%;
    padding:20px;

    &:hover{
        background-color:#EDEAEA;
        border:1px solid #E3E3E3;
    }
`

const PostList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectAllPosts);
    const postStatus = useSelector(state => state.posts.status);

    useEffect(() => {
        if (postStatus === 'idle') {
            dispatch(fetchPosts());
        }
    }, [postStatus, dispatch]);

    let content;
    content = (
        posts.map(el => <Post key={el.id} post={el} />)
    )

    return (
        <Container>
            <Row>
                <Col md={11}>
                    {content}
                </Col>
                <Col md={1} >
                    <Button>
                        <Link to="/addpost">
                            <img src={require("../../images/plus.png")} 
                                    alt="plusIcon"        
                            /> 
                        </Link>                       
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PostList;
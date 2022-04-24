import Post from "./Post";
import styled from "styled-components";
import { Container } from 'react-bootstrap';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts } from './postsSlice';

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
            {content}
        </Container>
    );
}

export default PostList;
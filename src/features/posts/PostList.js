import Post from "./Post";
import styled from "styled-components"

const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const PostList = () => {
    return (
        <Wrapper>
            <Post />
            <Post />
            <Post />
        </Wrapper>
      );
}
 
export default PostList;
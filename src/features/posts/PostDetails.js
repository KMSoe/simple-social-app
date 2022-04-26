import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import CommentList from '../comments/CommentList';
import { formatDistanceToNow } from 'date-fns';
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import { selectPostById } from './postsSlice'

const PostDetails = () => {
    const { id } = useParams();
    //console.log(id)
    const post = useSelector(state => selectPostById(state.posts,id))
    return ( 
        <Container>
            <Row>
                <Col sm={8}>
                    <h1>{post.title}</h1>
                </Col>
                <Col sm={4}>
                    {formatDistanceToNow(new Date(post.created_at))}
                </Col>
            </Row>
            <Row className="justify-content-center mt-2" >
                 <Col xs={12} sm={12} md={4}>
                     <img 
                        src={post.image} 
                        alt='post'
                        className='img-fluid'
                        style={{height:"80%"}}
                        />
                </Col>
            </Row>
            <p className='m-1'>
                {post.description}
            </p>
            <Row className='mt-4 mb-3'>
                <Col md={4} sm={6}> 
                    <b>Author: {post.owner}</b>
                </Col>
            </Row>
            <hr />
            <CommentList />
        </Container>
     );
}
 
export default PostDetails;
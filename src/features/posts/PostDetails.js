import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import CommentList from '../comments/CommentList';

const PostDetails = () => {
    return ( 
        <Container>
            <Row>
                <Col sm={8}>
                    <h1>Title</h1>
                </Col>
                <Col sm={4}>
                    3 Days Ago
                </Col>
            </Row>
            <Row className="justify-content-center mt-2" >
                 <Col xs={12} sm={12} md={4}>
                     <img 
                        src={require("../../images/profile.jpg")} 
                        alt='post'
                        className='img-fluid'
                        style={{height:"80%"}}
                        />
                </Col>
            </Row>
            <p className='m-1'>
                In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of a document or
                In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of a document or 
                In publishing and graphic design, Lorem ipsum is a
                placeholder text commonly used to demonstrate the visual form of a document or  
            </p>
            <Row className='mt-4 mb-3'>
                <Col md={4} sm={6}> 
                    <b>Author: John</b>
                </Col>
            </Row>
            <hr />
            <CommentList />
        </Container>
     );
}
 
export default PostDetails;
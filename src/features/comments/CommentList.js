import { Container, Col, Row, Button, Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Comment from './Comment';

const CommentList = () => {
    return (
        <Container>
          <h3>Responses</h3>
          <Card  className='p-3 mt-3 bg-light'>
            <Row>
              <Col md={1} xs={6}>
                <img src={require("../../images/profile.jpg")} //user profile picture
                    alt="post-owner" 
                    style={{width:"50px",height:"50px",borderRadius:"60%"}} 
                />
              </Col>
              <Col md={11} xs={6}>
                <h6>Kelly (user name)</h6> 
                <p style={{color:"grey"}}>4:32 PM (current time)</p>
              </Col>
            </Row>   

            <Row>
              <Form>
                <Col md={8} sm={8}>
                  <Form.Group className='mb-3' controlId='comment'>
                    <Form.Control type="text" placeholder="Write a comment..." />
                  </Form.Group>
                </Col>

                <Col md={4} sm={4} className='float-end mr-3'>
                  <Button variant="primary" type="submit">
                      Submit
                  </Button>
                </Col>
              </Form>
            </Row>
          </Card>

          <Comment />
          <Comment /> 
          
        </Container>
      );
}
 
export default CommentList;
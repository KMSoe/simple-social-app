import { Container, Col, Row, Card} from 'react-bootstrap';

const Comment = () => {
    return ( 
        <Container>
            <Card className='mt-3 p-3 b-0' >
            <Row>
              <Col md={1} xs={6}>
                <img src={require("../../images/profile.jpg")} //user profile picture
                    alt="post-owner" 
                    style={{width:"50px",height:"50px",borderRadius:"60%"}} 
                />
              </Col>
              <Col md={8} xs={6}>
                <h6>John (other user)</h6> 
                <p style={{color:"grey"}}>4 days Ago</p>
              </Col>
              <Col md={3}>
              </Col>
            </Row> 
            <p>Nice article. What about design? There's far more to engineering than coding.</p> 
            </Card>
            
        </Container>
      );
}
 
export default Comment;
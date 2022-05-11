import { Container, Col, Row, Card} from 'react-bootstrap';
import { formatDistanceToNow } from 'date-fns';

const Comment = ({comment}) => {

    return ( 
        <Container>
            <Card className='mt-3 p-3 b-0 mb-2' >
            <Row>
              <Col md={1} xs={6}>
                <img src={comment.user.profile ? require(`../../images/${comment.user.profile}`) : require("../../images/profile.jpg")}
                    alt="post-owner" 
                    style={{width:"50px",height:"50px",borderRadius:"60%"}} 
                />
              </Col>
              <Col md={8} xs={6}>
                <h6>{comment.user.name}</h6> 
                <p style={{color:"grey"}}>
                  {formatDistanceToNow(new Date(comment.created_at))}
                </p>
              </Col>
              <Col md={3}>
              </Col>
            </Row> 
            <p>{comment.comment_text}</p> 
            </Card>
            
        </Container>
      );
}
 
export default Comment;
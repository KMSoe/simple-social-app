import { Container, Col, Row, Button, Card} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Comment from './Comment';
import { fetchComments,selectComments } from './commentsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { commentAdded } from './commentsSlice';
import { useForm } from "react-hook-form";
//
const CommentList = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const comments = useSelector(selectComments).filter(el=>el.post_id == id);
  const {register, handleSubmit, formState:{errors}} = useForm();
  console.log(errors)
  const onSubmit = data => console.log(data);

  useEffect(() => {  
          dispatch(fetchComments(id));
  }, [dispatch, id]);

  
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
                <h6>{comments.name}</h6> 
                <p style={{color:"grey"}}>4:32 PM (current time)</p>
              </Col>
            </Row>   

            <Row>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Col md={8} sm={8}>
                  <Form.Group className='mb-3' controlId='comment'>
                    <Form.Control 
                      type="text" 
                      placeholder="Write a comment..." 
                      {...register("newComment", {required:true})}
                      />
                      {errors.newComment && <p>This is required</p>}
                  </Form.Group>
                </Col>

                <Col md={4} sm={4} className='float-end mr-3'>
                { <Button variant="primary" 
                          type="submit"
                          disabled={errors.newComment}
                          >
                      Submit
                  </Button>
                }
                </Col>
              </Form>
            </Row>
          </Card>

          <h3 className='mt-3'>Comments ({comments.length})</h3>
          {  
            comments && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
          }
        </Container>
      );
}
 
export default CommentList;


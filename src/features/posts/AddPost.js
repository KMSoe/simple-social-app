import { Container , Form, Card ,Row, Col, Button} from "react-bootstrap";
const AddPost = () => {
    return ( 
        <Container>
            <h1 style={{textAlign:"center"}}>Create New Post</h1>   

            <Card className='mt-3 p-3 b-0' style={{backgroundColor:"#F8F9FA"}} >
                <Form className="m-5">
                <Row>
                    <Col md={1} xs={6}>
                    <img src={require("../../images/profile.jpg")} //user profile picture
                        alt="post-owner" 
                        style={{width:"50px",height:"50px",borderRadius:"60%"}} 
                    />
                    </Col>

                    <Col md={8} xs={6}>
                        <h6>John</h6> 
                    </Col>
                    <Col md={3} />
                </Row> 
                <Form.Label className="mt-3">Title</Form.Label>
                <Form.Control type="text" 
                              placeholder="Title" 
                              size="lg"
                              required 
                />
                <Form.Label className="mt-3">Post Main Image</Form.Label>
                <Form.Control type="file" 
                        id="addimg"
                        accept="image/png, image/jpeg, image/jpg"
                />

                <Form.Label className="mt-3">Tell Your Story</Form.Label>
                <Form.Control as="textarea" 
                    rows="4"
                    required
                />
                <Form.Label className="mt-3">Category</Form.Label>
                <Form.Control as="select" >
                    <option value="tips">Tips</option>
                    <option value="technology">Technology</option>
                    <option value="science">Science</option>
                    <option value="coding_interview">Coding Interviews</option>
                    <option value="health">Health</option>
                    <option value="frontend">Frontend Development</option>
                    <option value="backend">Backend Development</option>
                    <option value="ai_robotic">AI and Robotic</option>
                    <option value="research">Research</option>
                    <option value="networking">Networking</option>
                    <option value="software">Software</option>
                    <option value="blockchain">IoT and Blockchain</option>
                </Form.Control>
                <Button variant="primary" type="submit" className="mt-4 float-end">
                    Submit
                </Button>
                </Form>
            </Card>
        </Container>
     );
}
 
export default AddPost;
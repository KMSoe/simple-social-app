import { Container , Form, Card ,Row, Col, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    picture:yup
        .mixed()
        .test("type", "We only support jpeg, jpg, png file formats", function (value){
            return value[0] && value && (   
                value[0].type === 'image/jpeg' ||
                value[0].type === 'image/jpg' ||
                value[0].type === 'iamge/png' 
            )
            
        })
})

const AddPost = () => {
   const {register, handleSubmit , formState:{errors, isValid} } = useForm({
        mode: 'onChange',
        resolver:yupResolver(schema)
        });
   const handleRegister = data => console.log(data)
    return ( 
        <Container>
            <h1 style={{textAlign:"center"}}>Create New Post</h1>   

            <Card className='mt-3 p-3 b-0' style={{backgroundColor:"#F8F9FA"}} >
                <Form className="m-5" onSubmit={handleSubmit(handleRegister)}>
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
                <Form.Label className="mt-3" htmlFor="title">Title *</Form.Label>
                <Form.Control type="text" 
                              placeholder="Title" 
                              size="lg"
                              id="title"
                              {...register("title", {required:true})}                   
                />
                 {errors.title && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                <Form.Label className="mt-3" htmlFor="picture">Post Main Image</Form.Label>
                <Form.Control type="file" 
                        id="picture"
                       {...register("picture")}
                />
                {errors.picture && <p style={{color:"red",marginTop:"20px"}}>{errors.picture.message}</p>}
                <Form.Label className="mt-3" htmlFor="description">Tell Your Story *</Form.Label>
                <Form.Control as="textarea" 
                    rows="4"
                    id="description"
                    {...register("description", {required:true})}
                
                />
                 {errors.description && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                <Form.Label className="mt-3">Category *</Form.Label>
                <Form.Control as="select"
                              {...register("category", {required:true})}
                >
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
                {errors.category && <p style={{color:"red",marginTop:"20px"}}>This is required</p>}
                {errors && <h6 style={{color :"red",marginTop:"30px"}}>
                            {console.log(errors)}
                          </h6>}

                <Button variant="primary" 
                        type="submit" 
                        className="mt-4 float-end"
                        disabled={ !isValid}
                        >
                    Submit
                </Button>
                </Form>
            </Card>
        </Container>
     );
}
 
export default AddPost;
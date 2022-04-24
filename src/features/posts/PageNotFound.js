import {Row,Col} from 'react-bootstrap';
const PageNotFound = () => {
    return ( 
        <div>
            <Row className="justify-content-center mt-2" >
                 <Col xs={12} sm={12} md={4}>
                 <img src={require("../../images/notfound.jpg")} 
                    alt="404 vector"
                    className='img-fluid'
                    style={{height:"80%"}}
                    />
                </Col>
            </Row>
            
        </div>
     );
}
 
export default PageNotFound;
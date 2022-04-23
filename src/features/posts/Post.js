import styled from "styled-components";
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import { faFaceSurprise} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Wrapper = styled.div`
    border:1px solid lightgray;
    margin-top:30px;
    width:65%;
    background-color:#FEFEFE;
    border-radius:8px;
    box-shadow:3px 2px 3px lightgray;

`
const PostInfo = styled.div`
    margin:10px;
    display:flex;
    justify-content:space-between;
    color:#3C3D3D;

    & div{
        display:flex;
        flex-direction:row;
    }

    & img{
        width:50px;
        height:50px;
        border-radius:60%;
    }
    & h3{
        margin-left:8px;
    }
`
const PostDetail = styled.div`
    margin-left:20px;
    width:95%;
    border-top:1px solid #A4A6A7;

    & div{
        margin:10px;
        display:flex;
        padding:10px;
        justify-content:space-between;
        font-size:18px;
    }

    & img{
        width:20%;
    }

    & p {
        margin-left:10px;
    }
`
const PostReacts = styled.div`
    display:flex;
    justify-content:flex-end;
    flex-direction:row;
    margin-left:20px;
    margin-bottom:20px;

    & button{
        border:none;
        background-color:transparent;
    }

`
const Post = () => {
    return (   
        <Wrapper>
            <PostInfo>
                    <div>
                        <img src={require("../../images/profile.jpg")} alt="user-profile"/>
                        <h3>User Name</h3>
                    </div>
                    <h3>3 Days Ago</h3>
            </PostInfo>

            <PostDetail>
                <h1>Title</h1>
                <div>
                    <img src={require("../../images/egProfile.jpeg")} alt="post"/>
                    <p>
                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form 
                    </p>
                </div>
            </PostDetail>

            <PostReacts>
                <div>
                    <b>23</b>
                    <button><FontAwesomeIcon icon={faHeart} style={{ color: 'red' }} size="2x"/></button>
                </div>
                <div>
                    <b>23</b>
                    <button><FontAwesomeIcon icon={faFaceSurprise} style={{color: 'yellow'}} size="2x"/></button>
                </div>
            </PostReacts>
        </Wrapper>
     );
}
 
export default Post;
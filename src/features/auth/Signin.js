import { createRef } from 'react';
import { Container, Form, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin } from './authSlice';

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let email = createRef();
    let password = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();

      dispatch(signin({ email: email.current.value, password: password.current.value }))
      .then(({payload}) => {
          if(payload.success) navigate('/');
      })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">Email</label>
                    <FormControl type="email" id="email" ref={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password">Password</label>
                    <FormControl type="password" id="password" ref={password} />
                </div>
                <button type="submit" className="btn btn-primary">Signin</button>

            </Form>
        </Container>
    )
}

export default Signin;
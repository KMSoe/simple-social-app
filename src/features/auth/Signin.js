import { Container, Form, FormControl, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signin, clearErrors } from './authSlice';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const Signin = () => {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({ mode: 'onChange' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signInErrors = useSelector(state => state.auth.signInErrors);

    useEffect(() => {
        dispatch(clearErrors());
    }, []);

    const onSubmit = (data) => {
        dispatch(signin({ email: data.email, password: data.password }))
            .then(({ payload }) => {
                if (payload.success) navigate('/');
            })
    }

    return (
        <Container style={{ paddingTop: '60px' }}>
            <h3 className="text-center">Welcome Back</h3>
            {signInErrors.map((err, index) => <Alert key={index} variant='danger' className="text-center">{err}</Alert>)}

            <Row className="justify-content-center">
                <Col md={8} xl={6}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <FormControl type="email" id="email" {...register('email', { required: true })} />
                            {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <FormControl type="password" id="password" {...register('password', { required: true })} />
                            {errors.password?.type === 'required' && <span className="text-danger">Password is required</span>}
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid}>Signin</button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signin;
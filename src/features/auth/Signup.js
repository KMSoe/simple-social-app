import { Container, Form, FormControl, Row, Col, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup, clearErrors } from './authSlice';
import { useForm } from "react-hook-form";
import { useEffect } from 'react';

const Signup = () => {
    const { register, handleSubmit, formState: { errors, isValid, isDirty } } = useForm({ mode: 'onChange' });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signUpErrors = useSelector(state => state.auth.signUpErrors);

    useEffect(() => {
        dispatch(clearErrors());
    }, []);

    const onSubmit = (data) => {
        console.log(data);
        dispatch(signup(data))
            .then(({ payload }) => {
                if (payload.success) navigate('/');
            })
    }

    return (
        <Container style={{ paddingTop: '60px' }}>
            <h3 className="text-center">Welcome</h3>
            {signUpErrors.map((err, index) => <Alert key={index} variant='danger' className="text-center">{err}</Alert>)}

            <Row className="justify-content-center">
                <Col md={8} xl={6}>
                    <Form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <div className="mb-3">
                            <label htmlFor="name">Name</label>
                            <FormControl type="text" id="name" {...register('name', { required: true })} />
                            {errors.name?.type === 'required' && <span className="text-danger">Name is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email</label>
                            <FormControl type="email" id="email" {...register('email', { required: true })} />
                            {errors.email?.type === 'required' && <span className="text-danger">Email is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password">Password</label>
                            <FormControl type="password" id="password" {...register('password', { required: true, minLength: 8 })} />
                            {errors.password?.type === 'required' && <span className="text-danger">Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className="text-danger">Password must be at least 8 characters</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <FormControl type="password" id="confirmPassword" {...register('confirmPassword', { required: true, minLength: 8 })} />
                            {errors.password?.type === 'required' && <span className="text-danger">Password is required</span>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="image">Profile Image</label>
                            <FormControl type="file" id="image" {...register('image')} />
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={!isDirty || !isValid}>Signup</button>

                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Signup;
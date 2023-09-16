import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {userSchema} from "../validations/UserValidations";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useNavigate} from 'react-router-dom';

function MyForm(){

    const navigate = useNavigate();
    const {
        register, handleSubmit, formState : {errors}, 
    } = useForm ({
        resolver: yupResolver(userSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
        navigate('/kpop');
    };

    return (
        <div className = "signup-container">
            <Form onSubmit = {handleSubmit(onSubmit)}>
                <Form.Group className = "mb-3" controlId = "formBasicFaveGroup">
                <Form.Control type = "text" placeholder = "Favorite KPOP Group" {...register("favegroup")} />
                <p className = "error">{errors.favegroup?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicBias">
                <Form.Control type = "text" placeholder = "Bias" {...register("bias")} />
                <p className = "error">{errors.bias?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicBiasWrecker">
                <Form.Control type = "text" placeholder = "Bias Wrecker" {...register("biaswrecker")} />
                <p className = "error">{errors.biaswrecker?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicFaveAlbum">
                <Form.Control type = "text" placeholder = "Favorite Album" {...register("favealbum")} />
                <p className = "error">{errors.age?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicFaveTitleTrackr">
                <Form.Control type = "text" placeholder = "Favorite Ttile Track" {...register("favett")} />
                <p className = "error">{errors.favett?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicFaveBside">
                <Form.Control type = "text" placeholder = "Favorite B-Side" {...register("favebside")} />
                <p className = "error">{errors.favebside?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicFaveEra">
                <Form.Control type = "text" placeholder = "Favorite Era" {...register("faveera")} />
                <p className = "error">{errors.faveera?.message}</p>
                </Form.Group>

                <Form.Group className = "mb-3" controlId = "formBasicFaveComeback">
                <Form.Control type = "text" placeholder = "Favorite Comeback" {...register("favecomeback")} />
                <p className = "error">{errors.favecomeback?.message}</p>
                </Form.Group>

                <Button className = "signup-btn" type = "submit">Submit</Button>
            </Form>
        </div>
    );
}

export default MyForm;
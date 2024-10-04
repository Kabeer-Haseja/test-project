import React from 'react';
import { useForm } from 'react-hook-form';

const Step2 = ({ nextStep, formData, setFormData }) => {
    const { register, handleSubmit, errors } = useForm({ defaultValues: formData });

    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("lastName", {required: true})} placeholder="Last Name"/>
            {errors?.lastName && <p>This field is required</p>}
            <button type="submit">Next</button>
        </form>
    );
};

export default Step2;

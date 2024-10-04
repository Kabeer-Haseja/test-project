import React from 'react';
import { useForm } from 'react-hook-form';

const Step1 = ({ nextStep, formData, setFormData }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: formData });

    const onSubmit = (data) => {
        setFormData({ ...formData, ...data });
        nextStep();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("firstName", { required: true })} placeholder="First Name" />
            {errors.firstName && <p>This field is required</p>}
            <button type="submit">Next</button>
        </form>
    );
};

export default Step1;

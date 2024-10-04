import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const nextStep = () => {
        setStep(step + 1);
    };

    return (
        <div>
            {step === 1 && <Step1 nextStep={nextStep} formData={formData} setFormData={setFormData} />}
            {step === 2 && <Step2 nextStep={nextStep} formData={formData} setFormData={setFormData} />}
            {step === 3 && <Step3 formData={formData} />}
        </div>
    );
};

export default MultiStepForm;

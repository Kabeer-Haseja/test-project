import React from 'react';

const Step3 = ({ formData }) => {
    return (
        <div>
            <h3>Review Data</h3>
            <p>First Name: {formData.firstName}</p>
            <p>Last Name: {formData.lastName}</p>
        </div>
    );
};

export default Step3;

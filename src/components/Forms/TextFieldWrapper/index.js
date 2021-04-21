import React from 'react'
import { TextField } from '@material-ui/core'
import { useField } from 'formik'

const TextFieldWrapper = ({
    address,
    ...otherProps
}) => {
    const [field, mata] = useField(address);

    const configTextField = {
        ...field, 
        ...otherProps,
        fullWidth: true,
        variant: 'outlined'
    };

    if(mata && mata.touched && mata.error) {
        configTextField.error = true;
        configTextField.helperText = mata.error;
    }

    return (
        <TextField {...configTextField} />
    )
}

export default TextFieldWrapper;
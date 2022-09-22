import { useFormikContext } from 'formik';

import AppDatePicker from '../AppDatePicker';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';


const FormField = ({ name, type="textInput", ...otherProps }) => {
    
    const {setFieldTouched, setFieldValue, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            {
                type == "datePicker"
                ?
                <AppDatePicker
                    // onBlur={setFieldTouched(name)}
                    onDateChange={(value) => setFieldValue(name, value)}
                />
                :
                <AppTextInput
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={handleChange(name)}
                    { ...otherProps }
                />
            }
            <ErrorMessage error={errors[name]} visible={touched[name]} />
        </>
    );
}

export default FormField;
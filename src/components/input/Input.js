import InputMask from 'react-input-mask';
import classes from './Input.module.scss'


const Input = props => {
    return (
        <div>
            <InputMask 
                className={classes.inputMask}
                mask='+7(999)999-99-99'
                alwaysShowMask={true}
            />
        </div>
            
    )
}
export default Input
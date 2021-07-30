import InputMask from 'react-input-mask';
import classes from './Input.module.scss'

const Input = props => {

    let inputClass = [classes.inputMask]
    if(props.access === false) {
        inputClass.push(classes['fail'])
    }
    
    return (
        <div>
            <InputMask 
                className={inputClass.join(' ')}
                mask='+7(999)999-99-99'
                alwaysShowMask={true}
                value={props.value}
            />
        </div>   
    )
}
export default Input
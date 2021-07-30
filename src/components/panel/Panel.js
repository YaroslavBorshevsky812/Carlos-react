import classes from './Panel.module.scss'
import Input from '../input/Input'
import Grid from './grid/Grid'
import { useState } from 'react'
import FinalPanel from './FinalPanel'
import ReactDOM from 'react-dom';

const Panel = props => {
    const [panelBtns] = useState([
        {value: '1'},
        {value: '2'},
        {value: '3'},
        {value: '4'},
        {value: '5'},
        {value: '6'},
        {value: '7'},
        {value: '8'},
        {value: '9'},
        {value: 'стереть', span: true},
        {value: '0'},
    ])
    const [phoneNumber, setPhoneNumber] = useState('')
    const [rightNumber, setRightNumber] = useState(true)
    const [checkboxActive, setCheckboxActive] = useState(false)

    function btnsHendler(btn) {
        if(btn === 'стереть') {
            setPhoneNumber(phoneNumber.substr(0, phoneNumber.length - 1))
        } else {
            if(phoneNumber.length < 10) {
                setPhoneNumber(phoneNumber + btn)
            } 
        }
        if(phoneNumber.length === 10) {
            console.log(phoneNumber)
        }
    }

    function inputHendler(event) {
        setPhoneNumber(event.target.value)
    }

    function checkBoxHendler() {
        setCheckboxActive(!checkboxActive)
    }

    function confirmAccess() {
        if(phoneNumber.length < 9) {
            setRightNumber(false)
            ReactDOM.render((
                <div className={classes.failNumber}>
                    <h3 className={classes.failNumber_text}>Неверно введен номер</h3>
                </div>
            ), document.getElementById('fail'))
        } else {
            if(checkboxActive === true) {
                const finalPanel = (
                    <FinalPanel/>
                )
                ReactDOM.render(finalPanel, document.getElementById('panel'))
            }  
        }
    }

    return (
        <div className={classes.panel}>
            <div id='panel' className={classes.panel_inner}>
                    <h3 className={classes.panel_title}>Введите ваш номер мобильного телефона</h3>
                    <Input
                        access={rightNumber}
                        value={phoneNumber}
                        onChange={inputHendler.bind(this)}
                    />
                    <h4 className={classes.panel_subtitle}>и с Вами свяжется наш менеждер для дальнейшей консультации</h4>
                    <Grid
                        btns={panelBtns}
                        panelBtns={btnsHendler.bind(this)}
                    />
                    <div id='fail'>
                        <label className={classes.checkbox}>
                            <input className={classes.checkbox_input} type="checkbox" onChange={checkBoxHendler.bind(this)}/>
                            <span  className={classes.checkbox_text}>Согласие на обработку персональных данных</span>
                        </label>
                    </div>
                    
                    <button onClick={confirmAccess.bind(this)} className={classes.pannel_btn}>подтвердите номер</button>
            </div>
        </div>
    )
}


export default Panel
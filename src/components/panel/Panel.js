import classes from './Panel.module.scss'
import Input from '../input/Input'
import Grid from './grid/Grid'

const Panel = props => {
    return (
        <section className={classes.panel}>
            <div className={classes.panel_inner}>
                    <h3 className={classes.panel_title}>Введите ваш номер мобильного телефона</h3>
                    <Input/>
                    <h4 className={classes.panel_subtitle}>и с Вами свяжется наш менеждер для дальнейшей консультации</h4>
                    <Grid/>
                    <label className={classes.checkbox}>
                        <input className={classes.checkbox_input} type="checkbox"/>
                        <span  className={classes.checkbox_text}>Согласие на обработку персональных данных</span>
                    </label>
                    <button className={classes.pannel_btn}>подтвердите номер</button>
            </div>
        </section>
    )
}

export default Panel
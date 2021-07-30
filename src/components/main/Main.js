import classes from './Main.module.scss'
import Panel from '../panel/Panel'
import QR from '../../images/main/qr.png'
const Main = props => {
    return (
        <section className={classes.main}>
            <div className={classes.main_inner}>
                <button className={classes.main_exit}>x</button>
                <div className={classes.main_info}>
                    <span className={classes.main_info_text}>сканируйте qr код для получения дополнительной информации</span>
                    <img className={classes.qr} src={QR}/>
                </div>
            </div>
            <Panel/>
        </section>
    )
}

export default Main
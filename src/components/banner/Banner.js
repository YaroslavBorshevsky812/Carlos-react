import classes from './Banner.module.scss'
import QR from '../../images/banner/qr.png'


const Banner = props => {
    return (
        <div className={classes.banner}>
            <div className={classes.banner_inner}>
                <h3 className={classes.banner_title}>
                    исполните мечту вашего малыша!
                </h3>
                <h3 className={classes.banner_title}>
                    Подарите ему собаку!
                </h3>
                    <img className={classes.qr} src={QR}/>
                <h5 className={classes.banner_subtitle}>
                    Сканируйте QR-код или нажмите ОК
                </h5>
                <button className={classes.banner_btn}>ok</button>
            </div>
            
        </div>
    )
}

export default Banner
import classes from './FinalPanel.module.scss'

const FinalPanel = props => {
    return (
        <div className={classes.finaPanel}>
            <h2 className={classes.finalPanel_title}>Заявка принята</h2>
            <h4 className={classes.finalPanel_subtitle}>Держите телефон под рукой. Скоро с Вами свяжется наш менеджер.</h4>
        </div>
    )
}

export default FinalPanel
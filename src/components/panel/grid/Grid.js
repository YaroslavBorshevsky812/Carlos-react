import classes from './Grid.module.scss'

const Grid = props => {
    return (
        <div className={classes.gridWrapper}>
            {props.btns.map((btn) => {
                // i add this only because of a button (стереть)
                let btnClass = [classes.numBtn]
                if(btn.span === true) {
                    btnClass = [classes.numBtn_two]
                }
                return (
                    <button onClick={() => props.panelBtns(btn.value)} className={btnClass} key={btn.value}>{btn.value}</button>
                )
            })}
        </div>
    )
}

export default Grid
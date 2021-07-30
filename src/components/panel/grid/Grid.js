import classes from './Grid.module.scss'

const Grid = props => {
    return (
        <div className={classes.gridWrapper}>
            <button className={classes.numBtn}>1</button>
            <button className={classes.numBtn}>2</button>
            <button className={classes.numBtn}>3</button>
            <button className={classes.numBtn}>4</button>
            <button className={classes.numBtn}>5</button>
            <button className={classes.numBtn}>6</button>
            <button className={classes.numBtn}>7</button>
            <button className={classes.numBtn}>8</button>
            <button className={classes.numBtn}>9</button>
            <button className={classes.numBtn_two}>стереть</button>
            <button className={classes.numBtn}>0</button>
        </div>
    )
}

export default Grid
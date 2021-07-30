import classes from './Intro.module.scss'
import Banner from '../banner/Banner'

const Intro = props => {
    return (
        <section className={classes.intro}>
            <Banner/>
        </section>
    )
}

export default Intro
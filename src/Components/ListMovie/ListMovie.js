import '../../Assets/css/listmovie.css'

// Components
import Tv from './Tv'
import Theater from './Theater'

export default function ListMovie() {
    return(
        <section className="row" id="movie-content">
            <Theater />
            <Tv />
        </section>
    )
}
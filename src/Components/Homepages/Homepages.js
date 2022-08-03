import BannerComponent from "../Banner/Banner"
import FooterCompoennt from "../Footer/Footer"
import ListMovieComponent from "../ListMovie/ListMovie"

function Homepages() {
    return (
        <section className="container-fluid" id="app">
            <BannerComponent />
            <ListMovieComponent />

            <FooterCompoennt />
        </section>
    );
}

export default Homepages
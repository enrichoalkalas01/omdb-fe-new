import { useState } from 'react'
import Axios from 'axios'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'

const responsiveSlider = [
    { breakpoint: 1440, settings: { slidesToShow: 7, slidesToScroll: 1 } },
    { breakpoint: 1366, settings: { slidesToShow: 6, slidesToScroll: 1 } },
    { breakpoint: 992, settings: { slidesToShow: 5, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    { breakpoint: 500, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 425, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 325, settings: { slidesToShow: 1, slidesToScroll: 1 } }
]

export default function Tv() {
    const [movieList, setMovieList] = useState([])
    const getDataBanner = async () => {
        try {
            let getData = await Axios(`http://www.omdbapi.com/?apikey=f0d99cd&s=show&type=series&page=1`)
            if (movieList.length === 0) setMovieList(getData.data.Search)
        } catch (error) { console.log(error) }
    }; getDataBanner()

    return(
        <div className="col-12 tv">
            <div className="row wrapper-text">
                <div className='col-12 text-box'>
                    <h4>On Tv</h4>
                </div>
            </div>
            <div className='row wrapper-tab'>
                <div className='col-12 tab-box'>
                    <ul>
                        <li className='tab-list list-1 active'>Popular</li>
                        <li className='tab-list list-2'>Coming Soon</li>
                        <li className='tab-list list-3'>Top Rated</li>
                        <li className='tab-list list-4'>Most Revied</li>
                    </ul>
                </div>
            </div>
            <div className="row list-movie">
            {
                movieList.length === 0 ? null :
                <Slide
                    style={{ height: '100%', position: 'relative' }}
                    autoplay={ false }
                    slidesToShow={ 1 }
                    transitionDuration={ 200 }
                    infinite={ true }
                    responsive={ responsiveSlider }
                >
                    {
                        movieList.map((e, i) => {
                            return (
                                <div className="col-12 col-sm-12 col-lg-12 list-movie-box" key={ i }>
                                    <a href="/">
                                        <div className='list-content' style={{ backgroundImage: `url('${ e.Poster }')` }}>
                                            <div className='wrapper-box-lc'>
                                                <div className='text-box'>
                                                    <span>{ e.Title }</span>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })
                    }
                </Slide>
            }
            </div>
        </div>
    )
}
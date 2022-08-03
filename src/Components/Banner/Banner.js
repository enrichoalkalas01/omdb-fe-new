import React, { useState } from 'react'
import NavigationComponent from '../Navigation/Navigation'
import { Slide } from 'react-slideshow-image'
import CinemaBanner from '../../Assets/images/cinema-banner.jpeg'
import Axios from 'axios'
import 'react-slideshow-image/dist/styles.css'
import '../../Assets/css/banner.css'

export default function Banner() {
    const [bannerMovie, setBannerMovie] = useState([])
    const getDataBanner = async () => {
        try {
            let getData = await Axios(`http://www.omdbapi.com/?apikey=f0d99cd&s=guardians of the&type=movie&page=1`)
            if (bannerMovie.length === 0) setBannerMovie(getData.data.Search)
        } catch (error) { console.log(error) }
    }; getDataBanner()

    return(
        <section className="row" id="banner-box" style={{ backgroundImage: `url(${ CinemaBanner })` }}>
            <div className="col-12 box-wrapper-banner">
                <NavigationComponent />

                <div className='row box-slider-banner'>
                    <div className='col-12 wrapper-slider'>
                        {
                            bannerMovie.length === 0 ? null :
                            <Slide
                                style={{ height: '100%', position: 'relative' }}
                                // duration={ 1000 }
                                autoplay={ false }
                            >
                                {
                                    bannerMovie.map((banner, i) => {
                                        return (
                                            <div className="row each-slide wrapper-bx-slider" key={ i }>
                                                <div className='col-12 col-sm-6 col-md-8 left-box text-wrapper'>
                                                    <div className='wrapper-bx-text'>
                                                        <div className='txt-w icon-box'>
                                                            <div className='box bx-blue'>
                                                                <span>{ banner.Year }</span>
                                                            </div>
                                                        </div>
                                                        <div className='txt-w title-box'>
                                                            <h1>{ banner.Title }</h1>
                                                        </div>
                                                        <div className='txt-w desc-box'>

                                                        </div>
                                                        <div className='txt-w button-box'>
                                                            <a href="/">
                                                                <span>More Detail</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-sm-6 col-md-4 right-box image-box'>
                                                    <img src={ banner.Poster } alt={ banner.Title } />
                                                </div>
                                            </div>
                                        )
                                    })
                                } 
                            </Slide>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}
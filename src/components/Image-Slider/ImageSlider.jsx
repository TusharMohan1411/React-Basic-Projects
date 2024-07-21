// url https://picsum.photos/v2/list?page=2&limit=10

import { useEffect, useState } from 'react';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './ImageSlider.css';

export default function ImageSlider({ url }) {
    const [images, setImages] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getImages() {
        setIsLoading(true);
        setErrorMsg(null);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setImages(data);
            setIsLoading(false);

        } catch (error) {
            setErrorMsg(`Error fetching data ${error.message}`);;
            setImages(null);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            getImages();
        } else {
            console.log('URL not found');
        }
    }, [url])

    function handlePreviousImage() {
        setCurrentImage((prevState) => (
            prevState <= 0 ? images.length - 1 : prevState - 1
        ))
    }

    function handleNextImage() {
        setCurrentImage((prevState) => (
            prevState === images.length - 1 ? 0 : prevState + 1
        ))
    }

    function handleDots(currentDotIndex) {
        setCurrentImage(currentDotIndex);
    }

    return (
        <div id="Image-Slider-Cont">
            <h1>Image Slider</h1>
            <div className='Image-Slider'>

                {errorMsg &&
                    <div id="error-message">
                        {errorMsg}
                    </div>
                }
                <div id="images-container">
                    <BsArrowLeftCircleFill
                        className='left-arrow arrow'
                        size={50}
                        onClick={handlePreviousImage}
                    />

                    {isLoading ? 'Loading Data. Please Wait...' :
                        <div id="images" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                            {images && images.length ? images.map((item) =>
                                <img
                                    key={item.id}
                                    src={item.download_url}
                                    alt={item.author}
                                    className='image'
                                />
                            ) : null}
                        </div>
                    }

                    <BsArrowRightCircleFill
                        className='right-arrow arrow'
                        size={50}
                        onClick={handleNextImage}
                    />
                </div>
                <div className="images-slider-dots">
                    {
                        images && images.length ?
                            images.map((_, index) =>
                                <span
                                    key={index}
                                    className={index === currentImage ? 'images-dots active-dot' : 'images-dots'}
                                    onClick={() => handleDots(index)}
                                />
                            )
                            : null
                    }
                </div>
            </div>
        </div>
    )
}
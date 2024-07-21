// link - https://picsum.photos/v2/list?page=2&limit=100

import { useEffect, useState } from 'react';
import './LoadMore.css';

export default function LoadMore() {

    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState([]);
    const [imgCount, setImgCount] = useState(5);

    let url = `https://picsum.photos/v2/list?page=2&limit=${imgCount}`;

    useEffect(() => {
        async function fetchImages() {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const data = await response.json();
                setImages(data)
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                console.log(error);
            }
        }
        fetchImages();
    }, [url])

    function handleLoadMore() {
        setImgCount((prevState) => prevState + 1);
    }

    return (
        <div id="LoadMore-cont">
            <h1>The Load More Button</h1>
            {isLoading && 'Images are loading...'}

            <div id="LM-images-cont">
                {images && images.length ?
                    (images.map((item) =>
                        <div key={item.id} className="imgBox">
                            <img
                                key={item.id}
                                src={item.download_url}
                                alt={item.author}
                            />
                            <div className="LM-text-box">
                                <h2>{item.id}</h2>
                            </div>
                        </div>
                    ))
                    : null
                }
            </div>
            <button id='LM-btn' onClick={handleLoadMore}>Load More Images</button>

        </div>
    )
}
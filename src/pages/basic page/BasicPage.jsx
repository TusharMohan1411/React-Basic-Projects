import Accordian from '../../components/Accordian/Accordian';
import ImageSlider from '../../components/Image-Slider/ImageSlider';
import LoadMore from '../../components/Load More/LoadMore';
import StarRating from '../../components/Star Rating/StarRating';
import './BasicPage.css'
import Examples from "./Examples";

export default function BasicPage() {
    return (
        <>
            <section id='basic-page-main'>
                <h1>Basic Page for Practice</h1>
                <div className="examples-main">
                    <Examples />
                </div>
                <div id="bP-accordian">
                    <Accordian />
                </div>
                <div id="star-rating-cont">
                    <StarRating />
                </div>
                <div id="image-slider-main">
                    <ImageSlider
                        url="https://picsum.photos/v2/list?page=2&limit=10"
                    />
                </div>
                <div id="LoadMore-main">
                    <LoadMore />
                </div>
                <h3 id='BasicPageEnd'>Page End</h3>
            </section>
        </>
    )
}
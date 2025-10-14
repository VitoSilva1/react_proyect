

import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/react.svg'

export default function Home() {
    return (
        <div id="carouselExampleIndicators" className="carousel slide container">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={img1}
                        className="d-block w-100"
                        alt="Modern workspace with a laptop open on a desk, surrounded by study materials and a coffee mug. The room is well-lit and organized, creating a focused and productive atmosphere."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={img2}
                        className="d-block w-100"
                        alt="Second slide showing a close-up of hands typing on a keyboard, with notes and pens nearby. The environment feels calm and studious."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src={img3}
                        className="d-block w-100"
                        alt="Third slide featuring a bookshelf filled with colorful books and a small plant, suggesting a cozy and inviting study space."
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
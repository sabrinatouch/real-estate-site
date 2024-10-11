import Image from "next/image";

export default function Carousel() {
  return (
    <div className="carousel w-fit">
        <div id="slide1" className="carousel-item relative w-full">
            <img
            src="/img2.jpeg"
            className="" />
            <div className="justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
            <img
            src="/img1.jpeg"
            className="w-max h-auto" />
            <div className="justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
            <img
            src="/img3.jpeg"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
            <img
            src="/img4.jpeg"
            className="w-full" />
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
        </div> */}
    </div>
  );
}

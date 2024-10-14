'use client';

import { Key, SyntheticEvent, useState } from "react";

export function QuadGallery() {
    const images = [
        { imageLink: "/img1.jpeg" },
        { imageLink: "/img2.jpeg" },
        { imageLink: "/img3.jpeg" },
        { imageLink: "/img4.jpeg" },
        { imageLink: "/img5.jpeg" },
        { imageLink: "/img6.jpeg" },
        { imageLink: "/img7.jpeg" },
    ];

    const images2 = [
        { imageLink: "/img8.jpeg" },
        { imageLink: "/img9.jpeg" },
        { imageLink: "/img10.jpeg" },
        { imageLink: "/img11.jpeg" },
        { imageLink: "/img12.jpeg" },
        { imageLink: "/img13.jpeg" },
        { imageLink: "/img14.jpeg" },
    ];

    const [lightboxDisplay, setLightboxDisplay] = useState(false);
    const [imageToShow, setImageToShow] = useState('');

    const showImage = (imageLink : string) => {
        // set imageToShow to be the one that's been clicked on
        setImageToShow(imageLink);

        // set lightbox visibility to true
        setLightboxDisplay(true);
    }

    const hideLightbox = () => {
        setLightboxDisplay(false)
    }

    const showNext = (event: SyntheticEvent) => {
        event.stopPropagation()
    }

    const ImageCard = (props: { index: Key | null | undefined; imageLink: string; }) => {
        return (
            <div key={props.index} className="py-1 cursor-zoom-in image-card" onClick={() => showImage(props.imageLink)}>
                <img
                    className="rounded-lg"
                    src={props.imageLink}
                    alt=""
                />
            </div>
        )
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2">
                <div className= "flex flex-col flex-wrap">
                    {images.map(({ imageLink }, index) => (
                        <ImageCard imageLink={imageLink} index={index} />
                    ))}
                </div>
                <div className="flex flex-col flex-wrap">
                    {images2.map(({ imageLink }, index) => (
                        <ImageCard imageLink={imageLink} index={index} />
                    ))}
                </div>
            </div>
            { lightboxDisplay ? 
                <div id="lightbox" onClick={hideLightbox} className="flex items-center justify-content-between fixed top-0 left-0 z-20 w-full h-full">
                    <a className="btn">❮</a>
                    <img id="lightbox-img" src={imageToShow}></img>
                    <a className="btn">❯</a>
                </div>
            : '' }
        </div>
    );
}

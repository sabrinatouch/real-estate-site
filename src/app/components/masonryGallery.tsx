'use client';

import { SyntheticEvent, useState } from "react";
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export function MasonryGallery() {
    const images = [
        { imageLink: "/img1.jpeg" },
        { imageLink: "/img2.jpeg" },
        { imageLink: "/img3.jpeg" },
        { imageLink: "/img4.jpeg" },
        { imageLink: "/img5.jpeg" },
        { imageLink: "/img6.jpeg" },
        { imageLink: "/img7.jpeg" },
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
    const [imageToShowIndex, setImageToShowIndex] = useState(0);

    const showImage = (imageLink : string, index : number) => {
        // set imageToShow to be the one that's been clicked on
        setImageToShow(imageLink);
        setImageToShowIndex(index);

        // set lightbox visibility to true
        setLightboxDisplay(true);

        const body = document.querySelector('body');
        body!.style.overflow = 'hidden';
    }

    const hideLightbox = () => {
        setLightboxDisplay(false)
        const body = document.querySelector('body');
        body!.style.overflow = 'auto';
    }

    const showPrev = (event: SyntheticEvent) => {
        event.stopPropagation()
        let currentIndex = imageToShowIndex;
        let prevIndex = currentIndex - 1;

        if (prevIndex < 0) {
            prevIndex = images.length - 1
        }
        
        let prevImage = images[prevIndex]
        setImageToShow(prevImage.imageLink);
        setImageToShowIndex(prevIndex);
    }

    const showNext = (event: SyntheticEvent) => {
        event.stopPropagation()
        let currentIndex = imageToShowIndex;
        let nextIndex = currentIndex + 1;

        if (nextIndex >= images.length) {
            nextIndex = 0
        }

        let nextImage = images[nextIndex]
        setImageToShow(nextImage.imageLink);
        setImageToShowIndex(nextIndex);
    }

    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            <ImageList variant="masonry" cols={matchDownMd ? 1 : 2} gap={8}>
                {images.map((image, index) => (
                    <ImageListItem key={index} onClick={() => showImage(image.imageLink, index)}>
                        <img 
                            src={image.imageLink}
                            alt=""
                            loading="lazy"
                            className="rounded-lg cursor-zoom-in"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            { lightboxDisplay ? 
                <div id="lightbox" onClick={hideLightbox} className="flex items-center fixed top-0 left-0 z-10 w-full h-full">
                    <div id="lightbox-underlay" className="bg-secondary/[0.9] w-full h-full flex justify-center">
                        <div id="lightbox-items" className="flex items-center">
                            <a className="btn text-base-100/[0.9] hover:text-primary/[0.8] bg-secondary/[0.8] border-none shadow-none absolute left-5" onClick={showPrev}>❮</a>
                            <div className="">
                                <img 
                                    id="lightbox-img" 
                                    src={imageToShow}
                                    className="md:max-h-screen"
                                />
                            </div>
                            <a className="btn text-base-100/[0.9] hover:text-primary/[0.8] bg-secondary/[0.8] border-none shadow-none absolute right-5" onClick={showNext}>❯</a>
                        </div>
                    </div>
                </div>
            : '' }
        </div>
    );
}

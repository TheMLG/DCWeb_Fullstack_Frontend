import React from 'react';
import '../style/gallery.css';

const image = [
    { src: '../assets/gallery/dc-links-page.jpg', info: 'Gallery Image 1' },
    { src: '../assets/gallery/dc-pic1.jpg', info: 'Gallery Image 2' },
    { src: '../assets/gallery/dc-v-1.jpg', info: 'Gallery Image 3' },
    { src: '../assets/gallery/dc-v-add.jpg', info: 'Gallery Image 4' },
    { src: '../assets/gallery/dc-v-dt.jpg', info: 'Gallery Image 5' },
    { src: '../assets/gallery/dc-v-fp.jpg', info: 'Gallery Image 6' },
    { src: '../assets/gallery/dc-v-lp.jpg', info: 'Gallery Image 7' },
    { src: '../assets/gallery/dc-v-lp2.jpg', info: 'Gallery Image 8' },
    { src: '../assets/gallery/dc-v-pic2.jpg', info: 'Gallery Image 9' },
    { src: '../assets/gallery/dc-v-pic3.jpg', info: 'Gallery Image 10' },
    { src: '../assets/gallery/dc-v-pic4.jpg', info: 'Gallery Image 11' },
    { src: '../assets/gallery/dc-v-2.jpg', info: 'Gallery Image 12' }
];

function Gallery() {

    return (
        <>
            
            <div className="cardcontainer">
                {image.map((image, index) => (
                    <div className="card" key={index}>
                        <div
                            className="cardimg"
                            style={{ backgroundImage: `url(${image.src})` }}
                        ></div>
                        {/* <div className="cardinfo">{image.info}</div> */}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Gallery;
import React,{useState, useEffect} from 'react';
import '../style/gallery.css';



function Gallery() {
      const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data.map(img => img.url));
      }
    } catch (error) {
      console.error('Failed to fetch images', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

    return (
        <>
            
            <div className="cardcontainer">
                {images.map((src, index) => (
                    <div className="card" key={src}>
                        <div
                            className="cardimg"
                            style={{ backgroundImage: `url(${src})` }}
                        ></div>
                        {/* <div className="cardinfo">{image.info}</div> */}
                    </div>
                ))}
            </div>
        </>
    );

}

export default Gallery;
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

const GalleryDB = () => {
  const { register, handleSubmit, reset } = useForm();
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      }
    } catch (error) {
      console.error('Failed to fetch images', error);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/gallery`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: data.url }),
      });
      if (response.ok) {
        const newImage = await response.json();
        reset();
        fetchImages(); // Refresh preview after adding
      } else {
        const errorData = await response.json();
        alert('Failed to add image: ' + (errorData.message || 'Unknown error'));
      }
    } catch (error) {
      console.error('Error adding image:', error);
      alert('Error adding image');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/gallery/gallery/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchImages(); // Refresh preview after deletion
      } else {
        alert('Failed to delete image');
      }
    } catch (error) {
      alert('Error deleting image');
    }
  };

  return (
    <div>
      <h2>Add Gallery Images</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Enter image URL"
          {...register('url', { required: true })}
          style={{ width: '300px', marginRight: '8px' }}
        />
        <button type="submit">Add Image</button>
      </form>
      <div style={{ marginTop: '20px' }}>
        <h3>Image Preview</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {images.map(({ _id, url }, index) => (
            <div key={_id} style={{ position: 'relative' }}>
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                style={{ width: '100px', height: '100px', objectFit: 'cover', boxShadow: '0 1px 4px rgba(0,0,0,0.2)' }}
              />
              <button
                onClick={() => handleDelete(_id)}
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  background: 'red',
                  color: 'white',
                  border: 'none',
                  borderRadius: '50%',
                  width: '20px',
                  height: '20px',
                  cursor: 'pointer',
                }}
                title="Delete Image"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDB;

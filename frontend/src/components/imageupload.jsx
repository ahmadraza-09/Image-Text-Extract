import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = ({ onTextExtracted }) => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
    setImageUrl(URL.createObjectURL(selectedImage));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:5000/api/extract-text', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      onTextExtracted(response.data.text);
    } catch (error) {
      console.error('Error extracting text:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {imageUrl && <img src={imageUrl} alt="Selected" />}
        <label htmlFor="upload-image" className='upload-img'>Select Image</label>
        <input type="file" id='upload-image' accept="image/*" onChange={handleImageChange} />
        <button type="submit">Extract Text</button>
      </form>
    </div>
  );
};

export default ImageUpload;

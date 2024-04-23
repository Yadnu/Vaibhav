import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const ImageUpload: React.FC = () => {
    const [image, setImage] = useState<File | null>(null);

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const handleUpload = () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);

            axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(response => {
                console.log('Image uploaded successfully');
            })
            .catch(error => {
                console.error('Error uploading image:', error);
            });
        } else {
            console.error('No image selected');
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default ImageUpload;

import React from 'react';
import { Photo } from '../../types';

interface ImageGalleryProps {
  gallery: Photo[];
  handleModal: (photo: Photo) => void; 
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ gallery, handleModal }) => {
  return (
    <div className="image-gallery">
      {gallery.map((photo) => (
        <div key={photo.id} className="image-gallery-item" onClick={() => handleModal(photo)}>
          <img src={photo.urls.small} alt={photo.alt} />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
import React from 'react';
import styles from '../ImageCard/ImageCard.module.css';

interface ImageCardProps {
    src: string;
    alt: string;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, onClick }) => {
    return (
        <div className={styles.divCard}>
            <img className={styles.imgCard} src={src} alt={alt} onClick={onClick} />
        </div>
    );
};

export default ImageCard;
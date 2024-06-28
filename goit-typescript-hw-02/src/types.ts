export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  description: string;
}

export interface Photo extends Image {
  alt: string;
}

export interface ImageModalProps {
  isOpen: boolean;
  photo: Photo | null;
  onRequestClose: () => void;
}
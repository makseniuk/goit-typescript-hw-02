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

export interface ImageCardProps {
    src: string;
    alt: string;
    onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export interface ImageGalleryProps {
  gallery: Photo[];
  handleModal: (photo: Photo) => void; 
}

export interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

export type HandleQueryFunction = (query: string) => void;

export interface SearchBarProps {
  handleQuery: HandleQueryFunction;
}
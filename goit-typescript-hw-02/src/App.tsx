import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ErrorMessage from '../src/components/ErrorMessage/ErrorMessage';
import ImageGallery from '../src/components/ImageGallery/ImageGallery';
import ImageModal from '../src/components/ImageModal/ImageModal';
import Loader from '../src/components/Loader/Loader';
import LoadMoreBtn from '../src/components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from '../src/components/SearchBar/SearchBar';
import { Photo } from './types';

const API_KEY = 'RakQqQ1UhJMfZkVYL3XNYnH18bMDmFC8Byt4d2iMwvQ';

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
});

const App: React.FC = () => {
  const [photosToShow, setPhotosToShow] = useState<Photo[] | null>(null); // Type defined for photos
  const [page, setPage] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [total_pages, setTotal_pages] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [bigImage, setBigImage] = useState<Photo | null>(null); // Type defined for large image

  const handleQuery = (searchTerm: string) => {
    setQuery(searchTerm);
    setPhotosToShow([]);
    setPage(1);
  };

  const handleSearchPage = () => {
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    const fetchData = async (query: string, page: number) => {
      if (!query) return;

      setIsLoading(true);
      try {
        const response = await instance.get(`search/photos/?client_id=${API_KEY}&query=${query}&page=${page}&per_page=12`);
        setTotal_pages(response.data.total_pages);

        setPhotosToShow((prev) => [...(prev || []), ...response.data.results]); // Use type Photo[]
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData(query, page);
  }, [query, page]);

  const openModal = (photo: Photo) => {
    setIsOpen(true);
    setBigImage(photo);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <SearchBar handleQuery={handleQuery} />
      {photosToShow && (
        <ImageGallery gallery={photosToShow} handleModal={openModal} />
      )}

      {page < total_pages && (
        <LoadMoreBtn handleLoadMore={handleSearchPage} />
      )}
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          photo={bigImage || null} 
        />
      )}
    </>
  );
}

export default App;

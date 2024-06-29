import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBarProps } from '../../types';
import styles from '../SearchBar/SearchBar.module.css';


const SearchBar: React.FC<SearchBarProps> = ({ handleQuery }) => {
  const [searchCriteria, setSearchCriteria] = useState<string>('');

  const notify = () => toast('Please enter the search criteria');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCriteria(event.target.value.trim());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchCriteria) {
      notify();
      return;
    } else {
      handleQuery(searchCriteria);
      setSearchCriteria('');
      event.currentTarget.reset();
    }
  };

  return (
    <header>
      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={50}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 3000,
          style: {
            width: '500px',
            background: '#4da8ff',
            color: '#fff',
            fontSize: '20px',
          },
        }}
      />
      <form className={styles.container} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          id="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchCriteria}
          onChange={handleChange}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

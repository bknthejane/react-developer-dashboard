import React from 'react';
import useFavoritesReducer  from '../hooks/useFavoritesReducer';
import UserCard from '../components/UserCard';
import NavBar from '../components/NavBar';
import styles from '../css/HomePage.module.css'

const FavoritesPage: React.FC = () => {
  const { favorites, dispatch } = useFavoritesReducer();

  const handleRemoveFavorite = (login: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: login });
  };

  return (
    <>
      <div>
      <NavBar />
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className={styles.container}>
          {favorites.map(user => (
            <UserCard
              key={user.id}
              user={user}
              isFavorite={true}
              onToggleFavorite={() => handleRemoveFavorite(user.login)}
            />
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default FavoritesPage;

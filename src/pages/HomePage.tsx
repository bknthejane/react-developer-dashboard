import React, { useEffect, useState } from 'react';
import { fetchUsers, searchUsers } from '../utils/gitHubServices';
import UserCard from '../components/UserCard';
import SearchBar from '../components/SearchBar';
import Loader from '../components/Loader';
import type { GitHubUser } from '../types';
import useFavoritesReducer from '../hooks/useFavoritesReducer';
import styles from '../css/HomePage.module.css'
import NavBar from '../components/NavBar';

const HomePage: React.FC = () => {
  const [users, setUsers] = useState<GitHubUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [since, setSince] = useState(0);
  const { favorites, dispatch } = useFavoritesReducer();

  useEffect(() => {
    setLoading(true);
    fetchUsers(since)
      .then(res => setUsers(res.data))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [since]);

  const handleSearch = (query: string) => {
    if (!query) return setSince(0);
    setLoading(true);
    searchUsers(query)
      .then(res => setUsers(res.data.items))
      .catch(console.error)
      .finally(() => setLoading(false));
  };

  const handleToggleFavorite = (user: GitHubUser) => {
    const isFavorite = favorites.some(f => f.login === user.login);
    if (isFavorite) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: user.login });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: user });
    }
  };


  return (
    <>
      <div>
        <NavBar />
        <div className={styles.search}>
          <div >
            <SearchBar onSearch={handleSearch} />
          </div>
          <div>
            <button onClick={() => setSince(since - 30)} disabled={since <= 0}>
              Prev
            </button>
            <button onClick={() => setSince(since + 30)}>Next</button>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className={styles.container}>
              {users.map(user => (
                <UserCard
                  key={user.id}
                  user={user}
                  isFavorite={favorites.some(f => f.login === user.login)}
                  onToggleFavorite={() => handleToggleFavorite(user)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default HomePage;

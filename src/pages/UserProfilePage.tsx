import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserDetail } from '../utils/gitHubServices';
import type { GitHubUserDetail } from '../types';
import Loader from '../components/Loader';
import NavBar from '../components/NavBar';
import styles from '../css/UserProfilePage.module.css';

const UserProfilePage: React.FC = () => {
  const { username } = useParams();
  const [user, setUser] = useState<GitHubUserDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (username) {
      getUserDetail(username)
        .then(res => setUser(res.data))
        .catch(console.error)
        .finally(() => setLoading(false));
    }
  }, [username]);

  if (loading) return <Loader />;
  if (!user) return <div>User not found</div>;

  return (
    <>
      <NavBar />
      <div className={styles.container}>
        <img src={user.avatar_url} alt={user.login} />
        <h2>{user.name} (@{user.login})</h2>
        <p>{user.bio}</p>
        <p>📍 {user.location}</p>
        <p>Followers: {user.followers} | Following: {user.following}</p>
        <p>Public Repos: {user.public_repos}</p>
      </div>
    </>
  );
};

export default UserProfilePage;
import React from "react";
import type { GitHubUser } from "../types";
import { useNavigate } from "react-router-dom";
import styles from '../css/UserCard.module.css';


interface Props {
    user: GitHubUser;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const UserCard: React.FC<Props> = ({ user, isFavorite, onToggleFavorite }) => {
    const navigate = useNavigate();

    return (
        <>
            <div  className={styles.card}>
                <img src={user.avatar_url} alt={user.login} className={styles.avatar}/>
                <div className={styles.info}>
                    <h3 className={styles.username}>{user.login}</h3>
                
                <div className={styles.actions}>
                    <button className={styles.Btn} onClick={() => navigate(`/user/${user.login}`)}>Profile</button>
                    <button className={styles.Btn} onClick={onToggleFavorite}>{isFavorite ? '❤️' : '💔'}</button>
                </div>
                </div>
            </div>
        </>
    );
};

export default UserCard;
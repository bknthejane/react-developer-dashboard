import React from "react";
import type { GitHubUser } from "../types";
import { useNavigate } from "react-router-dom";

interface Props {
    user: GitHubUser;
    isFavorite: boolean;
    onToggleFavorite: () => void;
}

const UserCard: React.FC<Props> = ({ user, isFavorite, onToggleFavorite }) => {
    const navigate = useNavigate();

    return (
        <>
            <div>
                <img src={user.avatar_url} alt={user.login} />
                <h3>{user.login}</h3>
                <div>
                    <button onClick={() => navigate(`/user/${user.login}`)}>Profile</button>
                    <button onClick={onToggleFavorite}>{isFavorite ? '❤️' : '💔'}</button>
                </div>
            </div>
        </>
    );
};

export default UserCard;
import { useReducer, useEffect } from 'react';
import type { GitHubUser } from '../types';

type Action = | { type: 'ADD_FAVORITE'; payload: GitHubUser } | { type: 'REMOVE_FAVORITE'; payload: string };

const favoritesReducer = (state: GitHubUser[], action: Action): GitHubUser[] => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return state.find(user => user.login === action.payload.login) ? state : [...state, action.payload];
        case 'REMOVE_FAVORITE':
            return state.filter(user => user.login !== action.payload);
        default:
            return state;
    }
};

const useFavoritesReducer = () => {
    const [favorites, dispatch] = useReducer(favoritesReducer, [], () => {
        const stored = localStorage.getItem('favorites');
        return stored ? JSON.parse(stored) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    return { favorites, dispatch };
};

export default useFavoritesReducer;
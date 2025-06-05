import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

interface Props {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<Props> = ({onSearch}) => {
    const [value, setValue] = useState('');
    const debounced = useDebounce(value);

    useEffect(() => {
        onSearch(debounced);
    }, [debounced]);

    return (
        <>
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Search users...'
            />
        </>
    )
};

export default SearchBar;
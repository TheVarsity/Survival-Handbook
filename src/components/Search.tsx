// @ts-nocheck Don't Check for now

import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

type SearchProps = { searchIndex: any };

// Search component
const Search: React.FC<SearchProps> = props => {
    const [state, setState] = useState({
        query: ``,
        results: []
    });
    const [index, setIndex] = useState();

    const getOrCreateIndex = () => {
        if (!index) {
            setIndex(Index.load(props.searchIndex));
        }
    };

    const search = (evt: any) => {
        const query = evt.target.value;
        getOrCreateIndex();
        if (index) {
            setState({
                query,
                // Query the index with search string to get an [] of IDs
                results: index
                    .search(query, { expand: true })
                    // Map over each ID and return the full document
                    .map(({ ref }: { ref: any }) => index.documentStore.getDoc(ref))
            });
        }
    };

    useEffect(() => {
        console.log(state.results);
    }, [state]);

    return (
        <div>
            <input type="text" value={state.query} onChange={search} />
            <ul>
                {state.results.map(page => (
                    <li key={page.id}>
                        <Link to={`${window.location.toString().slice(0, -1)}${page.path}`}>
                            {page.title}
                        </Link>
                        {/* {`: ${page.tags?.join(`,`)}`} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default Search;

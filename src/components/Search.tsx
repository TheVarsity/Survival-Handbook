// @ts-nocheck Don't Check for now

import { Index } from 'elasticlunr';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import { isMobile } from 'react-device-detect';

type SearchProps = { searchIndex: any; toggle: boolean };

// Search component
const Search: React.FC<SearchProps> = ({ searchIndex, toggle }) => {
    const [state, setState] = useState({
        query: '',
        results: []
    });
    const [index, setIndex] = useState();

    const getOrCreateIndex = () => {
        if (!index) {
            setIndex(Index.load(searchIndex));
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
        if (!toggle) {
            setState({ query: ``, results: [] });
        }
        console.log(toggle);
    }, [toggle]);

    return (
        <div>
            <input
                type="text"
                value={state.query}
                onChange={search}
                className="input is-hovered is-large"
                placeholder="Search ..."
            />
            {state.results.length && toggle ? (
                <ul
                    className="py-3 mt-2"
                    style={{
                        position: isMobile ? 'static' : 'absolute',
                        width: isMobile ? '95vw' : '23vw',
                        borderRadius: '5px',
                        backgroundColor: 'rgba(51, 51, 51, 0.8)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    {state.results.map((page, index) => (
                        <li key={page.id}>
                            <Link to={`${page.path}`} className="has-text-white">
                                <p className="search-result">{page.title}</p>
                            </Link>
                            <div className="divider-wrapper">
                                {index !== state.results.length - 1 ? (
                                    <div className="divider" />
                                ) : null}
                            </div>
                            <style jsx>
                                {`
                                    .search-result {
                                        word-wrap: auto;
                                        margin: 0 5px;
                                    }
                                    .divider-wrapper {
                                        display: flex;
                                        justify-content: center;
                                    }
                                    .divider {
                                        display: block;
                                        position: relative;
                                        border-top: 0.1rem solid white;
                                        height: 0.1rem;
                                        margin: 0.5rem 0;
                                        text-align: center;
                                        width: 90%;
                                    }
                                `}
                            </style>
                        </li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};
export default Search;

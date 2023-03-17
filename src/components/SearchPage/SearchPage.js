import React from "react";
import SearchItem from "../SearchItem/SearchItem";


const SearchPage = ({ searchItems }) => {
    return (
        <div className="serach-page">
            <h1 className="search-page__title">Search Results</h1>
            <div className="search-page__outer">
                <div className="search-page__inner">
                    {searchItems?.map((item) =>
                        item.poster_path ? <SearchItem key={item.id} item={item} /> : null
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchPage;

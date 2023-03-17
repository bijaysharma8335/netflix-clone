import React from "react";
import SearchBar from "./SearchBar/SearchBar";

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={Logo} alt="logo " className="header__logo" />
            </div>
            <div className="header__options">
                <div className="header__options-primary">
                    <Link className="header__option" to="/movies">
                        Movies
                    </Link>
                    <Link className="header__option" to="/tvshows">
                        TV Shows
                    </Link>
                    <Link className="header__option" to="/mylist">
                        My List
                    </Link>
                    <div className="header__serachbar">
                        <SearchBar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
    const [currentpath, setCurrentpath] = useState("");
    const handleChange = (e) => {
        
    };
    return (
        <div className="container-1">
            <div className="container-2">
                <span className="search-icon">
                    <FaSearch />
                    <input
                        type="search"
                        id="search"
                        placeholder="Movies, TV Shows..."
                        onChange={handleChange}
                    />
                </span>
            </div>
        </div>
    );
};

export default SearchBar;

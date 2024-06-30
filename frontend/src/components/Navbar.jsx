import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 2) {
      try {
        const response = await fetch(`/api/search?query=${e.target.value}`);
        const result = await response.json();
        setSearchResults(result);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-10/12 flex m-auto items-center my-8 ">
      <div className="w-full flex m-auto justify-between items-center font-bold">
        <div>
          <Link to="/">Logo</Link>
        </div>
        <div className="flex gap-8 ">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/singlepost">SinglePost</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex gap-4">
          <input
            className="w-3/5 text-black text-[15px] bg-black/70 rounded px-4 py-2"
            type="text"
            placeholder="Search.."
            value={searchQuery}
            onChange={handleSearch}
          />
          <button>Light Mode</button>
        </div>
      </div>
      {searchResults.length > 0 && (
        <div className="w-full mt-4">
          <h2 className="text-xl font-bold">Search Results:</h2>
          {searchResults.blogs.map((blog) => (
            <div key={blog._id}>
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </div>
          ))}
          {searchResults.about.map((about) => (
            <div key={about._id}>
              <h3>{about.title}</h3>
              <p>{about.description}</p>
            </div>
          ))}
          {/* Add other search results as needed */}
        </div>
      )}
    </div>
  );
};

export default Navbar;

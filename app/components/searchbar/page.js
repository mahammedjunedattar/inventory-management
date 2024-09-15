import React from 'react'

const page = () => {
  return (
    <div>
          <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={query}
        onChange={handleInputChange}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>

    </div>
  )
}

export default page

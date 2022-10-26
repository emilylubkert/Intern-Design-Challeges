function Search({ onSubmit, handleChange, searchInput }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <label hidden>Search</label>
        <input
          className='input'
          type='text'
          value={searchInput}
          placeholder='Search'
          onChange={handleChange}
          required
        />
        <input className="submit" type="submit" value="submit" />
      </form>
    </>
  );
}

export default Search;

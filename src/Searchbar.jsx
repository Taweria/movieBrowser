export default function Searchbar() {
    return (
      <div className="Searchbar">
        <img src="loupe.svg" alt="search" />
        <input type="text" className="Searchbar-input" placeholder="Search for a movie..." />
      </div>
    );
}
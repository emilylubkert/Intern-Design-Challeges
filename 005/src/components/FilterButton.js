import './App.css';
function FilterButton({ label, onClick }) {
  return <button className='filter-btn' onClick={onClick}>{label}</button>;
}

export default FilterButton;


// style={{"width":"100%"}}
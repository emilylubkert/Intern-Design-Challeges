import { useState } from 'react';
import { useInsults } from '../context/insults';
import Search from './Search';
import FilterButton from './FilterButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import './App.css';

function InsultDisplay() {
  const insults = useInsults();
  const [display, setDisplay] = useState(insults.insults);
  const [searchInput, setSearchInput] = useState("");
  const star = <FontAwesomeIcon icon={faStar} />

  function onSubmit(event) {
    event.preventDefault();
    filterInsults(searchInput);
  }

  function handleChange(event) {
    event.preventDefault();
    setSearchInput(event.target.value);
  }

  function filterInsults(input) {
    input = input.toLowerCase();
    const filteredInsults = insults.insults.filter((insult) => 
    insult.username.toLowerCase().includes(input) ||
    insult.insult.toLowerCase().includes(input) ||
    insult.school.toLowerCase().includes(input) ||
    insult.subject.toLowerCase().includes(input));
    setDisplay(filteredInsults);
    setSearchInput("");
  }

  function restoreInsults() {
    setDisplay(insults.insults);
  }

  function showStars(num) {
    let starArr = [];
    for(let i = 0; i <= num; i++) {
        starArr.push(star);
    }
    return starArr;
  }

  const insultsList = display.map((insult, index) => {
    return (
      <tr key={index}>
        <td className={insult.id % 2 === 0 ? "even" : "odd"}>{insult.username}</td>
        <td className={insult.id % 2 === 0 ? "even" : "odd"}>{insult.insult}</td>
        <td className={insult.id % 2 === 0 ? "even" : "odd"}>{insult.school}</td>
        <td className={insult.id % 2 === 0 ? "even" : "odd"}>{insult.subject}</td>
        <td className={insult.id % 2 === 0 ? "even" : "odd"}>{showStars(insult.rating)}</td>
      </tr>
    );
  });

  function filter() {
    console.log('filter');
  }



  return (
    <>
    <div className='search-container'>
        <Search onSubmit={onSubmit} handleChange={handleChange} searchInput={searchInput} />
        <button className='restore-button' onClick={restoreInsults}>see full insult list</button>
    </div>
      {display.length > 0 ? (
        <table className='insult-table'>
          <thead>
            <tr>
              <th><FilterButton label="Username" onClick={() => filter()}/></th>
              <th><FilterButton label="Insult" onClick={() => filter()}/></th>
              <th><FilterButton label="School" onClick={() => filter()}/></th>
              <th><FilterButton label="Subject" onClick={() => filter()}/></th>
              <th><FilterButton label="Rating" onClick={() => filter()}/></th>
            </tr>
          </thead>
          <tbody>{insultsList}</tbody>
        </table>
      ) : (
        <h2>No Results Found</h2>
      )}
    </>
  );
}

export default InsultDisplay;

import React, { useState } from 'react';
import { MenuNotifications } from './MenuNotifications';
import './Dropdown.scss';
import { Link } from 'react-router-dom';

function Dropdown({
  changeDropdown,
  dropdownOpen,
}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <ul
        onClick={() => changeDropdown()}
        className={dropdownOpen ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuNotifications.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() =>{changeDropdown()}}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;

//une fonction => dropdownSelect: !state.dropdownSelect

import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext';

export default function Header() {
    const { userData, isOpen, setIsOpen, themeStyle, isDay, setIsDay } = useContext(AppContext);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
  
    const toggleTheme = ()=> {
      setIsDay(!isDay);
    };

    return (
    <div 
        className='header'
        style={{
            ...themeStyle,
            display: 'flex',
            justifyContent: 'right',
            padding: '10px',
            gridColumn: isOpen ? '2 / 4' : '1 / 4',
            gridRow: '1 / 2',
            alignItems: 'center',
        }}    
    >
      <div>Hello! {userData?.first_name} {userData?.last_name}</div>
      <p style={{ cursor: 'pointer', marginLeft: 5, marginRight: 5 }} onClick={toggleSidebar}>My profile</p>
      <label className='switch'>
        <input 
          type='checkbox'
          checked={isDay}
          onChange={toggleTheme} 
        />
        <span className='slider round'></span>
      </label>
    </div>
  );
}

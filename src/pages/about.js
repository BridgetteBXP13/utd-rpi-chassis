import React from 'react'
import '../styles/about.css'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'

function about () {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Directory</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key) => {
          return (
          <MenuItem 
          key={key} 
          image={menuItem.image} 
          name={menuItem.name} 
          work={menuItem.work}
          tools={menuItem.tools}
          email={menuItem.email} 
          linkedin= <a href={menuItem.linkedin} target='_blank' rel='noreferrer'>{menuItem.linkedin}</a>

          />
          );
        })}
      </div>
    </div>
  );
}

export default about

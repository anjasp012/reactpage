import React from 'react';
// import icons
import {
  ImWhatsapp,
  ImLinkedin,
  ImInstagram
} from 'react-icons/im';

const Socials = () => {
  return <div className='hidden xl:flex ml-24'>
    <ul className='flex gap-x-4'>
      <li>
        <a href='http://www.whatsapp.com/' target='_blank'>
          <ImWhatsapp />
        </a>
      </li>
      <li>
        <a href='http://www.linkedin.com/' target='_blank'>
          <ImLinkedin />
        </a>
      </li>
      <li>
        <a href='http://www.instagram.com/masuden0000/' target='_blank'>
          <ImInstagram />
        </a>
      </li>
    </ul>
    
  </div>;
};

export default Socials;

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: 'https://linkedin.com',
      style: 'rounded-tr-md',
    },
    {
      id: 2, // Fix: Use a different id for the second link
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: 'https://github.com',
      style: 'rounded-tr-md',
    },
  ];

  return (
    <div className='flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${link.style}`}
          >
            <a href={link.href} className='flex justify-between items-center w-full text-white'>
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;

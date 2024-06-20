import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export default function Navbar(){
  const navbarRef = useRef(null);
  const menuRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'bounce' }
    );

    gsap.fromTo(
      menuRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2, delay: 0.5 }
    );

    gsap.fromTo(
      buttonRef.current,
      { scale: 0 },
      { scale: 1, duration: 1, ease: 'elastic.out(1, 0.3)', delay: 1 }
    );
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="bg-blue-600 p-4 fixed w-full top-0 left-0 z-10 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">My Logo</div>
        <ul className="flex space-x-4">
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <li
              key={index}
              ref={el => menuRef.current[index] = el}
              className="text-white hover:text-gray-300 cursor-pointer transition duration-300"
            >
              {item}
            </li>
          ))}
        </ul>
        <Link
          ref={buttonRef}
          to='/customer/addCustomer'
          className="ml-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Add Customer
        </Link>
      </div>
    </nav>
  );
};
import React from 'react';
import './index.scss';
function RightNav({ currentElement, setCurrentElement }) {
  const scrollToPage = (id) => {
    setCurrentElement(id);
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      className={`right_nav_wrapper ${currentElement === 'experience' ? 'green' : ''} ${
        currentElement === 'footer' ? 'hidden' : ''
      }`}>
      <button
        onClick={(e) => {
          scrollToPage('home');
        }}
        className={`nav_btn ${currentElement === 'home' ? 'opened' : ''}`}></button>
      <button
        onClick={(e) => {
          scrollToPage('desc');
        }}
        className={`nav_btn ${currentElement === 'desc' ? 'opened' : ''}`}></button>
      <button
        onClick={(e) => {
          scrollToPage('experience');
        }}
        className={`nav_btn ${currentElement === 'experience' ? 'opened' : ''}`}></button>
      <button
        onClick={(e) => {
          scrollToPage('projects');
        }}
        className={`nav_btn ${currentElement === 'projects' ? 'opened' : ''}`}></button>
      <button
        onClick={(e) => {
          scrollToPage('contact');
        }}
        className={`nav_btn ${currentElement === 'contact' ? 'opened' : ''}`}></button>
    </div>
  );
}

export default RightNav;

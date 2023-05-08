import React, { useEffect } from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    document.addEventListener('mousemove', (event) => {
      let pageX = window.innerWidth;
      let pageY = window.innerHeight;
      let mouseY = 0;
      let mouseX = 0;

      mouseY = event.pageY;
      const yAxis = ((pageY - mouseY) / pageY) * 300;

      mouseX = event.pageX / -pageX;
      const xAxis = -mouseX * 100 - 100;

      document.querySelectorAll('.box__ghost-eyes').forEach((item) => {
        item.style.transform = 'translate(' + xAxis + '%,-' + yAxis + '%)';
      });
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="box">
        <div className="box__ghost">
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>
          <div className="symbol"></div>

          <div className="box__ghost-container">
            <div className="box__ghost-eyes">
              <div className="box__eye-left"></div>
              <div className="box__eye-right"></div>
            </div>
            <div className="box__ghost-bottom">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className="box__ghost-shadow"></div>
        </div>

        <div className="box__description">
          <div className="box__description-container">
            <div className="box__description-title">Whoops!</div>
            <div className="box__description-text">
              It seems like we couldn't find the page you were looking for
            </div>
          </div>

          <button className="box__button" onClick={() => navigate('/')}>
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}

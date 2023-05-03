import { Grid } from '@mui/material';
import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
function Header({ currentElement, currentScreen }) {
  const [clickedState, setClickedState] = React.useState(false);
  const navigate = useNavigate();

  const scrollListener = React.useCallback((e) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);
  React.useEffect(() => {
    console.log(clickedState);
    if (window.innerWidth < 900) {
      if (clickedState) {
        window.addEventListener('wheel', scrollListener, { passive: false });
        window.addEventListener('touchmove', scrollListener, { passive: false });
      }
    }
    return () => {
      window.removeEventListener('wheel', scrollListener, { passive: false });
      window.removeEventListener('touchmove', scrollListener, { passive: false });
    };
  }, [clickedState, scrollListener]);

  const handleRedirect = (e) => {
    navigate('/' + e.target.name.toLowerCase());
  };

  const handleRefresh = () => {
    if (currentScreen === 'main') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const pagesToShowHeader = ['main', 'Résumé', 'Work', 'Shelf'];

  const renderButtons = () => {
    return pagesToShowHeader
      .map((page) => {
        if (page !== currentScreen && page !== 'main') {
          return (
            <button key={page} name={page} onClick={handleRedirect} className="popup_button">
              My {page}
            </button>
          );
        }
        return undefined;
      })
      .filter((item) => item !== undefined);
  };
  return (
    <div
      className="header_wrapper"
      style={{ backgroundColor: currentScreen !== 'main' ? '#f5f4fc' : null }}>
      <Grid className="header_container" container direction="row">
        <Grid alignItems="center" item container xs={6}>
          <h1
            onClick={handleRefresh}
            className={`${clickedState ? 'x' : null} ${
              currentElement === 'footer' ||
              currentElement === 'experience' ||
              currentElement === 'home'
                ? 'green'
                : null
            }`}>
            Gourav
          </h1>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end" alignItems="center">
          <button
            onClick={() => setClickedState(!clickedState)}
            className={`${clickedState ? 'header_button x' : `header_button ${currentScreen}`} ${
              currentElement === 'footer' || currentElement === 'experience' ? 'green' : null
            }`}
          />
        </Grid>
      </Grid>
      <div className={clickedState ? 'header_contact_menu open' : 'header_contact_menu hidden'}>
        <Grid className="popup_main_grid" container flexDirection="column">
          {renderButtons()}
        </Grid>
      </div>
    </div>
  );
}

export default Header;

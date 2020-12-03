import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {
  const theme = useContext(ThemeContext);
  console.log(theme);


  return (
    <div>
      <button style={theme}>Press me</button>
    </div>
  );
}

export default HeaderButton;
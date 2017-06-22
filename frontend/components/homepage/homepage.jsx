import React from 'react';

import LeftCol from './leftcol/leftcol';
import SelectedChannel from './selected_channel/selected_channel';

const Homepage = () => (
  <div className="homepage">
    <LeftCol />
    <SelectedChannel />
  </div>
);

export default Homepage;

import React from 'react';
import { Route } from 'react-router';

import LeftCol from './leftcol/leftcol';
import SelectedChannel from './selected_channel/selected_channel';

const Homepage = () => {return(
  <div className="homepage">
    <LeftCol />
    <Route exact path="/messages/:id" component={SelectedChannel} />
  </div>
);};

export default Homepage;

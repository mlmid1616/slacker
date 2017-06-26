import React from 'react';
import { Route } from 'react-router';

import LeftCol from './leftcol/leftcol';
import SelectedChannel from './selected_channel/selected_channel';

const Homepage = (props) => {

  const channel_id = props.match.params.id;
  return(
  <div className="homepage">
    <LeftCol channel_id={channel_id}/>
    <SelectedChannel channel_id={channel_id} />
  </div>
);};

export default Homepage;

// <Route exact path="/messages/:id" component={SelectedChannel} />

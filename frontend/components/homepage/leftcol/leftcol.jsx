import React from 'react';

import ColHeaderContainer from './header/col_header_container';
import ChannelScroller from './channel_scroller/channel_scroller';

const LeftCol = (props) => {

  return (
    <div className="left-col">
      <ColHeaderContainer />
      <ChannelScroller />
    </div>
  );
};

export default LeftCol;

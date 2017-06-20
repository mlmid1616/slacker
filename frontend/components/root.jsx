import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

export default Root;

// import React from 'react';
// import { Provider } from 'react-redux';
// import { HashRouter } from 'react-router-dom';
// import App from './App';
//
// const Root = ({ store }) => (
//   <Provider store={ store }>
//     <HashRouter>
//       <Route to="/" component=App />
//     </HashRouter>
//   </Provider>
// );
//
// export default Root;

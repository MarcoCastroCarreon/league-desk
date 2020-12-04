import React, { Fragment } from 'react';

const App = () => (
  <Fragment>
    <h1>Hello World!!!</h1>
    <button onClick={() => electron.notificationApi.sendNotification('Message')} >RENDER NOTIFICATION</button>
  </Fragment>
)

export default App;
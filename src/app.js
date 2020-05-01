import React from 'react';

import Routes from './routes';
import { CreateDataBaseService } from './services/createDataBaseService';

function App() {
  CreateDataBaseService();
  return <Routes />;
}

export default App;

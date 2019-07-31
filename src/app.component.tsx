import React from 'react';

import './app.styles.css';
import 'antd/dist/antd.css';

import { BookmarkForm } from './form/bookmark-form.component';

function App() {
  return (
    <div className="App">
      <BookmarkForm />
    </div>
  );
}

export default App;

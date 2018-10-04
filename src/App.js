import React from 'react';
import Button from './components/button';

function App() {
  return (
    <div>
      <section>
        <legend>Buttons</legend>
        <div>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button success>Success</Button>
          <Button warning>Warning</Button>
          <Button error>Error</Button>
        </div>
      </section>
    </div>
  );
}

export default App;

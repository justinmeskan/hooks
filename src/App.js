import React, {useState} from 'react';


function App() {
  const [hookState, stateSetter] = useState('');

  return (
    <form>
      <input type='text' value={hookState} onChange={e => stateSetter(e.target.value)}> 

      </input>
    </form>
  );
}

export default App;

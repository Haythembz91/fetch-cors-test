import { useEffect, useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  const getName = async () => {
    try {
      const response = await fetch('http://localhost:8000/name');
      if (response.status === 200) {
        const data = await response.json();
        setName(data.name);
      }
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    getName();
  }, []);

  return (
    <div>
      <p>{name} is the best</p>
    </div>
  );
};

export default App;

import { useEffect } from 'react';

function App() {
  const url =
    'https://weatherforecast-demo-api.azurewebsites.net/weatherforecast';

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    var response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();

      console.log(data);
    } else {
      console.log(response.status);
    }
  };
}

export default App;

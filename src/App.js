import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.sampleapis.com/coffee/hot`)
      .then((response) => response.json())
      .then((responseData) => setData(responseData));
  }, []);

  if (!data) return <h1>Loading...</h1>;
  return (
    <div className="space">
      <h1>Coffee Data API ☕️</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;

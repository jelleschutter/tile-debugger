import React from 'react';
import './App.css';
import LeafletMap from './features/leafletMap/LeafletMap';

function App() {
  return (
    <LeafletMap center={[0, 0]} zoom={2}></LeafletMap>
  );
}

export default App;

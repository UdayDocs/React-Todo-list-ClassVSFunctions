import React from 'react';
import FunctionalInput from './components/FunctionalInput';
import ClassInput from './components/ClassInput';
import './App.css';

export default function App() {
  return (
    < div className="container">
      <FunctionalInput name="Functional component!" />
      <div className="divider" />
      <ClassInput name="Class based component!" />
    </div>
  );
}

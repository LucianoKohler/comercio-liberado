import React from 'react';
import './styles.css'; //TailwindCSS
import RoutesRoot from './routes';

export default function App() {
  document.title = "Comércio Liberado"
  document.body.style.backgroundColor = "#f3f4f6"
  return (
    <RoutesRoot />
  )
}

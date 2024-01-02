import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Discord = () => {
  return ("dh=0d793f45c157b3e076524ade93f6ee2940926caa")
}

export default function Dom() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<App />} />
          <Route path="/.well-known/discord" element={<Discord />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<Dom />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

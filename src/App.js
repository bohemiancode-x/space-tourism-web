import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//pages
import Home from './pages/home/Home'
import Crew from './pages/crew/Crew'
import Destination from './pages/destination/Destination'
import Technology from './pages/technology/Technology'
import NotFoundPage from './pages/NotFoundPage'

//components
import Navbar from './components/Navbar'
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)

  const fetchData = async () => {
    try {
      const res = await fetch('/data.json');
      const data = await res.json();
      setIsPending(false)
      setData(data)
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App h-[100%]">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crew/*" element={<Crew data={data} isPending={isPending} />} />
          <Route path="/destination/*" element={<Destination data={data} isPending={isPending} />} />
          <Route path="/technology/*" element={<Technology data={data} isPending={isPending} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

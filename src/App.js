import React, { useEffect, useState } from 'react';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from './components/Section/Section';
import { fetchTopAlbums, fetchNewAlbums } from "./api/api";
import styles from "./App.module.css";


function App() {

  const [data, setData] = useState([]);
  const [newdata, setNewData] = useState([]);

  const generateData = async() => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch(err) {
      console.error(err);
    }
  }
  const generateNewData = async() => {
    try {
      const res = await fetchNewAlbums();
      setNewData(res);
    } catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    generateData();
    generateNewData();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section data={data} type="album" title="Top Albums"/>
        <Section data={newdata} type="album" title="New Albums"/>
      </div>
    </>
  );
}

export default App;


// API endpoint -  https://qtify-backend-labs.crio.do/albums/top

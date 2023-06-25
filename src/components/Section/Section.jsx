import React, { useState } from 'react';
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { Box, CircularProgress } from '@mui/material';
import Carousel from '../Carousel/Carousel';

const Section = ({title, data, type}) => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <div>
            <div className={styles.header}>
                <h3>{title}</h3>
                <h4 className={styles.toggleText} onClick={handleToggle}>
                    {!toggle ? "Show All" : "Collapse All"}
                </h4>
            </div>
            {data.length === 0 ? (
                <Box sx = {{ display: "flex" }}>
                    <CircularProgress />    
                </Box>
            ) : 
            <div className={styles.cardsWrapper}>
                {toggle ? <div className={styles.wrapper}>
                    {
                        data.map((item) => {
                            return (
                                <Card data={item} type={type}/>
                            )
                        })
                    }
                </div> : (<Carousel data={data} component={(data) => <Card data={data} type={type}/>}/>)}
            </div> }
        </div>
    );
}

export default Section;

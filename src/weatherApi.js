import React, { useState, useEffect } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    margin: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Weather() {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/group?id=6167865,6077243,6173331&units=metric&appid=f5dcee5df482f60416ba0a008e8a66d0`
            )
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <Box>
            {weatherData ? (
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 12, sm: 12, md: 3 }} direction="row" justifyContent="center">
                    {weatherData.list.map((item) => (
                        <Grid item key={item.id}>
                            <Item>
                                <h2>{item.name}</h2>
                                <p>{item.weather[0].description}</p>
                                <p>{item.main.temp} °C</p>
                            </Item>
                        </Grid>
                    ))}
                </Grid>
            ) : (
                <p>Loading...</p>
            )}
        </Box>
    );
}

export default Weather;

// src/pages/IndianIndexPage.js
import React from 'react';
import { Grid, Container, Paper, Typography } from '@mui/material';
import './IndianIndexPage.css';
import niftyfifty from '../assets/nifty-50.PNG';

const IndianIndexPage = () => {
  // Dummy information about Nifty 50
  const nifty50Info = `
    The Nifty 50 is the flagship index on the National Stock Exchange (NSE), which tracks the performance of 50 large-cap Indian companies across various sectors. It is one of the leading stock market indices in India and is widely followed by investors and traders for gauging the overall market sentiment and trends.

    Constituents of the Nifty 50 index include some of the most well-known and influential companies in India, spanning sectors such as banking, information technology, pharmaceuticals, consumer goods, and more. The index is market capitalization-weighted, meaning that the companies with higher market capitalization have a greater impact on the index's movements.
  `;

  return (
    <Container className="indian-index-container">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper className="index-info" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Nifty 50
            </Typography>
            <Typography variant="body1" component="p" paragraph>
              {nifty50Info}
            </Typography>
            {/* Add more details about Nifty 50 as needed */}
          </Paper>
        </Grid>
        {/* Second column for Nifty 50 chart */}
        <Grid item xs={12} md={8}>
          {/* Your chart component or image can go here */}
          <Paper className="index-chart" elevation={3}>
            <Typography variant="h5" component="h2" gutterBottom>
              Nifty 50 Chart
            </Typography>
            <div className="chart-placeholder">
              {/* Replace the placeholder with your actual chart component or image */}
              <img src={niftyfifty} type="PNG"  alt="Nifty 50 Chart" style={{ width: '100%' }} />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default IndianIndexPage;

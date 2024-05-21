import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderSection.css';

const cardData = [
  { id: 1, title: 'Nifty 50', image: 'https://via.placeholder.com/150', link: '/indian-index' },
  { id: 2, title: 'Nifty Bank', image: 'https://via.placeholder.com/150', link: '#' },
  { id: 3, title: 'Fin Nifty', image: 'https://via.placeholder.com/150', link: '#' },
  { id: 4, title: 'Nifty Pharma', image: 'https://via.placeholder.com/150', link: '#' },
  { id: 5, title: 'Nifty IT', image: 'https://via.placeholder.com/150', link: '#' },
  { id: 6, title: 'Sensex', image: 'https://via.placeholder.com/150', link: '#' },
];

function SliderSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Box className="slider-section">
      <Slider {...settings}>
        {cardData.map(card => (
          <Card 
            key={card.id} 
            className="slider-card"
            component={Link}
            to={card.link}
            style={{ cursor: card.link !== '#' ? 'pointer' : 'default' }}
          >
            <CardMedia
              component="img"
              height="140"
              image={card.image}
              alt={card.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default SliderSection;

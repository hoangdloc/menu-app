import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { Box, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import React from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import MyEmpty from '../empty';

interface MyCarouselProps {
  imagePaths: string[]
  parentAltText: string
}

const NoImageStyles = styled(Box)(({ theme }) => ({
  height: '30%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.mode === 'light' ? grey[100] : grey[900]
}));

const MyCarousel: React.FC<MyCarouselProps> = ({
  imagePaths,
  parentAltText
}) => {
  if (imagePaths != null) {
    return (
      <Box
        sx={(theme) => ({
          '& .swiper-button-next, & .swiper-button-prev': {
            color: theme.palette.primary.light
          },
          '& .swiper-pagination-bullet': {
            backgroundColor: theme.palette.primary.light
          }
        })}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView="auto"
          pagination={{ clickable: true }}
          navigation
          autoplay
          grabCursor
        >
          {imagePaths.length > 0
            ? imagePaths.map((imagePath, index) => (
              <SwiperSlide key={index}>
                <img
                  style={{
                    width: '100%',
                    height: '14rem',
                    objectFit: 'cover'
                  }}
                  src={imagePath}
                  alt={`${parentAltText} ${index}`}
                />
              </SwiperSlide>
            ))
            : null}
        </Swiper>
      </Box>
    );
  }

  return (
    <NoImageStyles>
      <MyEmpty
        icon={
          <ImageNotSupportedIcon
            fontSize="large"
            sx={{ width: 30 }}
          />
        }
        description="No image"
      />
    </NoImageStyles>
  );
};

export default MyCarousel;

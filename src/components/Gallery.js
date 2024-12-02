import { Box, Grid2 } from '@mui/material';

const imagePaths = [
  '/assets/pic1.webp',
  '/assets/pic4.webp',
  '/assets/pic3.webp',
  '/assets/pic6.webp',
  '/assets/pic5.webp',
  '/assets/pic2.webp',

];

const ImageGallery = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: '100%' }}
    >
      <Grid2
        container
        spacing={2}
      >
        {imagePaths.map((src, index) => (
          <Grid2
            item
            key={index}
            size={[6,6,4]}
          >
            <Box
              component="img"
              src={src}
              alt={`Image ${index}`}
              sx={{
                width: '100%',
                height: '70vh',
                objectFit: 'cover',
                borderRadius: 2,
                boxShadow: 3,
              }}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default ImageGallery;

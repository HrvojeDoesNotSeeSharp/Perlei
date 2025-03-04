import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Grid2, Typography } from '@mui/material';

export default function StandardImageList() {
  return (
    <Grid2 id="gallery"
      container
      direction="column"
      size={12} maxWidth={'xl'}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: "5%"
      }}>
      <Typography variant="h4" gutterBottom>
        Galerija
      </Typography>
      <Grid2 size={11} sx={{ display: { xs: 'none', md: 'grid' } }} maxWidth="xl">
        <ImageList cols={3} gap={9}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                style={{ borderRadius: '10px' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid2>
      <Grid2 size={11} sx={{ display: { xs: 'grid', md: 'none' } }}>
        <ImageList cols={1}>
          {itemData.map((item) => (
            <ImageListItem sx={{ pb: 1 }} key={item.img}>
              <img
                //crossOrigin="anonymous"
                //referrerPolicy="no-referrer"
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid2>
    </Grid2>
  );
}

const itemData = [
  {
    img: 'https://i.imgur.com/xp1w9pV.jpg',
    title: 'Breakfast',
  },
  {
    img: 'https://i.imgur.com/kZ7jfFN.jpg',
    title: 'Burger',
  },
  {
    img: 'https://i.imgur.com/04HRNus.jpg',
    title: 'Camera',
  },
  {
    img: 'https://i.imgur.com/sn9ZzOv.jpg',
    title: 'Coffee',
  },
  {
    img: 'https://i.imgur.com/k1JTpGZ.jpg',
    title: 'Hats',
  },
  {
    img: 'https://i.imgur.com/3rhOE6b.jpg',
    title: 'Honey',
  },
  {
    img: 'https://i.imgur.com/feYMbDc.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://i.imgur.com/aqcmBw5.jpg',
    title: 'Fern',
  },
  {
    img: 'https://i.imgur.com/ajzKVO8.jpg',
    title: 'Mushrooms',
  }
];

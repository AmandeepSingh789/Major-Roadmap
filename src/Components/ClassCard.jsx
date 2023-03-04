import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  components: {
    JoyChip: {
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          ...(ownerState.variant === 'solid' &&
            ownerState.clickable && {
              color: 'rgba(255 255 255 / 0.72)',
              '&:hover': {
                color: '#fff',
              },
              '&.Mui-disabled': {
                opacity: 0.6,
              },
            }),
        }),
      },
    },
  },
});

const ClassCard = (props) => {
  return (
    <div>
      <Card variant="outlined" sx={{ width: 320 }}>
      <Typography level="h1" fontSize="xl" sx={{ mb: 0.5 }}>
        {props.Code}
      </Typography>
      <Typography level="body2">{props.Name}</Typography>
      <IconButton
        aria-label="bookmark Bahamas Islands"
        variant="plain"
        color="neutral"
        size="sm"
        sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
      >
        <BookmarkAdd />
      </IconButton>
      {/* <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio> */}
      <Box sx={{ display: 'flex' }}>
        <div>
          <Typography level="body3">Difficulty Level:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            {props.Level}
          </Typography>
          <Typography fontSize="md" fontWeight="lg">
            {props.PreReqs}
          </Typography>
          <Typography fontSize="lg" fontWeight="lg" >
            {props.GE}
          </Typography>
          <Typography fontSize="lg" fontWeight="lg" >
            {props.QO}
          </Typography>
        </div>
        <Button
          variant="solid"
          size="xl"
          color="primary"
          aria-label="Explore"
          sx={{ ml: 'auto', fontWeight: 600 }}
          href={props.Link}
          
        >
          <a href={props.Link} target="_blank" className='border-2 p-2  border-[#66FCF1] rounded hover:bg-[#1F2833] ml-4'>
            Know More
            </a>
        </Button>
      </Box>
    </Card>
    </div>
  )
}

export default ClassCard
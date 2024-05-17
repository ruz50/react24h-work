import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

export default function VariantButtonGroup({postShow,commShow,albumsShow,photosShow,todosShow,usersShow}) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="Basic button group">
        <Button onClick={()=>postShow()}>posts</Button>
        <Button onClick={()=>commShow()}>comments</Button>
        <Button onClick={()=>albumsShow()}>albums</Button>
        <Button onClick={()=>photosShow()}>photos</Button>
        <Button onClick={()=>todosShow()}>todos</Button>
        <Button onClick={()=>usersShow()}>users</Button>
      </ButtonGroup>
    </Box>
  );
}

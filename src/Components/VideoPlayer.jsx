import { Box } from '@mui/material';
import React from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const VideoPlayer = () => {

  const { videoid } = useParams();
  return (
    <Box sx={{ position: 'relative',  top: 0, height: '100vh' }}>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${videoid}`}
        width="100%"
        height="100%"
        muted={false}
        playsinline={true}
        playing={true}
        config={{
          youtube: {
            playerVars: {
              enablejsapi: 1,
              modestbranding: 0,
              playsinline: 0,
              rel:0,
            }
          }
        }}
      />
    </Box>
  )
}


export default VideoPlayer

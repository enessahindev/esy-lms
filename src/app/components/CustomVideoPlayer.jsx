// components/CustomVideoPlayer.js
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import PropTypes from 'prop-types';

const CustomVideoPlayer = ({ url, controls, width, height }) => {
  const [playing, setPlaying] = useState(false);
  const playerRef = useRef(null);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        controls={controls}
        width={width}
        height={height}
        playing={playing}
      />
    </div>
  );
};

CustomVideoPlayer.propTypes = {
  url: PropTypes.string.isRequired,
  controls: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default CustomVideoPlayer;

import React from "react"
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import song1 from 'C:/reactapp/spotify-app/spotifi-app/src/songs/Everything.mp3';
import song2 from 'C:/reactapp/spotify-app/spotifi-app/src/songs/SomethingJustLikeThis.mp3';
import song3 from 'C:/reactapp/spotify-app/spotifi-app/src/songs/AskyFullOfStars.mp3';


const playlist = [
  { src: song1 },
  { src: song2 },
  { src: song3 },
]

export const MusicPlayer = (props) => {
  const { onSongChange } = props;
  const [currentTrack, setTrackIndex] = React.useState(0)
  const handleClickNext = () => {
    console.log('click next');
    onSongChange(currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );

  };

  const handleEnd = () => {
    console.log('end');
    onSongChange(currentTrack < playlist.length - 1 ? currentTrack + 1 : 0);
    setTrackIndex((currentTrack) =>
      currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    );

  }
  return (

    <AudioPlayer
      volume="0.7"
      src={playlist[currentTrack].src}
      showSkipControls
      onClickNext={handleClickNext}
      onEnded={handleEnd}
      onError={() => { console.log('play error') }}
    />
  );
}

export default { MusicPlayer };


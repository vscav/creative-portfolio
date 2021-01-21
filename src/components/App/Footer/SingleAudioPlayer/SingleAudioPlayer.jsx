import * as React from "react";

import Blob from "./Blob";
import Tooltip from "components/App/Tooltip";

import { AudioContainer } from "./styles";

const SingleAudioPlayer = (props) => {
  const [isPlaying, setPlaying] = React.useState(props.autoPlay);
  const [toggleCount] = React.useState(0);

  React.useEffect(() => {
    const audio = document.getElementsByClassName("audio-element")[0];
    audio.volume = props.volume;
  }, [props.volume]);

  const play = (audio) => {
    setPlaying(true);
    audio.play();
  };

  const pause = (audio) => {
    setPlaying(false);
    audio.pause();
  };

  const fadeIn = (audio) => {
    if (props.autoPlay === false && toggleCount === 0) {
      setPlaying(true);
      audio.volume = 0.0;
      audio.play();
    }
    setPlaying(true);
    const fadeAudio = setInterval(() => {
      if (audio.volume < props.volume) {
        audio.volume = parseFloat((audio.volume + 0.1).toFixed(1));
      }

      if (audio.volume === props.volume) {
        clearInterval(fadeAudio);
      }
    }, 200);
  };

  const fadeOut = (audio) => {
    setPlaying(false);
    const fadeAudio = setInterval(() => {
      if (audio.volume > 0.0) {
        audio.volume = parseFloat((audio.volume - 0.1).toFixed(1));
      }

      if (audio.volume === 0.0) {
        clearInterval(fadeAudio);
      }
    }, 200);
  };

  const toggle = () => {
    const audio = document.getElementsByClassName("audio-element")[0];
    props.fade
      ? isPlaying
        ? fadeOut(audio)
        : fadeIn(audio)
      : isPlaying
      ? pause(audio)
      : play(audio);
  };

  return (
    <AudioContainer>
      <Blob clickHandler={toggle} active={isPlaying} size={35}></Blob>
      <Tooltip
        active={isPlaying}
        variant1={"Mute the sound"}
        variant2={"Activate the sound"}
      />
      <audio
        className="audio-element"
        loop={props.loop}
        autoPlay={props.autoPlay}
        onPlay={() => {
          setPlaying(true);
        }}
        onEnded={() => {
          setPlaying(false);
        }}
      >
        <source src={props.file} type="audio/mpeg"></source>
      </audio>
    </AudioContainer>
  );
};

SingleAudioPlayer.defaultProps = {
  loop: false,
  autoPlay: false,
  fade: false,
  volume: 1,
};

export default SingleAudioPlayer;

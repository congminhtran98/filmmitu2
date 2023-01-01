import React from 'react';
import PropTypes from 'prop-types';
import plyr from 'plyr';

import 'plyr/dist/plyr.css';
import './Player.css';

class Player extends React.Component {
  componentDidMount() {
    this.player = new plyr('.js-plyr', this.props.options);
    this.player.source = this.props.sources;
  }

  componentWillUnmount() {
    this.player.destroy();
  }

  render() {
    return <video className="js-plyr plyr"></video>;
  }
}

Player.defaultProps = {
  options: {
    controls: [
      'rewind',
      'play',
      'fast-forward',
      'current-time',
      'progress',
      'duration',
      'mute',
      'volume',
      'captions',
      'settings',
      'pip',
      'fullscreen',
    ],
    i18n: {
      restart: 'Restart',
      rewind: 'Rewind {seektime}s',
      play: 'Play',
      pause: 'Pause',
      fastForward: 'Forward {seektime}s',
      seek: 'Seek',
      seekLabel: '{currentTime} of {duration}',
      played: 'Played',
      buffered: 'Buffered',
      currentTime: 'Current time',
      duration: 'Duration',
      volume: 'Volume',
      mute: 'Mute',
      unmute: 'Unmute',
      enableCaptions: 'Enable captions',
      disableCaptions: 'Disable captions',
      download: 'Download',
      enterFullscreen: 'Enter fullscreen',
      exitFullscreen: 'Exit fullscreen',
      frameTitle: 'Player for {title}',
      captions: 'Captions',
      settings: 'Settings',
      menuBack: 'Go back to previous menu',
      speed: 'Speed',
      normal: 'Normal',
      quality: 'Quality',
      loop: 'Loop',
    },
  },
  sources: {
    type: 'video',
    sources: [
      {
        src: 'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4',
        // src: video2,
        type: 'video/mp4',
        size: 720,
      },
      {
        src: 'https://cdn.glitch.me/cbf2cfb4-aa52-4a1f-a73c-461eef3d38e8/1080.mp4',
        // src: video1,
        type: 'video/mp4',
        size: 360,
      },
    ],
    tracks: [
      {
        kind: 'captions',
        label: 'English',
        srcLang: 'en',
        // src: "https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt",
        src: 'https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/en.vtt',
        default: true,
      },
      {
        kind: 'captions',
        label: 'French',
        srcLang: 'fr',
        src: 'https://cdn.jsdelivr.net/gh/naptestdev/video-examples@master/fr.vtt',
      },
    ],
  },
};

Player.propTypes = {
  options: PropTypes.object,
  sources: PropTypes.object,
  source: PropTypes.func,
  destroy: PropTypes.func,
};

export default Player;

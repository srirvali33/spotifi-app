import Card from 'react-bootstrap/Card';
import '../App.css';
import { MusicPlayer } from './MusicPlayer';
import { data } from '../data';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faEllipsisVertical, faXmark, faCirclePlus, faShuffle, faForwardStep, faBackwardStep, faCirclePause, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

export function CardComponent() {
  const [data1, setData] = useState({});

  let imageMap = {
    "image2": 'https://a0.anyrgb.com/pngimg/1012/846/a-head-full-of-dreams-tour-head-full-of-dreams-tour-head-full-of-dreams-sky-full-of-stars-chris-martin-coldplay-geometrical-overlapping-circles-grid-album-music-thumbnail.png',
    "image1": "https://i.scdn.co/image/ab67616d0000b2731a04a48d7e40cfa3cd321874"
  }

  useEffect(() => {
    setData(data[0])
  }, [])

  function onSongChange(input) {
    setData(data[input])
  }

  return (
    <Card style={{ width: '500px', height: '700px', background: '#282c34', 'margin-left': '30%', 'margin-top': '6%', 'color': "#868686" }}>
      <Card.Body>
        <div>
          <div style={{ "margin-left": "3px", "margin-right": "3px" }}><FontAwesomeIcon icon={faAngleDown} style={{ color: "#868686", float: "left" }} />PLAYING FROM PLAYLIST<FontAwesomeIcon icon={faEllipsisVertical} style={{ color: "#868686", float: 'right' }} /></div>
          <p>Coldplay Mix</p>
        </div>


        <Card.Img variant="top" src={data1 && data1.image == "image1" ? imageMap["image1"] : imageMap["image2"]} style={{ width: '300px', height: '300px' }} />
        <Card.Text>
          <div><span>{data1 && data1.title}</span><span className='ml-5'> <FontAwesomeIcon icon={faCirclePlus} style={{ color: "#f1f4f9", }} /></span></div>
          <div>{data1 && data1.artist}</div>
        </Card.Text>
        <div style={{ width: '500px', height: '500px' }}>
          <MusicPlayer onSongChange={(input) => onSongChange(input)} />
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
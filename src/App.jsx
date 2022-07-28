 import { useState, useEffect, useRef } from 'react'
import Controls from './components/Controls';
import Toggle from './components/Toggle';
import Display from './components/Display';
import RangeSlider from './components/RangeSlider';
import PadBank from './components/PadBank';
import './App.css'

function App(props) {
  const [powerOn, setPowerOn] = useState(true);
  const [bank, setBank] = useState('heaterKit');
  const [kitList, setKitList] = useState([]);
  const [displayText, setDisplayText] = useState('Ready Whenever You Are!');

  const node = useRef();

  useEffect(()=> {
    setDisplayText(powerOn ? 'Power On' : 'Power Off');
  }, [powerOn]);

  useEffect(()=> {
    fetch('drumKit.json')
    .then(res => res.json())
    .then(data => {
      setKitList(data[bank]);
    })
    setDisplayText('Bank: ' + bank);
  }, [bank]);

  useEffect(()=>{
    document.addEventListener('keydown', handleKeyDown);
  }, [])

  const handleKeyDown = (e) => {
    const isValidKey = kitList.some(item => item.keyboardKey.toLowerCase() === e.key.toLowerCase());
    if(isValidKey) {
      const targetIdentifier = '#' + e.key.toUpperCase();
      const audioElement = node.current.querySelector(targetIdentifier);
      audioElement && audioElement.play() && setDisplayText(audioElement.parentNode.id);
    }
  }

  const handleClick = (e) => {
    const audioElement = e.target.querySelector('audio');
    audioElement && audioElement.play() && setDisplayText(audioElement.parentNode.id);
  }

  const handleVolume = (e) => {
    const volume = e.target.value ? e.target.value : 0;
    setDisplayText(`Volume: ${volume}`);
    const audioElements = node.current.querySelectorAll('audio');
    if(audioElements.length > 0) {
      audioElements.forEach((audio, index) => {
        audioElements[index].volume = volume * 0.01;
      });
    } 
  }

  const handlePower = (e) => {
    const powerOn = e.target.checked;
    setPowerOn(powerOn);
  }

  const handleBank = (e) => {
    const bank = e.target.checked ? 'smoothPianoKit' : 'heaterKit';
    setBank(bank);
  }

  const appStyles = [
    {
      key: 'border',
      value: 'border-2 border-solid border-orange-500'
    },
    {
      key: 'display',
      value: 'flex'
    }
  ].map(item => item.value).join(' ');

  return (
    <div 
      id={props.id}
      ref={node}
      className={'App ' + appStyles}>
      <PadBank
        disabled={!powerOn}
        kitList={kitList}
        handleClick={handleClick}
      />
      <Controls>
        <Toggle 
          id="power-toggle"
          label="Power"
          changeHandler={handlePower}
          />
        <Display
          id="display"
          text={displayText}/>
        <RangeSlider 
          id="volume-slider"
          label="Volume"
          changeHandler={handleVolume}
          disabled={!powerOn}
          />
        <Toggle 
          id="bank-toggle"
          label="Bank"
          changeHandler={handleBank}
          disabled={!powerOn}
          />
      </Controls>
    </div>
  )
}

export default App

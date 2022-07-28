import { useEffect } from "react";

function DrumPad(props) {

    const drumPadStyles = [
        {
          key: 'display',
          value: 'flex-initial w-[100px] shrink-0'
        },
        {
          key: 'border',
          value: 'border-2 border-solid border-gray-300'
        }
      ].map(item => item.value).join(' ');

    return (
        <button 
            disabled={props.disabled}
            key={props.keyboardKey}
            id={props.name.replaceAll(' ','-')}
            onClick={props.clickHandler}
            className={'drum-pad ' + drumPadStyles}>
            <audio 
                id={props.keyboardKey} 
                className="clip"
                src={props.file}></audio>
            {props.keyboardKey}
        </button>
    )
}
export default DrumPad;
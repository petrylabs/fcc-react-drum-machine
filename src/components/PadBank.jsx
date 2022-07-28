import DrumPad from './DrumPad';

function PadBank(props) {
    
    const padBankStyles = [
        {
          key: 'display',
          value: 'flex flex-row flex-wrap w-[304px]'
        },
        {
          key: 'border',
          value: 'border-2 border-solid border-gray-300'
        }
      ].map(item => item.value).join(' ');

    return(
        <div 
            className={'drum-pad-container ' + padBankStyles}>
            {props.kitList.length == 0 
            ? <div>Loading...</div> 
            : props.kitList.map(item => 
                <DrumPad
                disabled={props.disabled}
                key={item.keyboardKey}
                keyboardKey={item.keyboardKey}
                name={item.name}
                file={item.file}
                clickHandler={props.handleClick}
                />
            )
            }
      </div>
    )
}
export default PadBank;
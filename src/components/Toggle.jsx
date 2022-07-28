import { useEffect } from "react";
import Checkbox from './Checkbox';
import Slider from './Slider';

function Toggle(props) {

    const toggleStyles = [
        {
            key: 'position',
            value: 'relative'
        },
        {
            key: 'display',
            value: 'inline-block'
        },
        {
            key: 'width',
            value: 'w-[60px]'
        },
        {
            key: 'height',
            value: 'h-[34px]'
        }
    ].map(item=>item.value).join(' ');

    return (
        <div>
            <span>{props.label}: </span>
            <label className={'switch ' + toggleStyles}>
                <Checkbox 
                    disabled={props.disabled}
                    changeHandler={props.changeHandler}
                    checked={props.checked}/>
                <Slider/>
            </label>
        </div>
    )
}
export default Toggle;
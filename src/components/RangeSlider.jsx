function RangeSlider(props) {

    const sliderContainerStyles = [
        {
            key: 'width',
            value: 'w-[100%]'
        }
    ].map(item=>item.value).join(' ');
    
    const rangeSliderStyles = [
        {
            key: 'appearance',
            value: 'appearance-none'
        },
        {
            key: 'width',
            value: 'w-[100%]'
        },
        {
            key: 'height',
            value: 'h-[34px]'
        },
        {
            key: 'border',
            value: 'rounded-[24px]'
        },
        {
            key: 'padding',
            value: 'pl-[4px] pr-[4px]'
        },
        {
            key: 'background',
            value: 'bg-[#ccc]'
        },
        {
            key: 'outline',
            value: 'outline-none'
        },
        {
            key: 'opacity',
            value: 'opcity-[0.7]'
        },
        {
            key: 'transition',
            value: 'transition duration-[0.2s] transition-opacity'
        }
    ].map(item=>item.value).join(' ');

    return (
        <div>
            <span>{props.label}: </span>
            <div className={'slider-container ' + sliderContainerStyles}>
                <input 
                    type="range"
                    min="0"
                    max="100"
                    //value="50"
                    onChange={props.changeHandler}
                    className={'slider ' + rangeSliderStyles}
                    id={props.id}
                    disabled={props.disabled}/>
            </div>
        </div>
    )
}
export default RangeSlider;
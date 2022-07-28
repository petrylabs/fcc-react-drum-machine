function Slider(props) {
    const sliderStyles = [
        {
            key: 'position',
            value: 'absolute'
        },
        {
            key: 'placement',
            value: 'top-0 right-0 bottom-0 left-0'
        },
        {
            key: 'background',
            value: 'bg-[#ccc]'
        },
        {
            key: 'cursor',
            value: 'cursor-pointer'
        },
        {
            key: 'border',
            value: 'rounded-[24px]'
        },
        {
            key: 'transition',
            value: 'transition duration-[0.4s]'
        },
        ,
        {
            key: 'before:transition',
            value: 'before:transition duration-[0.4s]'
        },
        {
            key: 'before:position',
            value: 'before:absolute'
        },
        {
            key: 'before:content',
            value: 'before:content-[""]'
        },
        {
            key: 'before:height',
            value: 'before:h-[26px]'
        },
        {
            key: 'before:width',
            value: 'before:w-[26px]'
        },
        {
            key: 'before:placement',
            value: 'before:left-[4px] before:bottom-[4px]'
        },
        {
            key: 'background',
            value: 'before:bg-[#FFF]'
        },
        {
            key: 'before:border',
            value: 'before:rounded-[50%]'
        },
        {
            key: 'peer-checked:before:transform',
            value: 'peer-checked:before:translate-x-[26px]'
        },
        {
            key: 'peer-checked:background',
            value: 'peer-checked:bg-[#2196F3]'
        },
        {
            key: 'peer-focus:outline',
            value: 'peer-focus:outline peer-focus:outline-1 peer-focus:outline-offset-2'
        }
    ].map(item=>item.value).join(' ');
    return (
        <span className={'slider ' + sliderStyles}></span>
    )
}
export default Slider;
function Checkbox(props) {
    
    const checkboxStyles = [
        {
            key: 'height',
            value: 'h-0'
        },
        {
            key: 'width',
            value: 'w-0'
        },
        {
            key: 'opacity',
            value: 'opacity-0'
        },
        {
            key: 'peer-checked:transform',
            value: 'translate-x-[26px]'
        }
    ].map(item=>item.value).join(' ');
    
    return (
        <input 
            disabled={props.disabled}
            type='checkbox' 
            onChange={props.changeHandler}
            className={'checkbox peer ' + checkboxStyles}  
            checked={props.checked} />
    )
}
export default Checkbox;
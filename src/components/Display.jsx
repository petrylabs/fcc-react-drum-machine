function Display(props) {
    const displayStyles = [
        {
            key: 'border',
            value: 'border-2 border-solid border-[#ccc]'
        },
        {
            key: 'background',
            value: 'bg-green-500'
        },
        {
            key: 'color',
            value: 'text-black'
        },
        {
            key: 'font',
            value: 'font-mono'
        },
        {
            key: 'height',
            value: 'min-h-[100px]'
        }
    ].map(item=>item.value).join(' '); 
    return (
        <div
            id={props.id} 
            className={'display ' + displayStyles}>
            {props.text}
        </div>
    )
}
export default Display;
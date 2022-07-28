function Controls(props) {
    const controlsContainerStyles = [
        {
          key: 'display',
          value: 'flex flex-col'
        },
        {
          key: 'width',
          value: 'w-40'
        }
    ].map(item => item.value).join(' ');
    return (
        <div className={'controls-wrapper ' + controlsContainerStyles}>
            {props.children}
        </div>
    )
}
export default Controls;
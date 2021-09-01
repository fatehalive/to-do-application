function Button(props) {
  const {
    className,
    onClick,
    fontAwesome,
    text } = props;
  return (
    <button className={className} onClick={onClick}>
      <i className={fontAwesome}>{text}</i>
    </button>
  )
}

export default Button;

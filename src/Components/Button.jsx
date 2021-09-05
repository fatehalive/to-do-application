import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

function Button(props) {
  const {
    className,
    onClick,
    type } = props;

    let icons;
    if (type === 'Update') {
      icons = <CreateIcon />
    } else if (type === 'Delete') {
      icons = <DeleteIcon />
    }

  return (
    <button className={className} onClick={onClick}>
      {icons}
    </button>
  )
}

export default Button;

import "./Card.css"

function Card(props) {
  const classes = 'card ' + props.className; // 'card' is a fallback class name, in case the className prop is not passed in
  return <div className={classes}>{props.children}</div>;
}

export default Card;
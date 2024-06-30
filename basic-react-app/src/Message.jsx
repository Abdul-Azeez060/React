export default function Message({ name, color }) {
  let style = { color: color };
  return <h3 style={style}>Hi there, {name}</h3>;
}

export default function Greeting(props) {
  console.log(props);
  return (
    <div>
      <span>Hello {props.children}</span>
      <div className="">{props.another}</div>
    </div>
  );
}

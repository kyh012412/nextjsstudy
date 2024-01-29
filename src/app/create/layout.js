//이때 무조건 layout페이지는 props를 가지고 있어야함
export default function Layout(props) {
  return (
    <form>
      <h2>Createform h2</h2>
      {props.children}
    </form>
  );
}


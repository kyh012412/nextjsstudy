import Image from "next/image";

export default function Home() {
  return (
    <>
      <h2>Welcome</h2>
      Hello, WEB!<br/>
      <img src="/pngimg.png"></img>
    </>
  );
}
//여기서 리턴한 값을 layout.js에 있는 {children}자리에서 사용
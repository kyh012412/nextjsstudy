import "./globals.css";

export const metadata = {
  title: "Web tutorial",
  description: "Generated by kyh",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
      <h1><a href="/">WEB</a></h1>
      <ol>
        <li><a href="/read1">html</a></li>
        <li><a href="/read2">CSS</a></li>
      </ol>
      {children}
        <ul>
          <li><a href="/create">Create</a></li>
          <li><a href="/update/1">Update</a></li>
          <li><input type="button" value="delete" /></li>
        </ul>
      </body>
    </html>
  );
}
//이 페이지가 기본적인 골격을 구성
//공통으로 출력되야하는것이 있다면 이 쪽 페이지에서 구현하는것이 좋음

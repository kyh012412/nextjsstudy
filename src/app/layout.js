import Link from "next/link";
import "./globals.css";
import { Control } from "./Control";

//metedata는 서버컴포넌트이다.
//"use client"와 충돌
export const metadata = {
  title: "Web tutorial",
  description: "Generated by kyh",
};

export default async function RootLayout({ children }) {
    //한번만 실행해야하니 빈배열을 두번째 매개변수로 사용한 useEffect사용 
  const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+'topics',{cache:'no-store'});
  //두번째 인자로
  //{next:{revalidate:0}}
  //캐시를 0초동안만 유지하겠다.
  //또는
  //{cache:'no-store'}


  //await가 들어가면 fetch가 끝날때까지 기다림
  const topics = await resp.json();
  //서버쪽에서 데이터를 다 가져와서 완성된 html만 client에게 보낸다.
  //client쪽에서 javascript disable을 해도 완성된 html이기 때문에 필요한 정보들이 다 들어있다.
  return (
    <html>
      <body>
      <h1><Link href="/">WEB</Link></h1>
      <ol>
        {topics.map((topic)=>{          
          return <li key={topic.id}><Link href={`/read/${topic.id}`}>{topic.title}</Link></li>
        })}
      </ol>
      {children}
        <Control />
      </body>
    </html>
  );
}
/*****
이 페이지가 기본적인 골격을 구성
공통으로 출력되야 하는 것이 있다면
이 쪽 페이지에서 구현하는것이 좋음
a -> Link( next/link 임포트필요)
이미 방문한 페이지를 더 빠르게 방문할 수있다.
웹페이지가 여러개임에도 불구하고 한페이지인것처럼 동작하는것
single page application
nextjs이용하면 Link
*****/

"use client"

import { useRouter } from "next/navigation";

//import { useRouter } from "next/router";
// next 12버전에서 사용하는것
//우리방식에서는 navigation에서 가져와야함

export default function Create() {
  const router = useRouter();
  //onSubmit은 서버에서 못함 유저쪽에서하는것
  return (
    <form onSubmit={(e)=>{
      e.preventDefault(); //서브밋이 실행됫을때 기본동작을 막음
      //e.target = form태그 전체
      const title = e.target.title.value;
      const body = e.target.body.value;
      const options = {
        method: 'POST',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({title,body})
      }

      fetch(`http://localhost:9999/topics`,options)
        .then(res=>res.json())
        .then(result=>{
          console.log(result);
          const lastid = result.id;
          router.push(`/read/${lastid}`)
        });
      }}>
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body"></textarea>
      </p>
      <p>
        <input type="submit" value="create" />
      </p>
    </form>
  );
}
/*****
약속된이름인 page.js를 써야함
함수이름은 아무거나해도 되지만
의미에 맞게 적는것이 좋음
*****/
/*****
http://localhost:3000/create
주소를 가게되면
create폴더밑에 page.js를 찾고
이파일이 있다면 현재경로에서
layout.js와 결합해서부모폴더의 layout.js의 children으로써 결합을 하게됨
하지만 현재 경로(create폴더내)에
layout.js가 없기때문에 상위폴더로 가서 layout.js와 결합해서 출력을 해줌
*****/
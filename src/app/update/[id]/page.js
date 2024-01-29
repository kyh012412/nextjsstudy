"use client"

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');
  useEffect(()=>{
    fetch('http://localhost:9999/topics/'+id,{cache:'no-store'})
    .then(res=>res.json())
    .then(result=>{
      console.log(result);
      setTitle(result.title);
      setBody(result.body);
    });
  },[]);
  //onSubmit은 서버에서 못함 유저쪽에서하는것
  return (
    <form onSubmit={(e)=>{
      e.preventDefault(); //서브밋이 실행됫을때 기본동작을 막음
      //e.target = form태그 전체
      const title = e.target.title.value;
      const body = e.target.body.value;
      const options = {
        //put이나 patch사용
        method: 'PATCH',
        headers:{
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({title,body})
      }

      fetch(`http://localhost:9999/topics/`+id,options)
        .then(res=>res.json())
        .then(result=>{
          console.log(result);
          const last = result.id;
          router.refresh()
          router.push(`/read/${last}`)
        });
      }}>
      <p>
        <input type="text" 
        name="title" 
        placeholder="title" 
        value={title} onChange={e=>{setTitle(e.target.value)}} />
      </p>
      <p>
        <textarea name="body" 
        placeholder="body" 
        value={body} 
        onChange={e=>{setBody(e.target.value)}} ></textarea>
      </p>
      <p>
        <input type="submit" value="update" />
      </p>
    </form>
  );
}
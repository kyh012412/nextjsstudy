npm run build로 배포용을 만들수 있음
이 명령어를 실행하면 배포판이 .next폴더안에 만들어짐 
이제 npm run start 하면 저 배포판을 실행해볼수있음
배포판을 만드니 용량이 개선이됨

이미지같은 정적파일은 public폴더내에 위치시킴
별도의 루트지정이없다면
img파일을 찾을때 public 부터 찾기때문에
/파일이름.파일형식 으로 불러올수 있다.

빠른 백엔드 구축을위해
최상위폴더에 db.json
이하의 내용 
```json
{
    "topics":[
        {"id":1,"title":"html","body":"html is ..."},
        {"id":2,"title":"css","body":"css is ..."}
    ]
}
```

```sh
npx json-server --port 9999 --watch db.json
```

//fetch().then().then();에서 시작
//fetch(url).then(fn).then(fn);
//fetch(url).then(()=>{}).then(()=>{});

```javascript
fetch('http://localhost:9999/topics')
.then((res)=> {
    return res.json();
})
.then(result=>{
    console.log(result)
});
```

---------
10. 글목록 가져오기
- next에서는 서버컴포넌트, 클라이언트 컴포넌트라는 개념이 구분이 되어잇음
- react에서는 18버전부터 서버컴포넌트라는 개념이 추가
- 기존에 구현하던 방식은 아마도 ClientComponent방식일것.
- 만약에 서버컴포넌트에서 ClientCompoent를 사용하려고하면 에러가 발생함
- next에서는 특별한 조치를 하지않으면 ServerComponent로 간주한다.
- 정보를 표현하면서 사용자와 상호작용하지 않는 것은 ServerComponent로 만드는 것이 유리
- ServerComponent내에 사용자와 상호작용하는 버튼이 있을 때 버튼만 새로운 컴포넌트이면서 ClientCompoent로 만드는것이 유리하다.

-----
13. 캐시
- cache: HIT 가 뜨면 캐시를 사용한 것
- cache: MISS 가 뜨면 캐시를 사용하지 않은 것
- cache를 사용하지 않고 다시하려면 revalidating을 사용
```js
  const resp = await fetch('http://localhost:9999/topics',{cache:'no-store'});
  //두번째 인자로
  //{next:{revalidate:0}}
  //캐시를 0초동안만 유지하겠다.
  //또는
  //{cache:'no-store'}
```
14. update & delete 버튼 구현
- 기본적으로 layout.js에서는 [id]를 확인할 수 없다.
- 최상위 layout에서는 props에 param에 id가 주입되지 않는다.

17. .env.local 설정
- .env.local 파일을 만들고 정보를 적어준다.(db정보등)
```.env.local
NEXT_PUBLIC_API_URL=http://localhost:9999/
```
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
export default function Create() {
  return (
    <>
      Create!!
    </>
  );
}

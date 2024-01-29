export default async function Read(props){
    const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`);
    const topic = await resp.json();

    return (
        <>
            <h2>{topic.title}</h2>
            body : {topic.body}
            parameters : {topic.id}
        </>
    );
}
/*****
 * 이 페이지는 유저와 상호작용하지 않는다.
 * 값을 뿌려주기만한다.
*****/
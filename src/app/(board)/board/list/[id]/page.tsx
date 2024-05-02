import {Metadata} from "next";

export const metadata : Metadata = {
    title : "Detail"
}


async function getBoard(id: string) {
    const URL = `http://localhost:8080/rb_boards/${id}`; // 동적으로 ID를 포함하는 URL 생성
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function BoardDetail({params: {id}}: {params: {id: string};}) {
    const board = await getBoard(id);
    return (
        <div>
            <h1>Board Detail {id}</h1>
            {JSON.stringify(board)}
        </div>
    );
}

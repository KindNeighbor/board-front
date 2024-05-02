import {Metadata} from "next";

export const metadata : Metadata = {
    title : "list"
}

const URL = "http://localhost:8080/rb_boards";

async function getBoards() {
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function BoardList() {
    const boards = await getBoards();
    return (
        <div>
            <h1>Board List</h1>
            {JSON.stringify(boards)}
        </div>
    );
}

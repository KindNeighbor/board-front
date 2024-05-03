import {Metadata} from "next";
import Link from "next/link";
import { Key } from "react";

export const metadata: Metadata = {
    title: "list"
}


async function getBoards() {
    const URL = "http://192.168.0.21:8080/rb_boards/";
    const response = await fetch(URL);
    return await response.json();
}

export default async function BoardList() {
    const boards = await getBoards();
    return (
        <div>
            <h1>Board List</h1>
            {
                boards.map((board: { id: Key , title: string
                }) =>
                    <li key={board.id}>
                        <Link href={`/board/list/${board.id}`}>
                            {board.title}
                        </Link>
                    </li>)}
        </div>
    );
}

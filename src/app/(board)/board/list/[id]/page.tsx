import {Metadata} from "next";

export const metadata : Metadata = {
    title : "Detail"
}

export default function BoardDetail({params: {id}}: {params: {id: string};}) {
    return (
        <div>
            Board Detail {id}
        </div>
    );
}

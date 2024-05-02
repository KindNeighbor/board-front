import {Metadata} from "next";

export const metadata : Metadata = {
    title : "home"
}

export default async function Home() {
    return (
        <div>
            <h1>HOME</h1>
        </div>
    );
}

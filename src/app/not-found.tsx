import Image from "next/image";
import Nyam from "/public/naegongNyamNyam.jpg"
import {Metadata} from "next";

export const metadata : Metadata = {
    title : "404 not found"
}

export default function NotFound() {
    return (
        <div>
            <h1> 404 Not found</h1>
            <Image src={Nyam}  alt="내공냠냠"/>
            <h2> 해당 페이지는 내공냠냠 당했습니다.</h2>
        </div>
    );
}
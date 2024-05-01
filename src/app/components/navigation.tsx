"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const path = usePathname();
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link> {path === "/" ? "-현재 위치-" : ""}
                </li>
                <li>
                    <Link href="/board/list">List</Link> {path === "/board/list" ? "-현재 위치-" : ""}
                </li>
            </ul>
        </nav>
    )
}
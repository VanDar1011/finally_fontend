import Link from "next/link";
import { getSession } from "@auth0/nextjs-auth0";
import { clsx } from "clsx";
import "./styleMenuHeader.css";
import SessionHeader from "../session/SessionHeader";
export default async function MenuHeader() {
  const session = await getSession();
  return (
    <div className="menu_header">
      <ul className="menu_link flex gap-8">
        <SessionHeader />
        {session ? (
          <>
            <li className="text-sky-700 session_header">
              Hi, {session?.user?.nickname}
            </li>
            <li className="text-sky-700 session_header">
              <Link href="/mindmap">MindMap</Link>
            </li>
            <li className="text-sky-700 border-2 border-sky-500 has-bg">
              <Link href="/api/auth/logout">Đăng xuất</Link>
            </li>
          </>
        ) : (
          <>
            <li className="text-sky-700 session_header">
              <Link href="/api/auth/login">Đăng nhập</Link>
            </li>
            <li className="text-sky-700 border-2 border-sky-500 has-bg session_header">
              <Link href="/api/auth/login">Đăng ký</Link>
            </li>
          </>
        )}
      </ul>

      <></>
    </div>
  );
}

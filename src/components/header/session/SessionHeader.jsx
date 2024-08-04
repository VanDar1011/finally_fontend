"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function SessionHeader() {
  const pathname = usePathname();
  const activeMenu = (path) => {
    return pathname === path ? "active" : "inactive";
  };

  return (
    <>
      <li className={activeMenu("/")}>
        <Link href="/">Trang chủ</Link>
      </li>
      <li className={activeMenu("/about")}>
        <Link href="/about">Giới thiệu</Link>
      </li>
      <li className={activeMenu("/features")}>
        <Link href="/features">Tính năng</Link>
      </li>
      <li className={activeMenu("/price")}>
        <Link href="/price">Bảng giá</Link>
      </li>
      <li className={activeMenu("/contact")}>
        <Link href="/contact">Liên hệ</Link>
      </li>
    </>
  );
}

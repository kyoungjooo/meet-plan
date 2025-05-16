import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <h1 className="navbar__logo">foodStamp</h1>
      <div
        className="navbar__button"
        role="presentation"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        {isOpen && (
          <ul className="navbar__list">
            <li className="navbar__list--item">
              <Link href="/stores">맛집 목록</Link>
            </li>
            <li>
              <Link href="/group/list">그룹 목록</Link>
            </li>
            <li>
              <Link href="/group/new">그룹 생성</Link>
            </li>
            <li>
              <Link href="/users/mypage">마이페이지</Link>
            </li>
            <li>
              <Link href="/users/login">로그인 페이지</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

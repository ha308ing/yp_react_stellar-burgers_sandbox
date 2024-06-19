import { NavLink, Outlet, useSearchParams } from "react-router-dom";
import styles from "./chats-list.module.css";
import { ChatsFilter } from "../chats-filter/chats-filter";
import { useMemo } from "react";

export const ChatsList = ({ chats }) => {
  const [searchParams] = useSearchParams();

  const chatsFiltered = useMemo(() => {
    const filter = searchParams.get("filter") || "";
    const reg = new RegExp(filter);
    return filter.length > 0
      ? chats.filter((chat) => {
          const testId = reg.test(chat.id);
          const testTitle = reg.test(chat.title);
          return testId || testTitle;
        })
      : chats;
  }, [chats, searchParams]);

  return (
    <>
      <ChatsFilter />
      <ul>
        {chatsFiltered.map((chat) => (
          <li key={chat.id} className="border border-3 border-red">
            <NavLink
              to={{ pathname: `/list/${chat.id}` }}
              className={({ isActive }) => (isActive ? styles.activeChat : "")}
            >
              <code>{JSON.stringify(chat, null, 2)}</code>
            </NavLink>
          </li>
        ))}
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  );
};

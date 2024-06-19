import { useEffect, useState } from "react";
import { ChatsList } from "../chats-list/chats-list";
import { chatsController } from "../../services/api/chats/controller";
import { CreateChat } from "../create-chat/create-chat";

export const ListPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const getChats = async () => {
    setIsLoading(true);

    try {
      const chats = await chatsController.getChats();
      console.log({ chats });
      setData(chats);
    } catch (_) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getChats();
  }, []);

  const content = isLoading ? (
    "loading"
  ) : isError ? (
    "error"
  ) : data && data.length ? (
    <ChatsList chats={data} />
  ) : (
    "no chats"
  );

  return (
    <>
      <div>{content}</div>
      <CreateChat />
    </>
  );
};

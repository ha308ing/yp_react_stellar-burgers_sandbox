import { useParams } from "react-router-dom";

export const ChatPage = () => {
  const { chatId } = useParams();
  return (
    <>
      <h1>Chat page</h1>
      <code>{chatId}</code>
    </>
  );
};

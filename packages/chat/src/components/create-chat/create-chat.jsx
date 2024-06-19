import { chatsController } from "../../services/api/chats/controller";

export const CreateChat = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      elements: {
        chatName: { value: chatName },
      },
    } = e.target;
    if (!chatName || chatName.length < 5) return;

    chatsController.createChat(chatName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="chat text" id="chatName" />
      <button>Create chat</button>
    </form>
  );
};

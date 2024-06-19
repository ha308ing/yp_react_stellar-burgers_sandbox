import { chatsService } from "./service";

class ChatsController {
  getChats = async () => {
    try {
      const response = await chatsService.getChats();
      const chats = await response.json();

      return chats;
    } catch (error) {
      console.error(error);
      // throw Error(error);
    }
  };

  createChat = (chatName) => chatsService.createChat({ title: chatName });
}

export const chatsController = new ChatsController();

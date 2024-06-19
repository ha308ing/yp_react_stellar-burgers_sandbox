import { RootService } from "../root";

const CHATS_ENDPOINT = "/chats";

class ChatsService extends RootService {
  constructor() {
    super(CHATS_ENDPOINT);
  }

  getChats = this.fetch;

  createChat = async (data) => {
    try {
      const response = await this.postRequest("", data);
      console.log({ createChatResponse: response });
    } catch (error) {
      throw Error(error);
    }
  };
}

export const chatsService = new ChatsService();

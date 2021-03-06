import { ModuleContext } from '@graphql-modules/core';
import { ChatsProvider } from "../providers/chats.provider";
import { ChatDbObject } from "@models";

export default {
  Query: {
    chats: (root, args, { injector }: ModuleContext): ChatDbObject[] =>
      injector.get(ChatsProvider).getChats(),
    chat: (root, {id}: any, { injector }: ModuleContext): ChatDbObject =>
      injector.get(ChatsProvider).getChat(id),
  },
};

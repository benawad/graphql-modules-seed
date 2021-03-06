import { ModuleContext } from '@graphql-modules/core';
import { MessagesProvider } from "../providers/messages.provider";
import { CreateMessageMutationArgs, DeleteMessageMutationArgs, MessageDbObject } from "@models";

export default {
  Mutation: {
    createMessage: (root, {content, chatId}: CreateMessageMutationArgs, { injector }: ModuleContext): MessageDbObject =>
      injector.get(MessagesProvider).createMessage(content, chatId),
    deleteMessage: (root, {id}: DeleteMessageMutationArgs, { injector }: ModuleContext): number =>
      injector.get(MessagesProvider).deleteMessage(id),
  },
};

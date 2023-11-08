"use client";

import { MessageSquarePlusIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const CreateChatButton = () => {
  const router = useRouter();

  const createNewChat = async () => {
    //logic
    router.push(`/chat/aaa`);
    // router.push(`/chat/${chatId}`);
  };

  return (
    <Button onClick={createNewChat} variant={"ghost"}>
      <MessageSquarePlusIcon />
    </Button>
  );
};

export default CreateChatButton;

"use client";

import React, { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: "1440a387-ad9b-4507-8fef-143833e2e080",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "1440a387-ad9b-4507-8fef-143833e2e080",
        composerPlaceholder: "Chat with Mike",
        botConversationDescription: "Actively looking for work",
        botName: "Mike",
        avatarUrl:
          "https://pbs.twimg.com/profile_images/1559218498102083585/TAdvAqjL_400x400.jpg",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;

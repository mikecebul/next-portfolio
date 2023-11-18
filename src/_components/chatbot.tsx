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
          "https://media.licdn.com/dms/image/C5603AQFSecKRtzsAgQ/profile-displayphoto-shrink_200_200/0/1660190526587?e=1705536000&v=beta&t=vejEoc1pQmQbUXFKI8qwyqqHeVieC6_xgaCJ9yzSWao",
      });
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;

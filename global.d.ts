// global.d.ts
interface BotpressWebChat {
  init: (config: any) => void;
  // Add other methods or properties of botpressWebChat here if needed
}

interface Window {
  botpressWebChat: BotpressWebChat;
}

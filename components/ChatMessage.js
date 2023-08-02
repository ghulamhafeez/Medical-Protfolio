import { FacebookProvider, CustomChat } from "react-facebook";

export default function ChatMessage() {
  console.log("called");
  return (
    <FacebookProvider appId="1035059091188504" chatSupport>
      <CustomChat pageId="105822544169742" minimized={true} />
    </FacebookProvider>
  );
}

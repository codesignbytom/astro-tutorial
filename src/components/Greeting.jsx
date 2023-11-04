import { useState } from "preact/hooks";

export default function Greeting({ messages }) {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div class="flex flex-col gap-4">
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        class="bg-indigo-600 text-white p-2 rounded-sm font-medium"
        onClick={() => setGreeting(randomMessage())}
      >
        Generate another greeting
      </button>
    </div>
  );
}

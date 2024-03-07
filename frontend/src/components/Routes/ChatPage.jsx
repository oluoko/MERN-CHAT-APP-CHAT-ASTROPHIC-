import React from "react";

const ChatPage = () => {
  return (
    <div>
      <p>ChatPage</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias ex,
        nobis aut nostrum quae pariatur temporibus aperiam debitis omnis
        molestias.
      </p>
    </div>
  );
};

export default ChatPage; // import React, { useEffect, useState } from "react";
// import axios from "axios";

// const ChatPage = () => {
//   const [chats, setChats] = useState([]);
//   const fetchChats = async () => {
//     const { data } = await axios.get("/api/chat");

//     setChats(data);
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);
//   return (
//     <div>
//       {chats.map((chat) => (
//         <div key={chat._id}>{chat.chatName}</div>
//       ))}
//     </div>
//   );
// };

// export default ChatPage;

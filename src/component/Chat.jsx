import React, { useState, useEffect, useRef } from "react";
import "./chat.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const bottomRef = useRef(null);

  const profile = [
    {
      profileImg:
        "https://thumbs.dreamstime.com/b/smiling-young-boy-cartoon-avatar-illustration-web-profile-use-features-perfect-as-picture-character-designed-364610255.jpg",
      aiName: "Virat",
    },
    {
      profileImg:
        "https://thumbs.dreamstime.com/b/asian-teen-boy-face-construction-set-isolated-white-background-vector-cartoon-illustration-male-avatar-head-hairstyle-asian-342940346.jpg",
      aiName: "Rohit",
    },
    {
      profileImg:
        "https://thumbs.dreamstime.com/b/pretty-young-brunette-latina-mexican-woman-smiling-face-expression-avatar-105320579.jpg",
      aiName: "Smriti",
    },
    {
      profileImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7Xm6nR_MO4SX95TTkmTVdm2tubhXi_mJ5g&s",
      aiName: "Shreyanka",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/32.jpg",
      aiName: "Arjun",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/44.jpg",
      aiName: "Priya",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/76.jpg",
      aiName: "Ravi",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/68.jpg",
      aiName: "Sneha",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/15.jpg",
      aiName: "Manoj",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/10.jpg",
      aiName: "Aarav",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/65.jpg",
      aiName: "Ananya",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/30.jpg",
      aiName: "Kabir",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/22.jpg",
      aiName: "Meera",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/45.jpg",
      aiName: "Zaid",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/32.jpg",
      aiName: "Nina",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/men/60.jpg",
      aiName: "Leo",
    },
    {
      profileImg: "https://randomuser.me/api/portraits/women/48.jpg",
      aiName: "Sara",
    },
  ];

  const chatData = [
    { userData: "Hello", aiData: "Hi there!" },
    { userData: "How are you?", aiData: "I'm good! Aap kaise ho?" },
    {
      userData: "What is your name?",
      aiData: `My name is ${profile[activeIndex]?.aiName}`,
    },
    { userData: "Main theek hoon", aiData: "Achha laga sunke!" },
    { userData: "Kya kar rahe ho?", aiData: "Bas time pass kar raha hoon." },
    { userData: "Chalo baat karte hain", aiData: "Haan chalo, kis topic par?" },
    { userData: "Movies pasand hai?", aiData: "Haan, bahut! Tumhe?" },
    {
      userData: "Mujhe action movies pasand hai",
      aiData: "Nice! Kya tumne John Wick dekhi?",
    },
    { userData: "Haan, mast thi", aiData: "Sahi bola! Action to solid tha." },
    { userData: "Kal kya plan hai?", aiData: "Shayad movie dekhne jaun." },
    {
      userData: "Kya kaam karte ho?",
      aiData: "Filhaal ghar se kaam kar raha hoon.",
    },
    { userData: "Kya khaya dinner mein?", aiData: "Rajma chawal. Tumne?" },
    { userData: "Mainne pizza khaya", aiData: "Yummy! Kis flavor ka?" },
    { userData: "Farmhouse", aiData: "Mera bhi favourite hai!" },
    { userData: "Kaha rehte ho?", aiData: "Delhi mein. Tum?" },
    { userData: "Mumbai", aiData: "Wah! Coastal city ka maza hi alag hai." },
    {
      userData: "Mujhe neend aa rahi hai",
      aiData: "Toh so jao, kal baat karte hain.",
    },
    { userData: "Good night", aiData: "Good night, sweet dreams!" },
    { userData: "Subah ho gayi", aiData: "Good morning! Kaise ho aaj?" },
    {
      userData: "Thoda tired hoon",
      aiData: "Thoda rest le lo, fresh feel hoga.",
    },
    {
      userData: "Kya tumhe chai pasand hai?",
      aiData: "Bahut! Subah ki chai best hoti hai.",
    },
    {
      userData: "Main coffee lover hoon",
      aiData: "Coffee bhi badi refreshing hoti hai!",
    },
    {
      userData: "Chalo kahin ghoomne chalte hain",
      aiData: "Idea acha hai! Kaha chalna hai?",
    },
    {
      userData: "Hill station chalein?",
      aiData: "Perfect! Thand aur view dono milega.",
    },
    {
      userData: "Shopping pasand hai?",
      aiData: "Kabhi kabhi, mood par depend karta hai.",
    },
    {
      userData: "Mujhe online shopping pasand hai",
      aiData: "Easy aur convenient hoti hai na!",
    },
    {
      userData: "Kaunsi app use karte ho?",
      aiData: "Zyada tar Amazon ya Flipkart.",
    },
    { userData: "Kya sun rahe ho?", aiData: "Lofi beats. Tum kya sunte ho?" },
    {
      userData: "Main Bollywood gaane sunta hoon",
      aiData: "Romantic ya dance wale?",
    },
    { userData: "Romantic", aiData: "Nice choice!" },
    {
      userData: "Kya tum cooking jaante ho?",
      aiData: "Thoda bahut. Maggie to bana leta hoon 😄",
    },
    {
      userData: "Main biryani bana leta hoon",
      aiData: "Wah! Kab khilaa rahe ho?",
    },
    { userData: "Kabhi bhi", aiData: "Pakka? Invite yaad rahega!" },
    {
      userData: "Tumhara favourite festival kaunsa hai?",
      aiData: "Diwali. Tumhara?",
    },
    { userData: "Holi", aiData: "Masti aur rang, dono milte hain!" },
    {
      userData: "Kya tum daily exercise karte ho?",
      aiData: "Try karta hoon, lekin roz nahi hota.",
    },
    {
      userData: "Mujhe yoga pasand hai",
      aiData: "Very nice! Mind and body dono fit rehte hain.",
    },
    {
      userData: "Book reading ka shauk hai?",
      aiData: "Haan, specially mystery novels.",
    },
    {
      userData: "Main motivation books padhta hoon",
      aiData: "Wah! Inspire rehna zaroori hai.",
    },
    {
      userData: "Weekend ka kya plan?",
      aiData: "Shayad dost ke saath milna ho.",
    },
    {
      userData: "Chalo phir baad mein baat karte hain",
      aiData: "Theek hai, take care!",
    },
    { userData: "Bye", aiData: "Bye-bye!" },
    { userData: "What are you up to?", aiData: "Just chilling. You?" },
    {
      userData: "Nothing much",
      aiData: "Sometimes doing nothing is the best thing!",
    },
    {
      userData: "Do you like movies?",
      aiData: "Absolutely! What genre do you enjoy?",
    },
    {
      userData: "I love action movies",
      aiData: "Same here! Have you watched John Wick?",
    },
    {
      userData: "Yes, it was awesome",
      aiData: "Totally! The action scenes were epic.",
    },
    {
      userData: "What's your weekend plan?",
      aiData: "Probably going out for a movie.",
    },
    {
      userData: "What did you have for dinner?",
      aiData: "I had pasta. What about you?",
    },
    { userData: "I ate pizza", aiData: "Yum! What kind of pizza?" },
    { userData: "Farmhouse", aiData: "Great choice!" },
    { userData: "Where do you live?", aiData: "I’m from Delhi. And you?" },
    {
      userData: "I live in Mumbai",
      aiData: "Nice! I’ve always wanted to visit there.",
    },
    {
      userData: "I feel sleepy",
      aiData: "Go take some rest. We'll talk later!",
    },
    { userData: "Good night", aiData: "Good night! Sweet dreams!" },
    { userData: "Good morning", aiData: "Good morning! How's your day going?" },
    {
      userData: "Feeling a bit tired",
      aiData: "Take it easy today. Relax a little.",
    },
    {
      userData: "Do you like tea?",
      aiData: "I love tea! Especially in the morning.",
    },
    {
      userData: "I'm more of a coffee person",
      aiData: "That's cool! Coffee is life for many.",
    },
    {
      userData: "Shall we go on a trip?",
      aiData: "That sounds amazing! Where to?",
    },
    {
      userData: "Let's go to a hill station",
      aiData: "Perfect! Peaceful and scenic.",
    },
    {
      userData: "Do you enjoy shopping?",
      aiData: "Sometimes, depends on my mood.",
    },
    { userData: "I prefer online shopping", aiData: "So convenient, right?" },
    { userData: "Which app do you use?", aiData: "Mostly Amazon or Flipkart." },
    {
      userData: "What are you listening to?",
      aiData: "Just some lo-fi beats. You?",
    },
    { userData: "Bollywood songs", aiData: "Nice! Romantic or party tracks?" },
    { userData: "Mostly romantic", aiData: "That's sweet!" },
    { userData: "Can you cook?", aiData: "A little. I can make noodles!" },
    {
      userData: "I can make biryani",
      aiData: "Wow! When are you inviting me?",
    },
    { userData: "Anytime!", aiData: "I’ll remember that 😄" },
    {
      userData: "What's your favorite festival?",
      aiData: "I love Diwali. What about you?",
    },
    {
      userData: "Holi is my favorite",
      aiData: "Colors and fun! Great choice!",
    },
    {
      userData: "Do you work out daily?",
      aiData: "I try to, but not every day.",
    },
    {
      userData: "I enjoy doing yoga",
      aiData: "That's amazing! Good for mind and body.",
    },
    { userData: "Do you read books?", aiData: "Yes! I love mystery novels." },
    {
      userData: "I read motivational books",
      aiData: "That's inspiring. Keep it up!",
    },
    {
      userData: "What’s the plan for the weekend?",
      aiData: "Maybe meet some friends or just relax.",
    },
    { userData: "Let’s catch up later", aiData: "Sure! Take care!" },
    { userData: "Bye", aiData: "Bye! Talk to you soon." },
    {
      userData: "What’s the time?",
      aiData: "I’m not sure. You might want to check your clock!",
    },
    {
      userData: "Tell me a joke",
      aiData:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    { userData: "That was funny", aiData: "Glad you liked it!" },
    { userData: "I'm bored", aiData: "Let’s play a guessing game!" },
    { userData: "Okay", aiData: "Guess a number between 1 and 10!" },
  ];

  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    if (activeIndex !== null) {
      const savedMessages =
        JSON.parse(localStorage.getItem(profile[activeIndex]?.aiName)) || [];
      setMessages(savedMessages);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  function getAiReply(userMsg) {
    const match = chatData.find(
      (chat) => chat.userData.toLowerCase() === userMsg.toLowerCase()
    );
    return match ? match.aiData : "I didn't understand that.";
  }

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    const userMsg = {
      sender: "user",
      text: message,
      time: getCurrentTime(),
    };

    setMessages((prev) => {
      const updatedMessages = [...prev, userMsg];
      localStorage.setItem(
        profile[activeIndex]?.aiName,
        JSON.stringify(updatedMessages)
      );
      return updatedMessages;
    });

    const aiText = getAiReply(message);
    setMessage("");

    let randomTime = Math.floor(Math.random() * 60000);
    console.log(randomTime);
    setTimeout(() => {
      const aiMsg = {
        sender: "ai",
        text: aiText,
        time: getCurrentTime(),
      };

      setMessages((prev) => {
        const updatedMessages = [...prev, aiMsg];
        localStorage.setItem(
          profile[activeIndex]?.aiName,
          JSON.stringify(updatedMessages)
        );
        return updatedMessages;
      });
    }, randomTime);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter") {
      const firstMatch = filteredProfiles[0];
      if (firstMatch) {
        const activeProfileIndex = profile.findIndex(
          (p) => p.aiName === firstMatch.aiName
        );
        setActiveIndex(
          profile.findIndex((p) => p.aiName === firstMatch.aiName)
        );
      }
    }
  };

  const filteredProfiles = profile.filter((p) =>
    p.aiName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="left">
        <div className="searchBar">
          <input
            type="search"
            placeholder="Search User"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearchKeyPress}
          />
          <i className="bx bx-search"></i>
        </div>

        {filteredProfiles.map((item) => (
          <div
            className={`profileContainer ${
              profile[activeIndex]?.aiName === item.aiName ? "active" : ""
            }`}
            key={item.aiName}
            onClick={() =>
              setActiveIndex(profile.findIndex((p) => p.aiName === item.aiName))
            }
          >
            <img src={item.profileImg} alt={item.aiName} />
            <h1>{item.aiName}</h1>
          </div>
        ))}
      </div>

      <div className={`right ${activeIndex === null ? "right-active" : ""}`}>
        {activeIndex === null ? (
          <p className="no-chat">Select a chat to start conversation</p>
        ) : (
          <>
            <div className="right-top">
              <div className="chat-header">
                <img
                  src={profile[activeIndex]?.profileImg}
                  alt={profile[activeIndex]?.aiName}
                />
                <h2>{profile[activeIndex]?.aiName}</h2>
              </div>
              <div className="chat-actions">
                <i className="bx bx-phone call-icon"></i>
                <i className="bx bx-video video-icon"></i>
              </div>
            </div>

            <div className="right-middle msg-box">
              {[...messages].reverse().map((msg, index) => (
                <div className="message-container" key={index}>
                  {msg.sender === "user" ? (
                    <div className="user-msg">
                      {msg.text}
                      <div className="userTimestamp">{msg.time}</div>
                    </div>
                  ) : (
                    <div className="ai-msg">
                      {msg.text}
                      <div className="aiTimestamp">{msg.time}</div>
                    </div>
                  )}
                </div>
              ))}
              <div ref={bottomRef}></div>
            </div>

            <div className="right-bottom">
              <input
                type="text"
                placeholder="Type a message"
                className="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSendMessage();
                }}
              />
              <i
                className="bx bx-send send-icon"
                onClick={handleSendMessage}
              ></i>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;

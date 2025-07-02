import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css"; // Custom styles

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    const chatEndRef = useRef(null);

    // Auto-scroll to bottom when new message arrives
    useEffect(() => {
        if (chatEndRef.current) {
            chatEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]);


    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const response = await fetch("http://31.97.63.245:3001/v1/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: input
                })
            });

            const data = await response.json();
            // Replace \n with <br> to show new lines
            const botText = (data.message || "No response").replace(/\n/g, "<br>");

            const botMessage = { sender: "bot", text: botText };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Error fetching response." }
            ]);
            console.error("API Error:", error);
        }
    };

    return (
        <>
            {/* Floating Button */}
            <div className="chatbot-toggle-btn" onClick={() => setOpen(!open)}>
                💬
            </div>

            {/* Chat Window */}
            {open && (
                <div className="chatbot-window card shadow">
                    <div
                        className="card-header text-white d-flex justify-content-between align-items-center"
                        style={{ backgroundColor: "#B88338" }}
                    >
                        <span>ChatBot</span>
                        <button className="btn btn-sm btn-light" onClick={() => setOpen(false)}>✕</button>
                    </div>

                    <div className="card-body overflow-auto" style={{ maxHeight: "300px", backgroundColor: "#f8f9fa" }}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`d-flex mb-2 ${msg.sender === "user" ? "justify-content-end" : "justify-content-start"
                                    }`}
                            >
                                {msg.sender === "bot" ? (
                                    <span
                                        className="badge rounded-pill "   style={{ backgroundColor: "#B88342" }}
                                        dangerouslySetInnerHTML={{ __html: msg.text }}
                                    />
                                ) : (
                                    <span className="badge rounded-pill "   style={{ backgroundColor: "#B88338" }}>
                                        {msg.text}
                                    </span>
                                )}
                            </div>
                        ))}
                        <div ref={chatEndRef}></div>
                    </div>

                    <div className="card-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                                placeholder="Type a message..."
                            />
                            <button className="btn btn-primary border-0"   style={{ backgroundColor: "#B88338" }} onClick={sendMessage}>Send</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default Chatbot;

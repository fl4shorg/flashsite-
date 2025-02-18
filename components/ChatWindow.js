function ChatWindow({ messages }) {
    const chatRef = React.useRef(null);

    React.useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="window h-96 overflow-y-auto relative" ref={chatRef}>
            <div className="scanline"></div>
            <div className="p-4 boot-sequence">
                {messages.map((msg, index) => (
                    <Message key={index} text={msg.text} isAi={msg.isAi} />
                ))}
            </div>
        </div>
    );
}

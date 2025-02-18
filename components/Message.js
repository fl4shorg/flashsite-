function Message({ text, isAi }) {
    return (
        <div className={`message-container ${isAi ? 'message-ai' : 'message-user'}`}>
            <span className="mr-2">{isAi ? 'GPT>' : 'USER>'}</span>
            {text}
        </div>
    );
}

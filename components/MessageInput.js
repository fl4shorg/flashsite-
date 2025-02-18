function MessageInput({ onSendMessage }) {
    const [message, setMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim()) {
            playKeySound();
            onSendMessage(message);
            setMessage('');
        }
    };

    const handleKeyPress = () => {
        playKeySound();
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4">
            <div className="flex gap-2">
                <input
                    type="text"
                    className="input-field"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                />
                <button type="submit" className="button-retro">
                    SEND
                </button>
            </div>
        </form>
    );
}

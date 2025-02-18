function App() {
    const [messages, setMessages] = React.useState([
        { text: "OLÁ FLASH!\nSISTEMA OPERACIONAL INICIANDO...\nSISTEMA PRONTO.\nDigite sua mensagem para começar.", isAi: true }
    ]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        playDialupSound();
    }, []);

    async function handleSendMessage(message) {
        setMessages(prev => [...prev, { text: message, isAi: false }]);
        setIsLoading(true);

        const response = await getChatResponse(message);
        
        setIsLoading(false);
        setMessages(prev => [...prev, { text: response, isAi: true }]);
    }

    return (
        <div className="container mx-auto p-4 max-w-3xl">
            <Header />
            <ChatWindow messages={messages} />
            {isLoading && (
                <div className="loading-dots text-center my-2">
                    Processando<span>.</span><span>.</span><span>.</span>
                </div>
            )}
            <MessageInput onSendMessage={handleSendMessage} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

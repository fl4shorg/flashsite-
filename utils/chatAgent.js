async function getChatResponse(message) {
    const systemPrompt = "You are a helpful assistant with a quirky 90s computer personality. Please respond in a style that reflects early computer systems - use ASCII art when appropriate and maintain a retro computing theme.";
    try {
        return await invokeAIAgent(systemPrompt, message);
    } catch (error) {
        return "ERROR: Connection lost. Please reboot and try again.";
    }
}

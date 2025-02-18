function Header() {
    return (
        <div className="title-bar flex items-center justify-between p-2">
            <div className="flex items-center">
                <img src="data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='16' height='16' fill='white'/%3E%3Crect x='2' y='2' width='12' height='12' fill='black'/%3E%3C/svg%3E" 
                     alt="icon" 
                     className="w-6 h-6 mr-2" />
                <span className="text-sm">GPT-OS v1.0</span>
            </div>
            <div className="flex gap-2">
                <button className="px-2 border border-white hover:bg-blue-800">_</button>
                <button className="px-2 border border-white hover:bg-blue-800">□</button>
                <button className="px-2 border border-white hover:bg-blue-800">×</button>
            </div>
        </div>
    );
}

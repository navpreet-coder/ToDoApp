
const Home=()=>{
    return    <div className="grid grid-rows-[auto_1fr] min-h-[calc(100vh-80px)]">

    <header className="bg-white shadow-md p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-600">👋 Welcome, User</div>
    </header>

    {/* Main Content */}
    <main className="bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Your Todos</h2>
        {/* You can use a grid here too for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Todo cards */}
            <div className="bg-white p-4 rounded shadow">Todo 1</div>
            <div className="bg-white p-4 rounded shadow">Todo 2</div>
            <div className="bg-white p-4 rounded shadow">Todo 3</div>
        </div>
    </main>
</div>
}
export default Home;
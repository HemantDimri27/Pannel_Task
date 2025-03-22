export default function register(){
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900">
        <form
            className="bg-gray-800 p-6 rounded-lg  w-100 text-white"
        >
            <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
            <div className="mb-4">
            <label className="block text-gray-400">Name</label>
            <input 
                type="text" 
                name="name"
                className="w-full p-2 rounded bg-gray-700 border"
                required 
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-400">Email</label>
            <input 
                type="email" 
                name="email"
                className="w-full p-2 rounded bg-gray-700 border"
                required 
            />
            </div>
            <div className="mb-4">
            <label className="block text-gray-400">Password</label>
            <input 
                type="password" 
                name="password"
                className="w-full p-2 rounded bg-gray-700 border"
                required 
            />
            </div>
            <button 
            type="submit" 
            className="w-full bg-blue-500 p-2 rounded"
            >
            Register
            </button>
        </form>
    </div>
    )
}
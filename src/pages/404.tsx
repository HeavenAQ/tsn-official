export default function NotFound404() {
    return (
        <main className="flex flex-col justify-center items-center w-full h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
            <h1 className="text-9xl font-extrabold tracking-widest text-zinc-600">
                404
            </h1>
            <div className="mt-3 px-3 py-1 text-sm text-zinc-700 bg-zinc-100 rounded dark:text-zinc-300 dark:bg-zinc-800">
                Page Not Found
            </div>
            <div className="mt-6">
                <a href="/" className="inline-block">
                    <span className="block py-3 px-8 rounded-md border border-zinc-400 text-zinc-700 hover:text-white hover:bg-zinc-800 hover:border-zinc-800 duration-200 dark:text-zinc-200">
                        Go back home
                    </span>
                </a>
            </div>
        </main>
    )
}

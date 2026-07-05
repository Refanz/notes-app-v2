function NotFoundPage() {
    return (
        <div className="flex flex-col bg-surface w-screen h-screen items-center justify-center gap-10 p-4">
            <img src="/page-not-found.svg" alt="page not found" className="w-96"/>
            <p className="font-semibold text-xl">Page Not Found 404</p>
        </div>
    )
}

export default NotFoundPage
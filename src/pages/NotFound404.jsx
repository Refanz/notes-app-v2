function NotFoundPage() {
    return (
        <section className="flex justify-center items-center fixed p-5 sm:p-0 top-0 left-0 w-full h-full bg-surface">
            <div className="flex flex-col gap-10 p-10 rounded-lg shadow-lg bg-accent ">
                <img src="/page-not-found.svg" alt="page not found" className="w-full sm:w-96"/>
                <p className="font-semibold text-xl text-center">Page Not Found 404</p>
            </div>
        </section>
    )
}

export default NotFoundPage
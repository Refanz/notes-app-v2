function NotFoundPage() {
    return (
        <section className="flex flex-col gap-10 items-center justify-center">
            <img src="/page-not-found.svg" alt="page not found" className="w-96"/>
            <p className="font-semibold text-xl">Page Not Found 404</p>
        </section>
    )
}

export default NotFoundPage
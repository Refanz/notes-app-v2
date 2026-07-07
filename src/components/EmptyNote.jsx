function EmptyNote() {
    return (
        <div className="flex flex-col items-center gap-4">
            <div className="w-32">
                <img src="/no-data.svg" alt="Empty Notes" className="object-contain" />
            </div>
            <p className="font-bold text-xl">Empty Notes!</p>
        </div>
    )
}

export default EmptyNote;
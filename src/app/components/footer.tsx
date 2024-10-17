export function Footer() {
    return (
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center text-center text-accent border-accent border-t py-8 font-[family-name:var(--font-geist-sans)]">
            <aside>
            <div className="mb-2">
                <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                </div>
                <p className="text-sm">
                    colfaxandsaintpaul@gmail.com
                </p>
            </div>
            <p className="text-sm">
                Copyright © 2024 - All rights reserved 
            </p>
            </aside>
        </footer>
    )
}
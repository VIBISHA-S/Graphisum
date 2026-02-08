export default function Footer() {
    return (
        <footer className="bg-[#021a0c] text-foreground pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-2xl mb-8 leading-[0.9]">
                            Let’s build something <br />
                            <span className="opacity-50">solid together.</span>
                        </h2>
                        <button className="rounded-full border border-foreground/20 hover:border-foreground hover:bg-foreground hover:text-background transition-all duration-300 h-16 px-10 text-lg uppercase tracking-wider font-bold">
                            Start a Project
                        </button>
                    </div>

                    <div className="flex flex-col gap-4 text-right">
                        {/* Socials Placeholder */}
                        <a href="#" className="hover:opacity-50 transition-opacity">Instagram</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">Twitter</a>
                        <a href="#" className="hover:opacity-50 transition-opacity">LinkedIn</a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-foreground/10 pt-8 opacity-60 text-sm tracking-wide">
                    <p>&copy; {new Date().getFullYear()} Graphisum Agency.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

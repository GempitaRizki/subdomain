import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="SMA N 2 Playen">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center justify-center bg-[#FDFDFC] p-6 text-[#1b1b18] dark:bg-[#0a0a0a]">
                <div className="w-full max-w-4xl text-center">
                    <div className="mb-6 flex justify-center">
                        <img
                            src="/images/logo.png"
                            alt="SMA N 2 Playen Logo"
                            className="h-20 w-auto"
                        />
                    </div>

                    <h1 className="mb-2 text-4xl font-bold text-blue-700 dark:text-blue-400">
                        SMA N 2 PLAYEN
                    </h1>

                    <p className="mb-8 text-xl text-[#706f6c] dark:text-[#A1A09A]">
                        Media Pembelajaran Interaktif
                    </p>

                    <div className="mb-12 rounded-xl bg-white p-8 shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] dark:bg-[#161615] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                        <h2 className="mb-4 text-2xl font-semibold text-blue-700 dark:text-blue-400">
                            VISI SEKOLAH
                        </h2>
                        <p className="text-lg leading-relaxed text-[#1b1b18] dark:text-[#EDEDEC]">
                            "Terwujudnya Generasi yang Berakhlaq Mulia, Sehat, Berprestasi, Berbudaya, Berwawasan Lingkungan Berlandaskan Iman dan Taqwa"
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link
                            href="/dashboard-menu"
                            className="inline-block rounded-md bg-blue-600 px-10 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg dark:bg-blue-500 dark:hover:bg-blue-400"
                        >
                            Masuk ke Sistem
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
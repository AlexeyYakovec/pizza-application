import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { Header, BreadcrumbsSection } from "@/components/shared/index";
import { cn } from "@/lib/utils";

const nunito = Nunito({
    subsets: ["cyrillic"],
    variable: "--font-nunito",
    weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Pomodoro pizzaiolo | Главная",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("antialiased", nunito.className)}>
                <Header />
                {/* <BreadcrumbsSection /> */}
                <main className="min-h-screen">{children}</main>
            </body>
        </html>
    );
}

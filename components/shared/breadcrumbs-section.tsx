import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import tamas from "@/public/pizzas/jon-tyson-Gp1bS0WTw3w-unsplash.jpg";

interface Props {
    className?: string;
}

export const BreadcrumbsSection: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("sm:h-[78px]", className)}>
            <Image
                src={tamas}
                alt="Logo"
                width={600}
                height={600}
                className="object-cover object-center blur-sm w-full h-full"
            />
        </div>
    );
};

import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import img from "@/public/pizzas/49-498849_logo-suprem-pizza-logos-de-pizzerias-png.png";
import { Button, Input } from "../ui/index";
import {
    ArrowRight,
    DoorOpen,
    Search,
    ShoppingCart,
    Users,
} from "lucide-react";
import Link from "next/link";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn("border-b border-gray-200", className)}>
            <Container className="flex items-center justify-between py-12 px-4">
                <div className="flex items-center gap-4">
                    <Link href={"/"}>
                        <Image src={img} alt="Logo" width={120} height={120} />
                    </Link>
                    <div>
                        <h1 className="2xl uppercase font-black">
                            Pomodoro pizzaiolo
                        </h1>
                        <span className="text-sm text-gray-400 leading-3">
                            сначала занюхни, потом откуси
                        </span>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Input />
                    <Button
                        size={"default"}
                        variant={"outline"}
                        className="flex items-center gap-2">
                        <Users size={16} />
                        <span>Войти</span>
                    </Button>

                    <div>
                        <Button className="group relative" size={"default"}>
                            <b>460 ₽</b>
                            <span className="h-full w-[1px] bg-white/30 mx-3" />
                            <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                                <ShoppingCart
                                    className="h-4 w-4 relative"
                                    strokeWidth={2}
                                />
                                <b>3</b>
                            </div>
                            <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

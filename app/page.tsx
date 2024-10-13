import { Container, TopBar } from "@/components/shared";
import { Title } from "@/components/ui";
import Image from "next/image";

export default function Home() {
    return (
        <div className="h-[1000px]">
            <Container className="mt-12 px-4">
                <Title text="Pomodoro pizzaiolo" size="lg" className="mb-4" />
            </Container>
            <TopBar className="py-4" />
        </div>
    );
}

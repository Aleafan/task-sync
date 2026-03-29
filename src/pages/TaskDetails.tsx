import { Empty, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty";
import { FolderClock } from "lucide-react";
import { useParams } from "react-router";

export default function TaskDetails() {
    const { id } = useParams();
    return (
        <div className="flex flex-1 items-center justify-center p-4">
            <Empty className="gap-8 p-8 md:p-16">
                <EmptyHeader className="max-w-md gap-3">
                    <EmptyMedia variant='icon' className="size-14 rounded-xl [&_svg]:size-8">
                        <FolderClock />
                    </EmptyMedia>
                    <EmptyTitle className="text-xl md:text-2xl font-semibold">
                        Task details: {id}
                    </EmptyTitle>
                </EmptyHeader>
            </Empty>
        </div>
    );
}
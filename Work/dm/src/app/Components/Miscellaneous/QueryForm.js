import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function QueryForm() {
    return (
        <>
            <HoverCard>
                <HoverCardTrigger>Hover</HoverCardTrigger>
                <HoverCardContent>
                    The React Framework – created and maintained by @vercel.
                </HoverCardContent>
            </HoverCard>
        </>
    )
}
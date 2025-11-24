"use client"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
export default function card({title, content}) {
    return (
        <>
            <Card className="h-auto w-auto relative bg-[url('/Background_06.jpg')] bg-left text-white">
            <div className="absolute bg-[#1c1d23]/70 inset-0 border border-[#394146] rounded-2xl"></div>
                <CardHeader className="relative">
                    <CardTitle><h1 className="text-xl">{title}</h1></CardTitle>
                
                <CardDescription className="relative">
                    <p className="font-bold">{content}</p>
                </CardDescription>
                </CardHeader>
            </Card>
        </>
    )
}
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Card, CardContent } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

interface ImageComponentProps {
    ratio: number
    imageUrl: string
}

const ImageComponent: React.FC<ImageComponentProps> = ({ ratio, imageUrl }) => {
    return (
        <Card className="w-full max-w-[720px] border-0 bg-transparent">
            <CardContent className="p-0">
                <AspectRatio ratio={ratio} className="overflow-hidden">
                    <Image
                        className="h-full w-full object-cover"
                        alt="Pregnant woman in profile view with pink toned filter"
                        src={imageUrl}
                        height={1000}
                        width={1000}
                    />
                </AspectRatio>
            </CardContent>
        </Card>
    )
}

export default ImageComponent

"use client";

import { useParams } from "next/navigation"

export default function Play() {
    const { spaceId } = useParams()
    return <div>
        {spaceId}
    </div>
}
"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

interface ChildProps {
    searchParams?: ReturnType<typeof useSearchParams>;
}

export default function SearchParamsWrapper({ 
    children 
}: { 
    children: React.ReactNode 
}) {
    const searchParams = useSearchParams();
    
    return (
        <>
            {React.Children.map(children, child => {
                if (React.isValidElement<ChildProps>(child)) {
                    return React.cloneElement(child, { searchParams });
                }
                return child;
            })}
        </>
    );
}
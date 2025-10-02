import React from 'react';

export const Logo = (props: React.HTMLAttributes<HTMLDivElement>) => (
    <div className="flex items-center" {...props}>
        <span className="font-headline font-bold text-2xl tracking-tight text-primary">
            Select Men's Tailor
        </span>
    </div>
);

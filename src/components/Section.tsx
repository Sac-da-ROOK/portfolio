import React from "react";

type Props = React.PropsWithChildren<{
    id?: string;
    className?: string;
    'aria-labelledby'?: string;
}>;

export default function Section({ id, children, className = "", 'aria-labelledby': ariaLabelledBy }: Props) {
    return (
        <section id={id} className={`section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20 ${className}`} aria-labelledby={ariaLabelledBy}>
            <div className="relative z-10 mx-auto max-w-6xl">
                {children}
            </div>
        </section>
    );
}

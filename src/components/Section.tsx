import React from "react";

type Props = React.PropsWithChildren<{
    id?: string;
    className?: string;
    'aria-labelledby'?: string;
}>;

export default function Section({ id, children, className = "", 'aria-labelledby': ariaLabelledBy }: Props) {
    return (
        <section id={id} className={`border-t border-white/10 bg-[#050816] px-6 py-24 sm:px-8 lg:px-12 ${className}`} aria-labelledby={ariaLabelledBy}>
            {children}
        </section>
    );
}

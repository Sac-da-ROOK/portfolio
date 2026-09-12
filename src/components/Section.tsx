import React from "react";

type Props = React.PropsWithChildren<{
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    'aria-labelledby'?: string;
}>;

export default function Section({ id, children, className = "", style, 'aria-labelledby': ariaLabelledBy }: Props) {
    return (
        <section
            id={id}
            className={`section-shell scroll-mt-28 px-4 py-10 sm:scroll-mt-32 sm:px-6 sm:py-14 lg:scroll-mt-36 lg:px-8 lg:py-20 ${className}`}
            style={style}
            aria-labelledby={ariaLabelledBy}
        >
            <div className="relative z-10 mx-auto max-w-6xl">
                {children}
            </div>
        </section>
    );
}

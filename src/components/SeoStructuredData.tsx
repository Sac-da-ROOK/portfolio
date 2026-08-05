export default function SeoStructuredData() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aarushsrivastava.dev";
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                "name": "Aarush Srivastava",
                "url": siteUrl,
                "sameAs": [
                    "https://github.com/Sac-da-ROOK",
                    "https://www.linkedin.com/in/yourprofile"
                ],
                "jobTitle": "Student Developer",
                "description": "Aarush is a student developer building educational software, interactive games, and modern web experiences.",
                "knowsAbout": ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI", "Educational Technology"]
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": "Aarush Srivastava Portfolio",
                "description": "A portfolio showcasing educational software, game design, and web development projects by Aarush Srivastava.",
                "publisher": {
                    "@id": `${siteUrl}/#person`
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}/#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "item": { "@id": `${siteUrl}/`, "name": "Home" } },
                    { "@type": "ListItem", "position": 2, "item": { "@id": `${siteUrl}/#projects`, "name": "Projects" } },
                    { "@type": "ListItem", "position": 3, "item": { "@id": `${siteUrl}/#contact`, "name": "Contact" } }
                ]
            }
        ]
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    );
}

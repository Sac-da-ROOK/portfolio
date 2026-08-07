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
                "jobTitle": "Student STEM Researcher",
                "description": "Aarush is a student focused on mathematics, robotics, chess, and long-term STEM learning through projects and competitions.",
                "knowsAbout": ["Mathematics", "Robotics", "Science Competitions", "Chess", "Educational Technology", "AI Foundations"]
            },
            {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                "url": siteUrl,
                "name": "Aarush Srivastava STEM Portfolio",
                "description": "A premium STEM portfolio showcasing projects, competitions, robotics work, chess progress, and a learning journal.",
                "publisher": {
                    "@id": `${siteUrl}/#person`
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${siteUrl}/#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "item": { "@id": `${siteUrl}/`, "name": "Home" } },
                    { "@type": "ListItem", "position": 2, "item": { "@id": `${siteUrl}/#competitions`, "name": "Competitions & Achievements" } },
                    { "@type": "ListItem", "position": 3, "item": { "@id": `${siteUrl}/#contact`, "name": "Contact" } }
                ]
            }
        ]
    };

    return (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    );
}

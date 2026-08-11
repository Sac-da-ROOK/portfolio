import Link from 'next/link';

const stats = [
    { label: 'Drafts', value: '3' },
    { label: 'Published', value: '12' },
    { label: 'Subscribers', value: '84' },
];

export default function HomePage() {
    return (
        <main className="container" style={{ padding: '3rem 0 5rem' }}>
            <section className="card" style={{ display: 'grid', gap: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                    <div>
                        <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8fb3ff' }}>Lab Journal CMS</p>
                        <h1 style={{ margin: '0.3rem 0 0', fontSize: '2rem' }}>Private publishing workspace</h1>
                    </div>
                    <Link href="/dashboard" style={{ padding: '0.8rem 1rem', borderRadius: 999, background: '#8fb3ff', color: '#07111f', fontWeight: 700 }}>
                        Open dashboard
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                    {stats.map((item) => (
                        <div key={item.label} className="card" style={{ padding: '1rem' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{item.value}</div>
                            <div style={{ color: '#cbd5e1' }}>{item.label}</div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

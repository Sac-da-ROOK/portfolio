'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { JournalPost } from '../../../lib/posts';

export default function DashboardPage() {
    const [posts, setPosts] = useState<JournalPost[]>([]);
    const [query, setQuery] = useState('');
    const [activePostId, setActivePostId] = useState<string | null>(null);
    const [recallCode, setRecallCode] = useState('123456');
    const [feedback, setFeedback] = useState('');

    const loadPosts = async () => {
        const response = await fetch('/api/posts');
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
        }
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const filteredPosts = useMemo(() => {
        const normalized = query.trim().toLowerCase();
        if (!normalized) {
            return posts;
        }

        return posts.filter((post) => {
            const haystack = `${post.title} ${post.content} ${post.status}`.toLowerCase();
            return haystack.includes(normalized);
        });
    }, [posts, query]);

    const openPostOptions = (postId: string) => {
        setActivePostId((current) => (current === postId ? null : postId));
        setFeedback('');
    };

    const publishPost = async (postId: string) => {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'publish' }),
        });

        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setFeedback('Your article has been published.');
        }
    };

    const recallPost = async (postId: string) => {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'recall', code: recallCode }),
        });

        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setRecallCode('');
            setFeedback('Your article has been unpublished.');
        } else {
            const error = await response.json().catch(() => ({ error: 'Unable to unpublish this article.' }));
            setFeedback(error.error || 'Unable to unpublish this article.');
        }
    };

    const deletePost = async (postId: string) => {
        const confirmed = window.confirm('Delete this article? This cannot be undone.');
        if (!confirmed) {
            return;
        }

        const response = await fetch(`/api/posts/${postId}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            await loadPosts();
            setActivePostId(null);
            setFeedback('Article deleted.');
        } else {
            const error = await response.json().catch(() => ({ error: 'Unable to delete this article.' }));
            setFeedback(error.error || 'Unable to delete this article.');
        }
    };

    return (
        <main className="container" style={{ padding: '3rem 0 5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                <div>
                    <p style={{ margin: 0, textTransform: 'uppercase', letterSpacing: '0.25em', color: '#8fb3ff' }}>Dashboard</p>
                    <h1 style={{ margin: '0.3rem 0 0', fontSize: '2rem' }}>Journal articles</h1>
                </div>
                <Link href="/dashboard/new" style={{ padding: '0.8rem 1rem', borderRadius: 999, background: '#22c55e', color: '#07111f', fontWeight: 700 }}>
                    New article
                </Link>
            </div>

            <section className="card" style={{ display: 'grid', gap: '1rem' }}>
                <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search articles"
                    style={{ padding: '0.8rem 1rem', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#0f172a', color: 'white' }}
                />

                {feedback ? <div style={{ color: '#8fb3ff' }}>{feedback}</div> : null}

                {filteredPosts.length === 0 ? (
                    <div style={{ border: '1px dashed rgba(255,255,255,0.16)', borderRadius: 16, padding: '1.2rem', color: '#cbd5e1' }}>
                        No articles yet. Save a draft to get started.
                    </div>
                ) : (
                    filteredPosts.map((post) => {
                        const statusLabel = post.status === 'Recalled' ? 'Unpublished' : post.status;

                        return (
                            <div key={post.id} style={{ border: '1px solid rgba(255,255,255,0.12)', borderRadius: 16, padding: '1rem', display: 'grid', gap: '0.8rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                                    <div>
                                        <div style={{ fontWeight: 700 }}>{post.title}</div>
                                        <div style={{ color: '#cbd5e1', marginTop: '0.25rem' }}>{post.createdAt}</div>
                                    </div>
                                    <span style={{ padding: '0.35rem 0.7rem', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: '#f7f7f2' }}>{statusLabel}</span>
                                </div>

                                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                    <button type="button" onClick={() => openPostOptions(post.id)} style={{ padding: '0.65rem 0.9rem', borderRadius: 999, background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer' }}>
                                        Edit
                                    </button>
                                </div>

                                {activePostId === post.id ? (
                                    <div style={{ display: 'grid', gap: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.8rem' }}>
                                        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                                            <Link href={`/dashboard/new?postId=${post.id}`} style={{ padding: '0.65rem 0.9rem', borderRadius: 999, background: '#8fb3ff', color: '#07111f', fontWeight: 700 }}>
                                                Edit article
                                            </Link>
                                            {post.status === 'Published' ? (
                                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                                    <input value={recallCode} onChange={(event) => setRecallCode(event.target.value)} placeholder="Verification code" style={{ padding: '0.7rem 0.9rem', borderRadius: 12, border: '1px solid rgba(255,255,255,0.12)', background: '#0f172a', color: 'white' }} />
                                                    <button type="button" onClick={() => recallPost(post.id)} style={{ padding: '0.65rem 0.9rem', borderRadius: 999, background: '#f59e0b', color: '#07111f', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                                                        Unpublish article
                                                    </button>
                                                </div>
                                            ) : (
                                                <button type="button" onClick={() => publishPost(post.id)} style={{ padding: '0.65rem 0.9rem', borderRadius: 999, background: '#22c55e', color: '#07111f', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                                                    Publish article
                                                </button>
                                            )}
                                            <button type="button" onClick={() => deletePost(post.id)} style={{ padding: '0.65rem 0.9rem', borderRadius: 999, background: '#ef4444', color: 'white', fontWeight: 700, border: 'none', cursor: 'pointer' }}>
                                                Delete article
                                            </button>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })
                )}
            </section>
        </main>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import GalleryLightbox, { type GalleryLightboxItem } from "@/components/GalleryLightbox";

const galleryFilters = ["ALL", "PHOTOS", "VIDEOS"] as const;
const acceptedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".gif", ".mp4", ".webm", ".mov"];

type GalleryFilter = (typeof galleryFilters)[number];

type GalleryGridProps = {
    items: GalleryLightboxItem[];
    activeFilter: GalleryFilter;
};

function buildGalleryHref(filter: GalleryFilter, searchParams: URLSearchParams) {
    const nextParams = new URLSearchParams(searchParams.toString());

    if (filter === "ALL") {
        nextParams.delete("filter");
    } else {
        nextParams.set("filter", filter.toLowerCase());
    }

    const queryString = nextParams.toString();
    return queryString ? `/gallery?${queryString}` : "/gallery";
}

function isSupportedMediaFile(fileName: string, fileType: string) {
    const extension = fileName.toLowerCase().split(".").pop() ?? "";
    const normalizedType = fileType.toLowerCase();

    const imageTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    const videoTypes = ["video/mp4", "video/webm", "video/quicktime"];

    const isImageExtension = ["jpg", "jpeg", "png", "webp", "gif"].includes(extension);
    const isVideoExtension = ["mp4", "webm", "mov"].includes(extension);

    if (isImageExtension && imageTypes.includes(normalizedType)) {
        return "photo";
    }

    if (isVideoExtension && videoTypes.includes(normalizedType)) {
        return "video";
    }

    if (isImageExtension) {
        return "photo";
    }

    if (isVideoExtension) {
        return "video";
    }

    return null;
}

export default function GalleryGrid({ items, activeFilter }: GalleryGridProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isUploadOpen, setIsUploadOpen] = useState(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [caption, setCaption] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");
    const [uploadSuccess, setUploadSuccess] = useState("");
    const [dragActive, setDragActive] = useState(false);
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<GalleryLightboxItem | null>(null);
    const [editingCaption, setEditingCaption] = useState("");
    const [isSavingCaption, setIsSavingCaption] = useState(false);
    const [editCaptionError, setEditCaptionError] = useState("");
    const [editCaptionSuccess, setEditCaptionSuccess] = useState("");
    const searchTerm = (searchParams.get("search") ?? "").trim();

    useEffect(() => {
        return () => {
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
        };
    }, [previewUrl]);

    const filteredItems = useMemo(() => {
        let result = items;

        if (activeFilter !== "ALL") {
            result = result.filter((item) => item.type === (activeFilter === "PHOTOS" ? "photo" : "video"));
        }

        if (!searchTerm) {
            return result;
        }

        const queryWords = searchTerm
            .toLowerCase()
            .split(/\s+/)
            .filter(Boolean);

        return result.filter((item) => {
            const captionText = (item.caption ?? "").toLowerCase();
            return queryWords.every((word) => captionText.includes(word));
        });
    }, [activeFilter, items, searchTerm]);

    const updateSearch = (nextValue: string) => {
        const params = new URLSearchParams(searchParams.toString());

        if (nextValue.trim()) {
            params.set("search", nextValue.trim());
        } else {
            params.delete("search");
        }

        const queryString = params.toString();
        router.replace(queryString ? `${pathname}?${queryString}` : pathname, { scroll: false });
    };

    const resetUploadForm = () => {
        setSelectedFile(null);
        setCaption("");
        setAdminPassword("");
        setUploadError("");
        setUploadSuccess("");
        setIsAuthenticated(false);
        setDragActive(false);
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    };

    const handleFileSelection = (file: File | null) => {
        if (!file) {
            return;
        }

        const fileType = isSupportedMediaFile(file.name, file.type);
        if (!fileType) {
            setUploadError("Unsupported file type. Please choose a JPG, PNG, WEBP, GIF, MP4, WEBM, or MOV file.");
            return;
        }

        const nextPreview = URL.createObjectURL(file);
        setSelectedFile(file);
        setUploadError("");
        setUploadSuccess("");
        setCaption("");
        if (previewUrl) {
            URL.revokeObjectURL(previewUrl);
        }
        setPreviewUrl(nextPreview);
    };

    const handleAuthenticate = async () => {
        if (!adminPassword.trim()) {
            setUploadError("Please enter the admin password.");
            return;
        }

        setIsCheckingAuth(true);
        setUploadError("");

        try {
            const response = await fetch("/api/gallery/auth", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ password: adminPassword }),
            });

            const data = (await response.json()) as { success?: boolean; error?: string };
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Unable to authenticate admin.");
            }

            setIsAuthenticated(true);
            setUploadSuccess("Admin authentication successful.");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to authenticate admin.";
            setUploadError(message);
        } finally {
            setIsCheckingAuth(false);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadError("Please select a photo or video first.");
            return;
        }

        const trimmedCaption = caption.trim();
        if (!trimmedCaption) {
            setUploadError("Please enter a custom caption before uploading.");
            return;
        }

        setIsUploading(true);
        setUploadError("");
        setUploadSuccess("");

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);
            formData.append("caption", trimmedCaption);

            const response = await fetch("/api/gallery/upload", {
                method: "POST",
                credentials: "same-origin",
                body: formData,
            });

            const data = (await response.json()) as { success?: boolean; error?: string; message?: string };
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Unable to upload media right now.");
            }

            setUploadSuccess(data.message || "Media uploaded successfully. The site will update after Vercel finishes deploying.");
            setSelectedFile(null);
            setCaption("");
            setAdminPassword("");
            setIsAuthenticated(false);
            if (previewUrl) {
                URL.revokeObjectURL(previewUrl);
            }
            setPreviewUrl(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to upload media right now.";
            setUploadError(message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleEditCaptionOpen = (item: GalleryLightboxItem) => {
        setEditingItem(item);
        setEditingCaption(item.caption ?? "");
        setEditCaptionError("");
        setEditCaptionSuccess("");
        setIsEditOpen(true);
    };

    const handleEditCaptionSave = async () => {
        if (!editingItem) {
            return;
        }

        setIsSavingCaption(true);
        setEditCaptionError("");
        setEditCaptionSuccess("");

        try {
            const response = await fetch("/api/gallery/caption", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "same-origin",
                body: JSON.stringify({ src: editingItem.src, caption: editingCaption }),
            });

            const data = (await response.json()) as { success?: boolean; error?: string; message?: string };
            if (!response.ok || !data.success) {
                throw new Error(data.error || "Unable to update the caption.");
            }

            setEditCaptionSuccess(data.message || "Caption updated successfully. The site will update after Vercel finishes deploying.");
            setIsEditOpen(false);
            setEditingItem(null);
            setEditingCaption("");
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to update the caption.";
            setEditCaptionError(message);
        } finally {
            setIsSavingCaption(false);
        }
    };

    return (
        <main id="main-content" className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(250,204,21,0.16),_transparent_30%),linear-gradient(180deg,#fffef7_0%,#fff9db_100%)] text-slate-900">
            <section className="section-shell relative isolate overflow-hidden px-3 pb-12 pt-24 sm:px-4 sm:pb-16 sm:pt-28 lg:px-8 lg:pb-20 lg:pt-32">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="ambient-orb ambient-orb-one" />
                    <div className="ambient-orb ambient-orb-two" />
                    <div className="ambient-orb ambient-orb-three" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(250,204,21,0.26),transparent_42%)]" />
                </div>

                <div className="mx-auto max-w-6xl">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center rounded-full border border-white/30 bg-white/55 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-700 backdrop-blur-sm">
                            Portfolio Media
                        </div>

                        <h1 className="mt-6 text-[clamp(2.5rem,6vw,4.5rem)] font-semibold tracking-[-0.04em] text-slate-900">
                            Gallery
                        </h1>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-700 sm:text-base">
                            A collection of project moments, experiments, competition snapshots, and Lab Journal highlights.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-col gap-4 border-b border-slate-900/10 pb-4 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 p-1 backdrop-blur-sm">
                            {galleryFilters.map((filter) => {
                                const isActive = activeFilter === filter;
                                const href = buildGalleryHref(filter, searchParams);

                                return (
                                    <Link
                                        key={filter}
                                        href={href}
                                        className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.24em] transition ${isActive ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"}`}
                                    >
                                        {filter}
                                    </Link>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative w-full max-w-sm">
                                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" aria-hidden="true">
                                    ⌕
                                </span>
                                <input
                                    type="search"
                                    value={searchTerm}
                                    onChange={(event) => updateSearch(event.target.value)}
                                    placeholder="Search captions"
                                    className="w-full rounded-full border border-slate-200 bg-white/80 py-2.5 pl-10 pr-10 text-sm text-slate-800 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-amber-200"
                                    aria-label="Search gallery captions"
                                />
                                {searchTerm ? (
                                    <button
                                        type="button"
                                        onClick={() => updateSearch("")}
                                        className="absolute right-2 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
                                        aria-label="Clear search"
                                    >
                                        ×
                                    </button>
                                ) : null}
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setUploadError("");
                                    setUploadSuccess("");
                                    setIsUploadOpen(true);
                                }}
                                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm transition hover:bg-slate-800"
                            >
                                Add Media
                            </button>
                        </div>
                    </div>

                    {filteredItems.length === 0 ? (
                        <div className="mt-10 rounded-[2rem] border border-slate-900/10 bg-white/55 p-8 text-sm leading-7 text-slate-700 backdrop-blur-sm">
                            {searchTerm ? `No media found matching your search for "${searchTerm}".` : "No gallery media has been added yet."}
                        </div>
                    ) : (
                        <div className="mt-8 grid grid-cols-3 gap-1.5 sm:gap-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                            {filteredItems.map((item, index) => (
                                <button
                                    key={`${item.src}-${index}`}
                                    type="button"
                                    onClick={() => setSelectedIndex(index)}
                                    className="group relative aspect-square overflow-hidden rounded-[0.9rem] border border-slate-900/10 bg-slate-100 text-left shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition duration-200 hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-amber-400/70"
                                >
                                    {item.type === "video" ? (
                                        <>
                                            <div className="absolute inset-0 z-10 flex items-center justify-center">
                                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-xl text-white shadow-lg backdrop-blur-sm">
                                                    ▶
                                                </div>
                                            </div>
                                            <div className="absolute left-2 top-2 z-10 rounded-full border border-white/30 bg-black/35 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
                                                Video
                                            </div>
                                        </>
                                    ) : null}

                                    {item.type === "video" ? (
                                        <div className="h-full w-full bg-slate-900">
                                            <video
                                                className="h-full w-full object-cover opacity-90 transition duration-200 group-hover:scale-[1.02]"
                                                muted
                                                playsInline
                                                preload="metadata"
                                                src={item.src}
                                            />
                                        </div>
                                    ) : (
                                        <Image
                                            src={item.src}
                                            alt={item.title}
                                            width={1200}
                                            height={1200}
                                            className="h-full w-full object-cover transition duration-200 group-hover:scale-[1.02]"
                                            sizes="(max-width: 640px) 33vw, (max-width: 1024px) 25vw, 20vw"
                                            loading="lazy"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {selectedIndex !== null && filteredItems[selectedIndex] ? (
                <GalleryLightbox
                    items={filteredItems}
                    initialIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                    canEditCaption={isAuthenticated}
                    onEditCaption={handleEditCaptionOpen}
                />
            ) : null}

            {isEditOpen && editingItem ? (
                <div className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm">
                    <div className="w-full max-w-xl rounded-[2rem] border border-white/10 bg-slate-950 p-4 text-white shadow-[0_25px_80px_rgba(15,23,42,0.65)] sm:p-6">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">Admin edit</p>
                                <h3 className="mt-2 text-xl font-semibold text-white">Edit Caption</h3>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditOpen(false);
                                    setEditingItem(null);
                                    setEditingCaption("");
                                    setEditCaptionError("");
                                    setEditCaptionSuccess("");
                                }}
                                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
                                aria-label="Close caption editor"
                            >
                                ×
                            </button>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3">
                            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">Current caption</div>
                            <textarea
                                value={editingCaption}
                                onChange={(event) => setEditingCaption(event.target.value)}
                                rows={5}
                                placeholder="What caption do you want?"
                                className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-amber-300"
                            />
                        </div>

                        {editCaptionError ? (
                            <div className="mt-4 rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{editCaptionError}</div>
                        ) : null}

                        {editCaptionSuccess ? (
                            <div className="mt-4 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{editCaptionSuccess}</div>
                        ) : null}

                        <div className="mt-6 flex items-center justify-end gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsEditOpen(false);
                                    setEditingItem(null);
                                    setEditingCaption("");
                                    setEditCaptionError("");
                                    setEditCaptionSuccess("");
                                }}
                                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={handleEditCaptionSave}
                                disabled={isSavingCaption}
                                className="rounded-full bg-amber-300 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSavingCaption ? "Saving..." : "Save"}
                            </button>
                        </div>
                    </div>
                </div>
            ) : null}

            {isUploadOpen ? (
                <div className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/75 p-4 backdrop-blur-sm">
                    <div className="relative w-full max-w-2xl rounded-[2rem] border border-white/10 bg-slate-950 p-4 text-white shadow-[0_25px_80px_rgba(15,23,42,0.65)] sm:p-6">
                        <button
                            type="button"
                            onClick={() => {
                                resetUploadForm();
                                setIsUploadOpen(false);
                            }}
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition hover:bg-white/10"
                            aria-label="Close upload form"
                        >
                            ×
                        </button>

                        <div className="pr-10">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-300">Admin upload</p>
                            <h2 className="mt-2 text-2xl font-semibold text-white">Add Media</h2>
                        </div>

                        {!isAuthenticated ? (
                            <div className="mt-6 space-y-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                                <label className="block text-sm font-medium text-slate-200" htmlFor="gallery-admin-password">
                                    Admin password
                                </label>
                                <input
                                    id="gallery-admin-password"
                                    type="password"
                                    value={adminPassword}
                                    onChange={(event) => setAdminPassword(event.target.value)}
                                    placeholder="Enter admin password"
                                    className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2.5 text-sm text-white outline-none placeholder:text-slate-400 focus:border-amber-300"
                                />
                                <button
                                    type="button"
                                    onClick={handleAuthenticate}
                                    disabled={isCheckingAuth}
                                    className="inline-flex items-center justify-center rounded-full bg-amber-300 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isCheckingAuth ? "Unlocking..." : "Unlock Upload"}
                                </button>
                            </div>
                        ) : (
                            <>
                                <div
                                    onDragOver={(event) => {
                                        event.preventDefault();
                                        setDragActive(true);
                                    }}
                                    onDragLeave={() => setDragActive(false)}
                                    onDrop={(event) => {
                                        event.preventDefault();
                                        setDragActive(false);
                                        handleFileSelection(event.dataTransfer.files?.[0] ?? null);
                                    }}
                                    className={`mt-6 rounded-[1.5rem] border border-dashed p-6 text-center transition ${dragActive ? "border-amber-300 bg-amber-400/10" : "border-white/15 bg-white/5"}`}
                                >
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        accept=".jpg,.jpeg,.png,.webp,.gif,.mp4,.webm,.mov,image/jpeg,image/png,image/webp,image/gif,video/mp4,video/webm,video/quicktime"
                                        className="hidden"
                                        onChange={(event) => handleFileSelection(event.target.files?.[0] ?? null)}
                                    />
                                    <p className="text-sm text-slate-200">Drag and drop a photo or video here</p>
                                    <button
                                        type="button"
                                        onClick={() => fileInputRef.current?.click()}
                                        className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                                    >
                                        Choose file
                                    </button>
                                </div>

                                {selectedFile ? (
                                    <div className="mt-6 space-y-4">
                                        <div className="rounded-2xl border border-white/10 bg-white/5 p-3">
                                            <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">Selected media</div>
                                            <div className="flex items-center gap-3">
                                                <div className="h-16 w-16 overflow-hidden rounded-xl border border-white/10 bg-slate-900">
                                                    {previewUrl ? (
                                                        selectedFile.type.startsWith("video/") ? (
                                                            <video src={previewUrl} className="h-full w-full object-cover" muted playsInline />
                                                        ) : (
                                                            <Image src={previewUrl} alt={selectedFile.name} width={120} height={120} className="h-full w-full object-cover" />
                                                        )
                                                    ) : null}
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="truncate text-sm font-medium text-white">{selectedFile.name}</p>
                                                    <p className="mt-1 text-xs text-slate-300">{selectedFile.type || "Unknown type"}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <label className="block text-sm font-medium text-slate-200" htmlFor="gallery-caption">
                                            Caption
                                        </label>
                                        <textarea
                                            id="gallery-caption"
                                            value={caption}
                                            onChange={(event) => setCaption(event.target.value)}
                                            placeholder="What caption do you want?"
                                            rows={4}
                                            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-3 text-sm text-white outline-none placeholder:text-slate-400 focus:border-amber-300"
                                        />
                                    </div>
                                ) : null}

                                {uploadError ? (
                                    <div className="mt-4 rounded-xl border border-red-400/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">{uploadError}</div>
                                ) : null}

                                {uploadSuccess ? (
                                    <div className="mt-4 rounded-xl border border-emerald-400/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">{uploadSuccess}</div>
                                ) : null}

                                <div className="mt-6 flex items-center justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            resetUploadForm();
                                            setIsUploadOpen(false);
                                        }}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-white/10"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="button"
                                        onClick={handleUpload}
                                        disabled={!selectedFile || !caption.trim() || isUploading}
                                        className="rounded-full bg-amber-300 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-900 transition hover:bg-amber-200 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {isUploading ? "Uploading..." : "Upload"}
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            ) : null}
        </main>
    );
}

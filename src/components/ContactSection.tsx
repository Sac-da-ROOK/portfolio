import ContactForm from "@/components/ContactForm";
import Section from "@/components/Section";

const socials = [
    { label: "Email", href: "mailto:aarushsrivastava04@gmail.com", display: "Email" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourprofile", display: "LinkedIn" },
];

export default function ContactSection() {
    return (
        <Section id="contact" aria-labelledby="contact-heading">
            <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
                <div className="interactive-card glass-card relative overflow-hidden rounded-[2.5rem] p-10 ui-transition hover:border-cyan-400/30">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Get in touch</p>
                    <h2 id="contact-heading" className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Let’s connect on STEM ideas and opportunities.</h2>
                    <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                        I welcome conversations about competitions, projects, robotics, and collaborative STEM initiatives. I usually respond quickly with thoughtful follow-up.
                    </p>

                    <div className="mt-10 grid gap-4 rounded-[2rem] border border-white/12 bg-slate-950/60 p-6">
                        <div className="glass-card-soft flex items-center justify-between gap-4 rounded-3xl px-5 py-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Availability</p>
                                <p className="mt-2 text-lg font-semibold text-white">Open for STEM collaboration</p>
                            </div>
                            <span className="inline-flex rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200">Now</span>
                        </div>
                        <div className="glass-card-soft flex items-center justify-between gap-4 rounded-3xl px-5 py-4">
                            <div>
                                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Response time</p>
                                <p className="mt-2 text-lg font-semibold text-white">1–2 business days</p>
                            </div>
                            <span className="inline-flex rounded-full bg-cyan-400/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">Reliable</span>
                        </div>
                    </div>

                    <div className="mt-10">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Connect</p>
                        <div className="mt-4 flex flex-col gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="glass-card-soft rounded-3xl px-5 py-4 text-sm font-medium text-slate-200 ui-transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:text-white"
                                >
                                    <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">{social.label}</span>
                                    <span className="mt-1 block text-base font-semibold">{social.display}</span>
                                </a>
                            ))}
                            <div className="glass-card-soft rounded-3xl px-5 py-4 text-sm font-medium text-slate-200">
                                <span className="block text-xs uppercase tracking-[0.3em] text-slate-500">Phone</span>
                                <span className="mt-1 block text-base font-semibold">+1 (224) 647-1484</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="interactive-card glass-card relative overflow-hidden rounded-[2.5rem] p-8 ui-transition hover:border-cyan-400/30 sm:p-10">
                    <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cyan-400/10 to-transparent" />
                    <div className="relative">
                        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200">Contact form</p>
                        <h3 className="mt-3 text-3xl font-semibold text-white">Send a message</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">
                            Use the form to share your question, event, collaboration idea, or feedback about the portfolio.
                        </p>
                    </div>
                    <div className="mt-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </Section>
    );
}

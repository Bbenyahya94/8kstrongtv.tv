import Link from 'next/link';
import { ArrowLeft, MessageCircle, SearchX } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function NotFound() {
  return <><Header/><main className="shell flex min-h-[65vh] items-center justify-center py-20"><section className="card relative w-full max-w-2xl overflow-hidden p-8 text-center sm:p-14"><div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(6,182,212,.14),transparent_50%),radial-gradient(circle_at_80%_100%,rgba(245,158,11,.12),transparent_45%)]"/><div className="relative"><SearchX className="mx-auto h-10 w-10 text-cyan-300"/><p className="mt-7 text-7xl font-black tracking-[-.1em] text-amber-300 sm:text-9xl">404</p><p className="eyebrow mt-7">Page not found</p><h1 className="mt-3 text-3xl font-black sm:text-4xl">This channel is unavailable.</h1><p className="mx-auto mt-4 max-w-md leading-7 text-slate-400">The page may have moved, the link may be incorrect, or it may no longer be available.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link href="/" className="button-primary"><ArrowLeft className="mr-2 h-4"/>Back to home</Link><a href="https://wa.me/212670779271?text=Hello%2C%20I%20need%20help%20finding%20a%20page." target="_blank" rel="noreferrer" className="button-ghost"><MessageCircle className="mr-2 h-4"/>WhatsApp support</a></div></div></section></main><Footer/></>;
}

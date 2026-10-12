'use client';
import { useState } from 'react';
const questions = [
  ['How does the 24-hour trial work?', 'Send your preferred device and contact details. Our team will confirm availability and provide your trial instructions.'],
  ['Which devices are supported?', 'Popular devices include Fire TV, Android TV, Apple TV, Samsung and LG Smart TVs, Formuler, and apps such as TiviMate.'],
  ['Can I get help with setup?', 'Yes. The setup guide covers common devices, and you can contact support if you need more assistance.'],
  ['What is your refund policy?', 'Review the refund policy before purchasing. It explains eligibility, timing, and how to request help.']
];
export default function FAQ() { const [open, setOpen] = useState(0); return <div className="mx-auto max-w-3xl divide-y divide-white/10 rounded-2xl border border-white/10 bg-slate-950/40">{questions.map(([q,a], i) => <div key={q}><button className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-bold" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}><span>{q}</span><span className="text-teal-300">{open === i ? '−' : '+'}</span></button>{open === i && <p className="px-6 pb-5 text-sm leading-6 text-slate-400">{a}</p>}</div>)}</div>; }

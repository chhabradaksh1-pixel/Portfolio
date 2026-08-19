"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const toggleSections = [
  {
    id: "problem",
    title: "The Problem",
    content:
      "Roadies had strong audience anticipation, but the season needed a campaign that clearly brought the Double Cross theme to life.",
  },
  {
    id: "insight",
    title: "Insight",
    content:
      "Betrayal is instantly understood because people recognize it in friendships, relationships, street moments, and everyday choices.",
  },
  {
    id: "approach",
    title: "Approach",
    content:
      "The campaign framed Double Cross through relatable moments of trust, deception, and confrontation that matched the energy of the show.",
  },
  {
    id: "impact",
    title: "Impact",
    content:
      "The idea gave the season a simple, sharp hook that audiences could understand quickly and talk about naturally.",
  },
];

export default function MtvIndia() {
  const [activeSection, setActiveSection] = useState("problem");

  return (
    <main className="bg-portfolio-soft min-h-screen py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-8">
        <Link
          href="/#work"
          className="text-sm font-semibold uppercase tracking-wider text-[#5b4dff] transition hover:text-[#171329]"
        >
          Back to Work
        </Link>

        <div className="mt-10 rounded-2xl border border-violet-100 bg-white/90 p-8 shadow-sm shadow-violet-100/70 md:p-12">
          <Image
            src="/logo/mtv-india.svg"
            alt="MTV India"
            width={180}
            height={50}
          />

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.22em] text-[#5b4dff]">
            Case Study
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-bold leading-tight text-[#171329] md:text-6xl">
            Turning Roadies Double Cross into a campaign about betrayal.
          </h1>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <section className="rounded-2xl bg-[#fff7ed] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">The Problem</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Roadies had strong audience anticipation, but the season needed
                a campaign that clearly brought the Double Cross theme to life.
              </p>
            </section>

            <section className="rounded-2xl bg-[#f7f2ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Insight</h2>
              <p className="mt-4 leading-8 text-slate-600">
                Betrayal is instantly understood because people recognize it in
                friendships, relationships, street moments, and everyday
                choices.
              </p>
            </section>

            <section className="rounded-2xl bg-[#effdf6] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Approach</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The campaign framed Double Cross through relatable moments of
                trust, deception, and confrontation that matched the energy of
                the show.
              </p>
            </section>

            <section className="rounded-2xl bg-[#eef6ff] p-6">
              <h2 className="text-xl font-semibold text-[#171329]">Impact</h2>
              <p className="mt-4 leading-8 text-slate-600">
                The idea gave the season a simple, sharp hook that audiences
                could understand quickly and talk about naturally.
              </p>
            </section>
          </div>

          <div className="mt-12 rounded-3xl border border-violet-100 bg-[#f7f2ff] p-4 md:p-6">
            <div className="flex flex-wrap gap-3">
              {toggleSections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <button
                    key={section.id}
                    type="button"
                    onClick={() => setActiveSection(section.id)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#171329] text-white shadow-sm"
                        : "bg-white text-[#171329] hover:bg-violet-50"
                    }`}
                  >
                    {section.title}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-violet-100 bg-white p-6">
              {toggleSections.map((section) => {
                const isActive = activeSection === section.id;

                return (
                  <div
                    key={section.id}
                    className={isActive ? "block" : "hidden"}
                  >
                    <p className="text-base leading-8 text-slate-600">
                      {section.content}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Sprout } from "lucide-react";
import { musicInterior } from "@/lib/music";
import styles from "./Music.module.css";

const interior = musicInterior();

export const metadata: Metadata = {
  title: "Music — just seeded — Ayush Juvekar",
  description:
    "A world only just seeded, thin on purpose. Follow the becoming as it fills in over time.",
};

/**
 * The Music world interior — reached by holding its current at the Confluence.
 *
 * A `seed` world, honestly thin: no résumé, no hard CTA, no fabricated depth.
 * The reality chip is derived from the registry ({@link musicInterior}) so it
 * can never be upgraded to look more complete than the world is. The single ask
 * is to *follow the becoming*; the only way onward is back through the door.
 */
export default function MusicWorld() {
  return (
    <main className={styles.world}>
      <div className={styles.room} aria-hidden>
        <div className={styles.floor} />
        <div className={styles.bloom} />
      </div>

      <div className={styles.content}>
        <Link href={interior.backHref} className={styles.back}>
          ← the Confluence
        </Link>

        <span className={styles.chip}>
          <span className={styles.chipDot} aria-hidden />
          {interior.chip}
        </span>

        <p className={styles.eyebrow}>
          <Sprout size={14} aria-hidden className={styles.eyebrowIcon} />
          {interior.eyebrow}
        </p>

        <h1 className={`${styles.headline} font-display`}>
          {interior.headline}
        </h1>

        <div className={styles.prose}>
          {interior.honest.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        <div className={styles.divider} aria-hidden />

        <a
          className={styles.follow}
          href={interior.follow.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {interior.follow.label}
          <span className={styles.followHandle}>{interior.follow.handle}</span>
          <ArrowUpRight size={16} aria-hidden />
        </a>
      </div>
    </main>
  );
}

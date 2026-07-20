"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Github, Mail } from "lucide-react";
import { motion } from "motion/react";
import {
  freelanceInterior,
  type ClientProof,
  type PricingTier,
} from "@/lib/freelance";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import styles from "./Freelance.module.css";

// Render straight from the single tested interior surface, so what ships is
// exactly what the honesty invariants in lib/freelance.test.ts guard.
const { backHref, promise, fit, proof, tiers, trust, cta, fiverr } =
  freelanceInterior();

/**
 * The Freelance world interior — a borderless workshop reached by holding the
 * Freelance current at the confluence.
 *
 * Client-outcome lens ("what I can build *for you*"), moving through the five
 * parts of the offer: **promise · proof · offer · trust · CTA**. Proof reuses
 * Engineering's shipped builds under an outcome frame; pricing is published up
 * front so a client self-qualifies; the CTA is email-primary with Fiverr as the
 * honest secondary. All copy comes from the pure {@link "@/lib/freelance"}
 * module where the claims are unit-tested.
 */
export function Freelance() {
  return (
    <main className={styles.world}>
      <div className={styles.bloom} aria-hidden />

      <div className={styles.inner}>
        <Link href={backHref} className={styles.back}>
          <ArrowLeft size={15} aria-hidden />
          Back to the confluence
        </Link>

        {/* ── Promise ─────────────────────────────────────────────────── */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
        >
          <motion.span variants={fadeUp(16)} className={styles.eyebrow}>
            {promise.label}
          </motion.span>
          <motion.h1
            variants={fadeUp(22)}
            className={`${styles.title} font-display`}
          >
            {promise.headline}
          </motion.h1>
          <motion.p variants={fadeUp(22)} className={styles.lede}>
            {promise.lede}
          </motion.p>

          <motion.div variants={fadeUp(18)} className={styles.fit}>
            <p className={styles.fitLede}>{fit.lede}</p>
            <div className={styles.langs}>
              {fit.building.map((tech) => (
                <span key={tech} className={styles.lang}>
                  {tech}
                </span>
              ))}
            </div>
            <p className={styles.fitHonest}>{fit.honest}</p>
          </motion.div>
        </motion.header>

        {/* ── Proof ───────────────────────────────────────────────────── */}
        <Section
          kicker="Already shipped"
          title="What I've built for people who paid for it"
          note="Real, running products — open one and see the shape of what yours could be."
        >
          <div className={styles.proofGrid}>
            {proof.map((item) => (
              <ProofCard key={item.build.name} item={item} />
            ))}
          </div>
        </Section>

        {/* ── Offer ───────────────────────────────────────────────────── */}
        <Section
          kicker="Transparent pricing"
          title="Pick the scope that fits"
          note="Published up front so you can qualify yourself on budget before we ever talk. No 'contact us for a quote'."
        >
          <div className={styles.tierGrid}>
            {tiers.map((tier, i) => (
              <TierCard key={tier.name} tier={tier} featured={i === 1} />
            ))}
          </div>
        </Section>

        {/* ── Trust ───────────────────────────────────────────────────── */}
        <section className={styles.section}>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={fadeUp(20)}
          >
            <div className={styles.sectionHead}>
              <span className={styles.sectionKicker}>Why trust this</span>
              <span className={styles.rule} />
            </div>
            <h2 className={`${styles.sectionTitle} font-display`}>
              One person, honestly
            </h2>
          </motion.div>

          <motion.ul
            className={styles.trustList}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            variants={staggerContainer(0.07)}
          >
            {trust.points.map((point) => (
              <motion.li
                key={point}
                variants={fadeUp(18)}
                className={styles.trustItem}
              >
                <Check size={16} aria-hidden className={styles.trustIcon} />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <motion.section
          className={styles.terminal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
        >
          <span className={styles.terminalKicker}>Start here</span>
          <h2 className={`${styles.terminalTitle} font-display`}>
            {cta.label}
          </h2>
          <p className={styles.terminalBody}>{cta.note}</p>
          <a href={cta.href} className={styles.cta}>
            <Mail size={17} aria-hidden />
            {cta.label}
          </a>
          <a
            href={fiverr.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            {fiverr.label}
            <ArrowUpRight size={15} aria-hidden />
          </a>
          <p className={styles.secondaryNote}>{fiverr.note}</p>
        </motion.section>
      </div>
    </main>
  );
}

/** A titled band with a reveal-on-scroll body. */
function Section({
  kicker,
  title,
  note,
  children,
}: {
  kicker: string;
  title: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <section className={styles.section}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <div className={styles.sectionHead}>
          <span className={styles.sectionKicker}>{kicker}</span>
          <span className={styles.rule} />
        </div>
        <h2 className={`${styles.sectionTitle} font-display`}>{title}</h2>
        <p className={styles.sectionNote}>{note}</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer(0.07)}
      >
        {children}
      </motion.div>
    </section>
  );
}

function ProofCard({ item }: { item: ClientProof }) {
  const { build, outcome } = item;
  return (
    <motion.article variants={fadeUp(22)} className={styles.card}>
      <div className={styles.cardHead}>
        <h3 className={`${styles.cardName} font-display`}>{build.name}</h3>
        <div className={styles.cardLinks}>
          {build.source && (
            <IconLink href={build.source} label={`${build.name} source on GitHub`}>
              <Github size={15} aria-hidden />
            </IconLink>
          )}
          {build.href && (
            <IconLink href={build.href} label={`Open ${build.name}`}>
              <ArrowUpRight size={15} aria-hidden />
            </IconLink>
          )}
        </div>
      </div>
      <p className={styles.cardBody}>{outcome}</p>
      {build.note && <p className={styles.note}>{build.note}</p>}
      <div className={styles.stack}>
        {build.stack.map((tech) => (
          <span key={tech} className={styles.chip}>
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}

function TierCard({ tier, featured }: { tier: PricingTier; featured: boolean }) {
  return (
    <motion.article
      variants={fadeUp(22)}
      className={`${styles.tier} ${featured ? styles.tierFeatured : ""}`}
    >
      <div className={styles.tierHead}>
        <h3 className={`${styles.tierName} font-display`}>{tier.name}</h3>
        <p className={styles.tierPrice}>{tier.price}</p>
      </div>
      <p className={styles.tierSummary}>{tier.summary}</p>
      <ul className={styles.tierList}>
        {tier.includes.map((line) => (
          <li key={line} className={styles.tierItem}>
            <Check size={15} aria-hidden className={styles.tierCheck} />
            <span>{line}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

/** An external-opening icon link, styled as a square affordance in a card head. */
function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconLink}
      aria-label={label}
    >
      {children}
    </a>
  );
}

"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText, Github } from "lucide-react";
import { motion } from "motion/react";
import {
  RESUME_PATH,
  awards,
  craft,
  foundations,
  research,
  shipped,
  type ResearchBuild,
  type ShippedBuild,
} from "@/lib/engineering";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";
import styles from "./Engineering.module.css";

/**
 * The Engineering world interior — a bespoke, demonstrative route reached by
 * holding the Engineering current at the confluence.
 *
 * "Show, don't tell": it opens with the craft, then hands the visitor real
 * running products to open, the research behind the hard parts, a brief grounding
 * of foundations, and finally the one terminal artifact — the résumé PDF via
 * {@link RESUME_PATH}. All copy comes from the pure {@link "@/lib/engineering"}
 * module, where the facts are reconciled and unit-tested (#17).
 */
export function Engineering() {
  return (
    <main className={styles.world}>
      <div className={styles.bloom} aria-hidden />

      <div className={styles.inner}>
        <Link href="/" className={styles.back}>
          <ArrowLeft size={15} aria-hidden />
          Back to the confluence
        </Link>

        <motion.header
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.08)}
        >
          <motion.span variants={fadeUp(16)} className={styles.eyebrow}>
            The Engineering world
          </motion.span>
          <motion.h1
            variants={fadeUp(22)}
            className={`${styles.title} font-display`}
          >
            {craft.label}
          </motion.h1>
          <motion.p variants={fadeUp(22)} className={styles.lede}>
            {craft.lede}
          </motion.p>
          <motion.div variants={fadeUp(18)} className={styles.langs}>
            {craft.languages.map((lang) => (
              <span key={lang} className={styles.lang}>
                {lang}
              </span>
            ))}
          </motion.div>
        </motion.header>

        <Section
          kicker="Open it yourself"
          title="Things you can use right now"
          note="Real, running products — not screenshots. Open one and poke at it."
        >
          {shipped.map((build) => (
            <ShippedCard key={build.name} build={build} />
          ))}
        </Section>

        <Section
          kicker="Under the hood"
          title="How the hard parts work"
          note="The research and systems work behind the products — kept honest, hedges intact."
        >
          {research.map((build) => (
            <ResearchCard key={build.name} build={build} />
          ))}
        </Section>

        <Foundations />

        <motion.section
          className={styles.terminal}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={fadeUp(24)}
        >
          <span className={styles.terminalKicker}>The takeaway</span>
          <h2 className={`${styles.terminalTitle} font-display`}>
            Take the résumé into your process
          </h2>
          <p className={styles.terminalBody}>
            One generalist PDF — everything above, in the shape a hiring process
            expects. No role picker, no configuring.
          </p>
          <a href={RESUME_PATH} className={styles.cta}>
            <FileText size={17} aria-hidden />
            Download the résumé
          </a>
        </motion.section>
      </div>
    </main>
  );
}

/** A titled band with a reveal-on-scroll grid of cards. */
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
        className={styles.grid}
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

function ShippedCard({ build }: { build: ShippedBuild }) {
  return (
    <motion.article variants={fadeUp(22)} className={styles.card}>
      <div className={styles.cardHead}>
        <h3 className={`${styles.cardName} font-display`}>{build.name}</h3>
        <div className={styles.cardLinks}>
          {build.source && (
            <a
              href={build.source}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={`${build.name} source on GitHub`}
            >
              <Github size={15} aria-hidden />
            </a>
          )}
          {build.href && (
            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label={`Open ${build.name}`}
            >
              <ArrowUpRight size={15} aria-hidden />
            </a>
          )}
        </div>
      </div>
      <p className={styles.cardBody}>{build.outcome}</p>
      {build.note && <p className={styles.note}>{build.note}</p>}
      <Stack items={build.stack} />
    </motion.article>
  );
}

function ResearchCard({ build }: { build: ResearchBuild }) {
  return (
    <motion.article variants={fadeUp(22)} className={styles.card}>
      <div className={styles.cardHead}>
        <h3 className={`${styles.cardName} font-display`}>{build.name}</h3>
        {build.link ? (
          <a
            href={build.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.iconLink}
            aria-label={`${build.name} publication`}
          >
            <ArrowUpRight size={15} aria-hidden />
          </a>
        ) : (
          <span className={styles.year}>{build.year}</span>
        )}
      </div>
      <p className={styles.cardBody}>{build.contribution}</p>
      {build.metric && <p className={styles.metric}>{build.metric}</p>}
      <Stack items={build.stack} />
    </motion.article>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className={styles.stack}>
      {items.map((item) => (
        <span key={item} className={styles.chip}>
          {item}
        </span>
      ))}
    </div>
  );
}

function Foundations() {
  const { education, teaching } = foundations;
  return (
    <section className={styles.section}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={fadeUp(20)}
      >
        <div className={styles.sectionHead}>
          <span className={styles.sectionKicker}>The grounding</span>
          <span className={styles.rule} />
        </div>
        <h2 className={`${styles.sectionTitle} font-display`}>
          Foundations & recognition
        </h2>
      </motion.div>

      <motion.div
        className={styles.foundations}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={staggerContainer(0.06)}
      >
        {education.map((entry) => (
          <motion.div key={entry.school} variants={fadeUp(18)} className={styles.row}>
            <p className={styles.rowTitle}>{entry.school}</p>
            <p className={styles.rowSub}>{entry.degree}</p>
            <p className={styles.rowMeta}>
              {entry.period}
              {entry.detail ? ` · ${entry.detail}` : ""}
            </p>
          </motion.div>
        ))}

        <motion.div variants={fadeUp(18)} className={styles.row}>
          <p className={styles.rowTitle}>{teaching.role}</p>
          <p className={styles.rowSub}>{teaching.org}</p>
          <p className={styles.rowMeta}>{teaching.period}</p>
          <p className={styles.rowBody}>{teaching.detail}</p>
        </motion.div>

        {awards.map((award) => (
          <motion.div key={award.title} variants={fadeUp(18)} className={styles.row}>
            <p className={styles.rowTitle}>{award.title}</p>
            <p className={styles.rowSub}>{award.detail}</p>
            <p className={styles.rowMeta}>{award.year}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

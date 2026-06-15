import { Section } from "../../src/components/site/Section";
import { Card } from "../../src/components/site/Card";
import { Pill } from "../../src/components/site/Pill";
import { SmartLink } from "../../src/components/site/SmartLink";
import { ui } from "../../src/config/ui";
import { links } from "@/config/links";

const defs = [
  { term: "Unit", body: "A versioned knowledge object. Units are the stable building blocks referenced by snapshots." },
  { term: "Version", body: "An immutable revision of a Unit. Versions are the only admissible replay inputs." },
  { term: "Claim", body: "An explicit assertion attached to Units/Versions. Claims are part of the auditable knowledge state." },
  { term: "Uncertainty", body: "A first-class element that represents incompleteness, ambiguity, or confidence bounds. Uncertainty is explicit, not implicit." },
  { term: "Snapshot", body: "A cryptographic identifier (SHA-256) of a canonically encoded reconstructed knowledge state, plus references to all admissible inputs required for deterministic replay." },
] as const;

const guarantees = [
  { head: "Deterministic reconstruction", body: "Given the same referenced inputs and the same replay procedure, the reconstructed knowledge state MUST be identical." },
  { head: "Canonical state encoding", body: "The reconstructed knowledge state MUST be serialized in a canonical form so that hashing is stable across environments." },
  { head: "Snapshot hashing (SHA-256)", body: "The snapshot hash MUST be computed over the canonical state encoding using SHA-256." },
  { head: "Independent verification", body: "Any independent implementation MAY verify a snapshot by deterministic replay and hash comparison." },
  { head: "Evidence-based audit surface", body: "Verification MUST produce a report that links the snapshot, referenced inputs, and the computed result (PASS/FAIL)." },
] as const;

function formatLegacyTag(tag: string) {
  if (tag === "spec-v1.0") return "v1";
  return tag.replace(/^spec-/, "");
}

export default function SpecPage() {
  const legacyBaselineLabel = formatLegacyTag(links.legacy.releaseLine.baseline);
  const legacyPatchLabels = links.legacy.releaseLine.patches.map(formatLegacyTag);
  const legacyLatestPatchLabel = legacyPatchLabels[legacyPatchLabels.length - 1] ?? legacyBaselineLabel;

  return (
    <>
      <Section id="spec" variant="hero">
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-black">Specification (Normative Core)</h1>
          <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
            This page summarizes the normative guarantees and definitions of the DigiEmu Core public standard.
            It defines deterministic reconstruction of knowledge state and snapshot-verifiable verification.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Pill>Determinism</Pill>
            <Pill>Replay</Pill>
            <Pill>SHA-256 Snapshot</Pill>
            <Pill>Evidence</Pill>
            <Pill>Governance</Pill>
          </div>
        </div>
      </Section>

      <Section id="guarantees" dividerTop>
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className={["text-2xl", ui.text.title].join(" ")}>Normative Guarantees</h2>
          <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
            The following statements are intended as standard-level requirements. They define the audit surface.
          </p>

          <div className={["mt-10", ui.layout.grid2].join(" ")}>
            {guarantees.map((g) => (
              <Card key={g.head} className={ui.card.pad}>
                <div className="text-sm font-semibold text-black">{g.head}</div>
                <div className="mt-3 text-sm leading-6 text-black/70">{g.body}</div>
              </Card>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-sm text-black/50">Invariant</div>
            <div className="mt-2 text-sm font-medium text-black">Same inputs → same reconstructed state → same hash.</div>
          </div>
        </div>
      </Section>

      <Section id="definitions" dividerTop>
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className={["text-2xl", ui.text.title].join(" ")}>Definitions</h2>
          <div className={["mt-10", ui.layout.grid2].join(" ")}>
            {defs.map((d) => (
              <Card key={d.term} className={ui.card.pad}>
                <div className="text-sm text-black/50">Term</div>
                <div className="mt-2 text-base font-semibold text-black">{d.term}</div>
                <div className="mt-3 text-sm leading-6 text-black/70">{d.body}</div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="verification" dividerTop>
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className={["text-2xl", ui.text.title].join(" ")}>Verification Model</h2>
          <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
            Verification is evidence-based and tool-agnostic. It is defined as deterministic replay plus hash comparison.
          </p>

          <Card className={[ui.card.pad, "mt-10"].join(" ")}>
            <div className="text-sm text-black/50">Procedure</div>
            <ol className="mt-4 space-y-2 text-sm text-black/70">
              <li>1. Select snapshot</li>
              <li>2. Deterministically reconstruct state from referenced inputs</li>
              <li>3. Compute SHA-256 hash of canonical state encoding</li>
              <li>4. Compare computed hash to snapshot hash and produce report</li>
            </ol>
            <div className="mt-5 text-xs text-black/50">Output: PASS or FAIL.</div>
          </Card>

          <Card className={[ui.card.pad, "mt-4"].join(" ")}>
            <div className="text-sm text-black/50">CLI Contract v1 (baseline — locked)</div>
            <div className="mt-3 text-xs text-black/70">
              The v1 CLI contract is locked and documented in the Core repository.{" "}
              <SmartLink href={links.artifacts.cliContract} external className="underline underline-offset-4 hover:opacity-80">CLI_CONTRACT_v1.0.md</SmartLink>
            </div>
          </Card>
        </div>
      </Section>

      <Section id="artifacts" dividerTop>
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className={["text-2xl", ui.text.title].join(" ")}>Normative Artifacts</h2>
          <p className="mt-6 max-w-4xl text-[15px] leading-7 text-black/70">
            The following artifacts provide the full normative and governance definitions.
          </p>

          <div className={["mt-10", ui.layout.grid3].join(" ")}>
            <Card className={ui.card.pad}>
              <div className="text-sm font-semibold text-black">Core Specification (PDF — v1.0 archive)</div>
              <div className="mt-3">
                <SmartLink
                  href={links.docs.specification}
                  external
                  className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  Download (PDF)
                </SmartLink>
              </div>
            </Card>

            <Card className={ui.card.pad}>
              <div className="text-sm font-semibold text-black">Determinism — Formal Definition (PDF — v1.0 archive)</div>
              <div className="mt-3">
                <SmartLink
                  href={links.docs.determinismFormal}
                  external
                  className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  Download (PDF)
                </SmartLink>
              </div>
            </Card>

            <Card className={ui.card.pad}>
              <div className="text-sm font-semibold text-black">Conformance Requirements (PDF — v1.0 archive)</div>
              <div className="mt-3">
                <SmartLink
                  href={links.docs.conformance}
                  external
                  className="text-sm text-black/70 hover:text-black transition underline underline-offset-4 decoration-black/20"
                >
                  Download (PDF)
                </SmartLink>
              </div>
            </Card>
          </div>

          <div className="mt-10 rounded-3xl border border-black/10 bg-white p-6">
            <div className="text-sm text-black/50">Source</div>
            <div className="mt-3 flex flex-wrap gap-3 text-sm">
              <SmartLink href={links.githubCore} external className="text-black/70 hover:text-black transition">
                GitHub — Core Repo
              </SmartLink>
              <SmartLink href={links.githubReference} external className="text-black/70 hover:text-black transition">
                GitHub — Public Standard Site
              </SmartLink>
              <SmartLink href={links.reference} className="text-black/70 hover:text-black transition">
                Reference Page
              </SmartLink>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-black/10">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-semibold text-black">Normative keywords</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                The following keywords indicate requirement levels in this specification.
                They are used to express conformance criteria.
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-black/70">
                <li><span className="font-semibold text-black">MUST</span> — absolute requirement.</li>
                <li><span className="font-semibold text-black">SHALL</span> — normative requirement (equivalent to MUST).</li>
                <li><span className="font-semibold text-black">SHOULD</span> — recommended; valid reasons may exist to deviate.</li>
                <li><span className="font-semibold text-black">MAY</span> — optional behavior.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
              <h2 className="text-base font-semibold text-black">Normative references (PDF)</h2>
              <p className="mt-2 text-sm leading-relaxed text-black/70">
                The public documentation suite provides the formal specification and the conformance
                boundaries for deterministic replay and verification.
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <a
                  href={links.docs.specification}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black hover:bg-black/5"
                >
                  <div className="font-semibold">Specification v1.0</div>
                  <div className="mt-1 text-xs text-black/50">Download PDF (legacy archive)</div>
                </a>

                <a
                  href={links.docs.determinismFormal}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black hover:bg-black/5"
                >
                  <div className="font-semibold">Determinism (Formal) v1.0</div>
                  <div className="mt-1 text-xs text-black/50">Download PDF (legacy archive)</div>
                </a>

                <a
                  href={links.docs.conformance}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black hover:bg-black/5"
                >
                  <div className="font-semibold">Conformance Requirements v1.0</div>
                  <div className="mt-1 text-xs text-black/50">Download PDF (legacy archive)</div>
                </a>

                <a
                  href={links.docs.certification}
                  className="rounded-2xl border border-black/10 bg-white p-4 text-sm text-black hover:bg-black/5"
                >
                  <div className="font-semibold">Certification Requirements v1.0</div>
                  <div className="mt-1 text-xs text-black/50">Download PDF (legacy archive)</div>
                </a>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-black/50">
                Note: Download links serve PDF files from <code>public/docs</code>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Public Standard Synchronization: Core 2.0 Release Anchor --- */}
      <section id="release-anchors" className="mt-12 scroll-mt-24">
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className="text-xl font-semibold tracking-tight text-black">Release Anchors</h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            The current release is DigiEmu Core 2.0 (tag: <code>core-2.0.0</code>).
            This page mirrors the cryptographic release line as published in the DigiEmu Core repository.
          </p>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-sm font-semibold text-black">Current release</div>
            <div className="mt-1 font-mono text-sm text-black">{links.core2.tag}</div>
            <div className="mt-1 text-xs text-black/60">{links.core2.label}</div>

            <div className="mt-4 text-sm font-semibold text-black">GitHub</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li>
                <a className="underline underline-offset-4 hover:opacity-80" href={links.core2.release}>
                  Release: {links.core2.tag}
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.releases}>
                  All releases
                </a>
              </li>
              <li>
                <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.tags}>
                  Tags
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-sm font-semibold text-black">Legacy archive — v1 release line</div>
            <p className="mt-1 text-xs text-black/60">
              The v1 baseline and signed patch line remain available as a legacy archive.
            </p>
            <div className="mt-3 text-sm font-semibold text-black">Normative baseline</div>
            <div className="mt-1 font-mono text-sm text-black">{legacyBaselineLabel}</div>

            <div className="mt-4 text-sm font-semibold text-black">Signed patch line</div>
            <ul className="mt-2 space-y-1 font-mono text-sm text-black">
              {legacyPatchLabels.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="cryptographic-integrity" className="mt-12 scroll-mt-24">
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className="text-xl font-semibold tracking-tight text-black">Cryptographic Integrity</h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            Release tags are signed. Independent verification is performed with Git tag signature
            checks against the published public key material.
          </p>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-sm font-semibold text-black">Public signing key</div>
            <div className="mt-2 text-sm">
              <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.keysReadme}>
                KEYS README
              </a>
              <span className="text-black/50"> • </span>
              <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.keyAsc}>
                Public key (ASC)
              </a>
              <span className="text-black/50"> • </span>
              <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.verifying}>
                VERIFYING.md
              </a>
            </div>

            <div className="mt-4 text-sm font-semibold text-black">Fingerprint</div>
            <div className="mt-1 rounded-xl border border-black/10 bg-black/5 p-3 font-mono text-xs text-black">
              {links.coreReference.fingerprint}
            </div>

            <div className="mt-4 text-sm font-semibold text-black">Verify locally</div>
            <pre className="mt-2 overflow-x-auto rounded-xl border border-black/10 bg-black/5 p-3 text-xs text-black">{`git tag -v ${links.core2.tag}\n# Legacy v1 archive:\ngit tag -v ${legacyBaselineLabel}\ngit tag -v ${legacyLatestPatchLabel}`}</pre>

            <p className="mt-2 text-xs text-black/60">
              Verification uses Git’s built-in signature checks. The public key material and fingerprint are published in the public standard repository.
            </p>
          </div>
        </div>
      </section>

      <section id="audit-status" className="mt-12 scroll-mt-24">
        <div className={["mx-auto w-full", ui.layout.max, ui.layout.px].join(" ")}>
          <h2 className="text-xl font-semibold tracking-tight text-black">Audit Status</h2>
          <p className="mt-2 max-w-3xl text-sm text-black/70">
            Core 2.0 (<code>core-2.0.0</code>) is the current release. It is cryptographically anchored and audit-traceable.
          </p>

          <div className="mt-4 rounded-2xl border border-black/10 bg-white p-5">
            <div className="text-sm font-semibold text-black">Audit statement</div>
            <div className="mt-2 text-sm">
              <a className="underline underline-offset-4 hover:opacity-80" href={links.coreReference.auditStatement}>
                CORE_SECURITY_AUDIT_2026-04-05.md
              </a>
            </div>

            <div className="mt-4 text-sm font-semibold text-black">Core 2.0 — interop contract</div>
            <div className="mt-2 text-sm">
              <a className="underline underline-offset-4 hover:opacity-80" href={links.core2.interopContract}>
                CORE_2_INTEROP_CONTRACT.md
              </a>
            </div>

            <div className="mt-4 text-xs text-black/60">
              This website does not mint releases. It mirrors the cryptographic release line as published in the DigiEmu Core repository.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
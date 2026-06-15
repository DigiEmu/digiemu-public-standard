import { Section } from "../../src/components/site/Section";
import { links } from "../../src/config/links";

export const metadata = {
  title: "Docs — DigiEmu Core Public Standard",
  description: "DigiEmu Core 2.0 source documents on GitHub plus legacy v1.0 PDF archive.",
};

const DocRow = ({
  id,
  title,
  href,
  note,
  cta = "Open PDF",
}: {
  id: string;
  title: string;
  href: string;
  note?: string;
  cta?: string;
}) => (
  <div
    id={id}
    className="scroll-mt-28 rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
  >
    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-black">{title}</h2>
        {note ? <p className="mt-1 text-sm text-black/70">{note}</p> : null}
      </div>
      <a
        href={href}
        className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-black shadow-[0_1px_0_rgba(0,0,0,0.04)] hover:bg-black/5"
      >
        {cta}
      </a>
    </div>
  </div>
);

export default function DocsPage() {
  return (
    <main>
      <Section id="docs">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl">Docs</h1>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-black/70">
            Core 2.0 source documents are published on GitHub. Legacy v1.0 PDF documents are archived below.
          </p>

          <h2 className="mt-10 text-lg font-semibold tracking-tight text-black">Core 2.0 — GitHub source documents</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/70">
            Current normative and reference artifacts for DigiEmu Core 2.0.
          </p>

          <div className="mt-4 grid gap-4">
            <DocRow
              id="spec-index"
              title="Spec Index v1.0"
              href={links.artifacts.specIndex}
              note="Index of current normative specifications and implementation contracts."
              cta="Open on GitHub"
            />
            <DocRow
              id="cli-contract"
              title="CLI Contract v1.0"
              href={links.artifacts.cliContract}
              note="Locked CLI input/output contract for the DigiEmu Core verifier."
              cta="Open on GitHub"
            />
            <DocRow
              id="snapshot-hash"
              title="Snapshot Hash v1.0"
              href={links.artifacts.snapshotHash}
              note="Definition of the SHA-256 snapshot hash computation."
              cta="Open on GitHub"
            />
            <DocRow
              id="verify-spec"
              title="Verify Spec v1.0"
              href={links.artifacts.verifySpec}
              note="Verification procedure and expected output shape."
              cta="Open on GitHub"
            />
            <DocRow
              id="snapshot-bundle"
              title="Snapshot Bundle v1.0"
              href={links.artifacts.snapshotBundle}
              note="Bundle format: all referenced inputs required for deterministic replay."
              cta="Open on GitHub"
            />
            <DocRow
              id="test-strategy"
              title="Test Strategy"
              href={links.artifacts.testStrategy}
              note="Deterministic replay tests, golden vectors, compliance checks."
              cta="Open on GitHub"
            />
            <DocRow
              id="interop-contract"
              title="Core 2.0 — Interop Contract"
              href={links.artifacts.interopContract}
              note="How external systems may reference DigiEmu decision-state artifacts."
              cta="Open on GitHub"
            />
            <DocRow
              id="conformance-quickstart"
              title="Core 2.0 — Conformance Quickstart"
              href={links.artifacts.conformanceQuickstart}
              note="Partner-testable conformance run quickstart guide."
              cta="Open on GitHub"
            />
            <DocRow
              id="security-policy"
              title="Security Policy"
              href={links.artifacts.securityPolicy}
              note="Responsible disclosure and security posture."
              cta="Open on GitHub"
            />
            <DocRow
              id="determinism-exceptions"
              title="Determinism Exceptions"
              href={links.artifacts.determinismExceptions}
              note="Documented exceptions to deterministic replay guarantees."
              cta="Open on GitHub"
            />
            <DocRow
              id="verify-audit-spec"
              title="Audit / Security — April 2026"
              href={links.artifacts.verifyAuditSpec}
              note="Security audit statement and verification framework reference."
              cta="Open on GitHub"
            />
          </div>

          <h2 className="mt-14 text-lg font-semibold tracking-tight text-black">Legacy archive — v1.0 PDFs</h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-black/70">
            These PDFs are served from <code className="rounded bg-black/5 px-1">/public/docs</code> and reflect the v1.0 document suite.
            Use stable anchors (e.g. <code className="rounded bg-black/5 px-1">#specification</code>) to link to specific entries.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a href="#specification" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Specification</a>
            <a href="#governance" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Governance</a>
            <a href="#security-model" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Security Model</a>
            <a href="#threat-model" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Threat Model</a>
            <a href="#deployment" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Deployment</a>
            <a href="#determinism" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Determinism</a>
            <a href="#conformance" className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-medium text-black/80 hover:bg-black/5">Conformance</a>
          </div>

          <div className="mt-6 grid gap-4">
            <DocRow id="specification" title="Core Specification v1.0 (legacy archive)" href={links.docs.specification} note="Normative: data model, snapshot mechanics, deterministic replay." />
            <DocRow id="governance" title="Governance Framework v1.0 (legacy archive)" href={links.docs.governance} note="Roles, change control, decision records, compliance posture." />
            <DocRow id="security-model" title="Security Model v1.0 (legacy archive)" href={links.docs.securityModel} note="Threat surfaces, integrity, tamper evidence, artifact handling." />
            <DocRow id="threat-model" title="Threat Model v1.0 (legacy archive)" href={links.docs.threatModel} note="Adversary model, misuse cases, mitigations." />
            <DocRow id="deployment" title="Deployment Operational Guidelines v1.0 (legacy archive)" href={links.docs.deploymentGuidelines} note="Production assumptions, observability, change safety." />
            <DocRow id="determinism" title="Determinism Formal Definition v1.0 (legacy archive)" href={links.docs.determinismFormal} note="Formal notes on deterministic reconstruction and hashing." />
            <DocRow id="conformance" title="Conformance Requirements v1.0 (legacy archive)" href={links.docs.conformance} note="Conformance rules for implementations and audits." />
          </div>
        </div>
      </Section>
    </main>
  );
}
export const links = {
  spec: "/spec",
  reference: "/reference",
  architecture: "/architecture",
  compliance: "/compliance",
  contact: "/contact",

  githubCore: "https://github.com/DigiEmu/core",
  githubPublicStandard: "https://github.com/DigiEmu/digiemu-public-standard",

  // backwards-compatible alias
  githubReference: "https://github.com/DigiEmu/digiemu-public-standard",

  docsPage: "/docs",

  docs: {
    specification: "/docs/DigiEmu_Core_Specification_v1_0_ENTERPRISE.pdf",
    governance: "/docs/DigiEmu_Core_Governance_Framework_v1_0_ENTERPRISE.pdf",
    securityModel: "/docs/DigiEmu_Core_Security_Model_v1_0_ENTERPRISE.pdf",
    auditFramework: "/docs/DigiEmu_Core_Audit_Verification_Framework_v1_0_ENTERPRISE.pdf",
    threatModel: "/docs/DigiEmu_Core_Threat_Model_v1_0_ENTERPRISE.pdf",
    certification: "/docs/DigiEmu_Core_Certification_Technical_Requirements_v1_0_ENTERPRISE.pdf",
    deploymentGuidelines: "/docs/DigiEmu_Core_Deployment_Operational_Guidelines_v1_0_ENTERPRISE.pdf",
    determinismFormal: "/docs/DigiEmu_Core_Determinism_Formal_Definition_v1_0_ENTERPRISE.pdf",
    conformance: "/docs/DigiEmu_Core_Conformance_Requirements_v1_0_ENTERPRISE.pdf",
  },

  // Core 2.0 PDF bundle (public/docs/)
  docsV2: {
    specification: "/docs/DigiEmu_Core_2_0_Specification.pdf",
    interopContract: "/docs/DigiEmu_Core_2_0_Interop_Contract.pdf",
    verificationFramework: "/docs/DigiEmu_Core_2_0_Verification_Framework.pdf",
    governance: "/docs/DigiEmu_Core_2_0_Governance.pdf",
    conformance: "/docs/DigiEmu_Core_2_0_Conformance.pdf",
  },

  demo: {
    bundle: "/demo/demo_bundle_v2.json",
    verifyResult: "/demo/verify_result_v2.json",
  },

  artifacts: {
    testStrategy: "https://github.com/DigiEmu/core/tree/main/docs",
    verifyAuditSpec: "https://github.com/DigiEmu/core/blob/main/docs/CORE_SECURITY_AUDIT_2026-04-05.md",
    decLog: "https://github.com/DigiEmu/core/tree/main/01_decisions",
    specIndex: "https://github.com/DigiEmu/core/blob/main/docs/SPEC_INDEX_v1.0.md",
    cliContract: "https://github.com/DigiEmu/core/blob/main/docs/CLI_CONTRACT_v1.0.md",
    snapshotHash: "https://github.com/DigiEmu/core/blob/main/docs/SNAPSHOT_HASH_v1.0.md",
    verifySpec: "https://github.com/DigiEmu/core/blob/main/docs/VERIFY_SPEC_v1.0.md",
    snapshotBundle: "https://github.com/DigiEmu/core/blob/main/docs/SNAPSHOT_BUNDLE_v1.0.md",
    interopContract: "https://github.com/DigiEmu/core/blob/main/docs/CORE_2_INTEROP_CONTRACT.md",
    externalReviewNote: "https://github.com/DigiEmu/core/blob/main/docs/CORE_2_EXTERNAL_REVIEW_NOTE.md",
    conformanceQuickstart: "https://github.com/DigiEmu/core/blob/main/docs/CORE_2_CONFORMANCE_QUICKSTART.md",
    interopExamples: "https://github.com/DigiEmu/core/blob/main/examples/interop/README.md",
    securityPolicy: "https://github.com/DigiEmu/core/blob/main/SECURITY.md",
    determinismExceptions: "https://github.com/DigiEmu/core/blob/main/docs/security/DETERMINISM_EXCEPTIONS.md",
  },

  coreReference: {
    repo: "https://github.com/DigiEmu/core",
    releases: "https://github.com/DigiEmu/core/releases",
    tags: "https://github.com/DigiEmu/core/tags",
    keysReadme: "https://github.com/DigiEmu/core/tree/main/docs",
    keyAsc: "https://github.com/DigiEmu/core/tree/main/docs",
    verifying: "https://github.com/DigiEmu/core/blob/main/docs/VERIFY_SPEC_v1.0.md",
    auditStatement: "https://github.com/DigiEmu/core/blob/main/docs/CORE_SECURITY_AUDIT_2026-04-05.md",
    fingerprint: "DCB7 228C 6EC8 BE4A CB9E 049D 0F75 05E1 2685 E8A2",
  },

  // Core 2.0 release (current stable)
  core2: {
    tag: "core-2.0.0",
    label: "Core 2.0",
    release: "https://github.com/DigiEmu/core/releases/tag/core-2.0.0",
    tree: "https://github.com/DigiEmu/core/tree/core-2.0.0",
    verifySchema: "https://github.com/DigiEmu/core/blob/main/docs/VERIFY_RESULT_SCHEMA_v1.json",
    snapshotBundleSpec: "https://github.com/DigiEmu/core/blob/main/docs/SNAPSHOT_BUNDLE_v1.0.md",
    versioningPolicy: "https://github.com/DigiEmu/core/blob/main/docs/SPEC_INDEX_v1.0.md",
    interopContract: "https://github.com/DigiEmu/core/blob/main/docs/CORE_2_INTEROP_CONTRACT.md",
    conformanceQuickstart: "https://github.com/DigiEmu/core/blob/main/docs/CORE_2_CONFORMANCE_QUICKSTART.md",
  },

  // --- Legacy / Archive: v1 release line ---
  legacy: {
    releaseLine: {
      baseline: "spec-v1.0",
      patches: ["spec-v1.0.1", "spec-v1.0.2", "spec-v1.0.3"],
    },
    releaseLabels: {
      baseline: "v1",
      patches: ["v1.0.1", "v1.0.2", "v1.0.3"],
    },
    specV1: "https://github.com/DigiEmu/core/tree/cli-contract-v1.0.0/docs",
    cliContractV1Tag: "https://github.com/DigiEmu/core/releases/tag/cli-contract-v1.0.0",
    verifySchema: "https://github.com/DigiEmu/core/blob/cli-contract-v1.0.0/docs/VERIFY_RESULT_SCHEMA_v1.json",
    snapshotBundleSpec: "https://github.com/DigiEmu/core/blob/cli-contract-v1.0.0/docs/SNAPSHOT_BUNDLE_v1.0.md",
    versioningPolicy: "https://github.com/DigiEmu/core/blob/cli-contract-v1.0.0/docs/VERSIONING_POLICY_v1.0.md",
    bundle: "/demo/demo_bundle_v1.json",
    verifyResult: "/demo/verify_result_v1.json",
  },
} as const;
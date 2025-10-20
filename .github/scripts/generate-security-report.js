// .github/scripts/generate-security-report.js
import fs from "fs";
import PDFDocument from "pdfkit";

const doc = new PDFDocument({ margin: 40 });
doc.pipe(fs.createWriteStream("security-report.pdf"));

doc.fontSize(20).text("🔒 Security Scan Report", { align: "center" });
doc.moveDown();

const date = new Date().toISOString().split("T")[0];
doc.fontSize(12).text(`Generated at: ${date}`);
doc.moveDown(2);

// --- ESLint 部分 ---
if (fs.existsSync("eslint-report.json")) {
  doc.fontSize(16).text("📄 ESLint Security Results", { underline: true });
  const eslint = JSON.parse(fs.readFileSync("eslint-report.json", "utf8"));
  if (eslint.length === 0) {
    doc.text("No issues found ✅");
  } else {
    eslint.forEach((result) => {
      doc.moveDown();
      doc.text(`File: ${result.filePath}`);
      result.messages.forEach((msg) => {
        doc.text(`  • [${msg.ruleId || "no-rule"}] ${msg.message}`);
      });
    });
  }
  doc.moveDown();
}

// --- npm audit 部分 ---
doc.fontSize(16).text("📦 NPM Audit Results", { underline: true });
let audit;
try {
  audit = JSON.parse(fs.readFileSync("audit-report.json", "utf8"));
} catch {
  audit = null;
}

if (audit?.vulnerabilities) {
  const vulns = audit.vulnerabilities;
  Object.keys(vulns).forEach((pkg) => {
    const v = vulns[pkg];
    doc.moveDown();
    doc.fontSize(13).text(`Package: ${pkg}`);
    doc.text(`Severity: ${v.severity}`);
    doc.text(`Via: ${v.via.map((x) => (x.title ? x.title : x)).join(", ")}`);
    doc.text(`Fix Available: ${v.fixAvailable ? "✅ Yes" : "❌ No"}`);
    if (v.fixAvailable)
      doc.text(
        `Recommendation: ${v.fixAvailable.name || "Update to safe version"}`
      );
  });
} else {
  doc.text("No npm vulnerabilities detected ✅");
}

doc.moveDown(2);
doc.fontSize(16).text("🧠 Recommendations", { underline: true });
doc
  .fontSize(12)
  .list([
    "Run `npm audit fix` to automatically resolve known vulnerabilities.",
    "Review ESLint issues related to unsafe DOM usage or CSP violations.",
    "Enable Dependabot or Snyk for continuous dependency scanning.",
    "Regularly review Content Security Policy (CSP) settings to mitigate XSS.",
  ]);

doc.end();
console.log("✅ Generated security-report.pdf successfully!");

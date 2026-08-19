import { useState } from "react";
import { PDFIcon } from "../../components/SVGIcons";
import "./Compliance.css";

const complianceItems = [
  {
    id: "complaints",
    label: "Complaints",
    title: "Complaints",
    subtitle: "COMPLAINTS MANAGEMENT FRAMEWORK",
    heading: "DEFINITIONS",
    content: (
      <>
        <p>
          <strong>Client</strong> refers to a specific person or group of
          persons/members, the policyholder or potential policyholder.
        </p>

        <p>
          <strong>Policyholder query</strong> is a request to the insurer or the
          intermediary by the policyholder for information regarding the
          insurer&apos;s policies, services or related processes.
        </p>
      </>
    ),
    pdf: "/pdfs/COMPLAINTS_MANAGEMENT_FRAMEWORK.pdf",
  },
  {
    id: "conflict",
    label: "Conflict of Interest",
    title: "Conflict of Interest",
    subtitle: "CONFLICT OF INTEREST MANAGEMENT POLICY",
    heading: "OVERVIEW",
    content: (
      <p>
        This document outlines how Peter Christie Insurance Brokers manages,
        avoids, and discloses conflicts of interest.
      </p>
    ),
    pdf: "/pdfs/CONFLICT_OF_INTEREST_MANAGEMENT_POLICY.pdf",
  },
  {
    id: "tcf",
    label: "Treating Customers Fairly",
    title: "Treating Customers Fairly",
    subtitle: "TREATING CUSTOMERS FAIRLY POLICY",
    heading: "OVERVIEW",
    content: (
      <p>
        Our Treating Customers Fairly policy explains our commitment to fair
        treatment and transparency across all client interactions.
      </p>
    ),
    pdf: "/pdfs/TCF_Policy.pdf",
  },
  {
    id: "popi",
    label: "Protection of Personal Information",
    title: "Protection of Personal Information",
    subtitle: "POPIA POLICY",
    heading: "OVERVIEW",
    content: (
      <p>
        This policy explains how we collect, process, protect, and manage
        personal information in line with POPIA requirements.
      </p>
    ),
    pdf: "/pdfs/POPI.pdf",
  },
  {
    id: "paia",
    label: "PAIA Manual",
    title: "PAIA Manual",
    subtitle: "PROMOTION OF ACCESS TO INFORMATION ACT MANUAL",
    heading: "OVERVIEW",
    content: (
      <p>
        The PAIA Manual explains how requests for access to information can be
        submitted and processed.
      </p>
    ),
    pdf: "/pdfs/PAIA_MANUAL.pdf",
  },
];

export function Compliance() {
  const [selectedId, setSelectedId] = useState(complianceItems[0].id);

  const selectedItem = complianceItems.find(
    (item) => item.id === selectedId
  );

  return (
    <section className="compliance-section">
      <div className="compliance-nav-wrapper">
        <div className="compliance-nav">
          {complianceItems.map((item) => (
            <button
              key={item.id}
              className={`compliance-nav-button ${
                selectedId === item.id ? "active" : ""
              }`}
              onClick={() => setSelectedId(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="compliance-content-wrapper desktop-compliance-content">
        <ComplianceCard item={selectedItem} />
      </div>

      <div className="compliance-content-wrapper mobile-compliance-content">
        {complianceItems.map((item) => (
          <ComplianceCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

function ComplianceCard({ item }) {
  const handleDownload = async () => {
    try {
      const response = await fetch(item.pdf);

      if (!response.ok) {
        throw new Error("Failed to download PDF");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");

      link.href = url;
      link.download = `${item.title}.pdf`;

      document.body.appendChild(link);

      link.click();

      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF download failed:", error);
    }
  };

  return (
    <div className="compliance-card">
      <h2>{item.title}</h2>
      <h3>{item.subtitle}</h3>
      <h4>{item.heading}</h4>

      <div className="compliance-text">{item.content}</div>

      <button
        type="button"
        onClick={handleDownload}
        className="compliance-download-button"
      >
        <PDFIcon />
        Download PDF
      </button>
    </div>
  );
}
import { Layout } from "../../layout";
import "./cv.css";

export function CV() {
  return (
    <Layout>
      <div className="cv-page">
        <div className="cv-download">
          <a href="/salas_CV_08.2026.pdf" download className="cv-download-button">
            Download PDF
          </a>
        </div>
        <embed
          src="/salas_CV_08.2026.pdf"
          type="application/pdf"
          className="cv-embed"
        />
      </div>
    </Layout>
  );
}
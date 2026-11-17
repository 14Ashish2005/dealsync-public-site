import PageMeta from '../components/PageMeta.jsx'

export default function TermsPage() {
  return (
    <article className="content-page page-container legal-page">
      <PageMeta
        title="Terms and Conditions — DealSync"
        description="Terms for the standalone DealSync public information website."
      />
      <div className="page-heading">
        <span className="eyebrow">TERMS</span>
        <h1>Terms and Conditions</h1>
        <p>
          These terms apply to the standalone DealSync public information
          website. Effective date: 18 November 2026.
        </p>
      </div>

      <div className="prose-column">
        <section className="prose-section">
          <h2>Operator and scope</h2>
          <p>
            The operator is DealSync Project Team. This is an informational
            project website and is separate from the DealSync shopping
            application.
          </p>
        </section>

        <section className="prose-section">
          <h2>Informational website and project vision</h2>
          <p>
            Website content is provided for general informational purposes.
            This website does not provide product discovery, AI shopping
            assistance, product comparisons, shopping carts, checkout, or
            marketplace integrations.
          </p>
          <p>
            Product discovery, AI shopping assistance, product comparisons,
            carts, and marketplace integrations are part of the broader
            DealSync project vision; they are not provided by this standalone
            public website.
          </p>
        </section>

        <section className="prose-section">
          <h2>Acceptable use</h2>
          <p>
            Use this website lawfully and do not use it to disrupt its
            availability, attempt unauthorized access to systems or data, or
            interfere with other visitors’ use of the website.
          </p>
        </section>

        <section className="prose-section">
          <h2>Contact</h2>
          <p>
            For questions about these terms or the website, contact DealSync
            Project Team at{' '}
            <a href="mailto:dealsync06@gmail.com">dealsync06@gmail.com</a>.
          </p>
        </section>
      </div>
    </article>
  )
}

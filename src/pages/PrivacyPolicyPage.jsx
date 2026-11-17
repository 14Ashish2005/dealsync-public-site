import PageMeta from '../components/PageMeta.jsx'

export default function PrivacyPolicyPage() {
  return (
    <article className="content-page page-container legal-page">
      <PageMeta
        title="Privacy Policy — DealSync"
        description="Privacy information for the standalone DealSync public information website."
      />
      <div className="page-heading">
        <span className="eyebrow">PRIVACY</span>
        <h1>Privacy Policy</h1>
        <p>
          This policy covers only the standalone DealSync public information
          website, operated by DealSync Project Team. Effective date: 18
          November 2026.
        </p>
      </div>

      <div className="prose-column">
        <section className="prose-section">
          <h2>Scope</h2>
          <p>
            This policy applies only to this standalone public information
            website. It does not cover the separate DealSync shopping
            application, its backend, or other services.
          </p>
          <p>
            This website does not provide login, product search, AI chat, image
            uploads, shopping carts, or checkout. It is separate from the
            DealSync shopping application.
          </p>
        </section>

        <section className="prose-section">
          <h2>Information and contact</h2>
          <p>
            This website has no in-site contact form. Its contact link opens
            your email application. If you choose to email the team, the team
            receives the email address and message content you provide so it
            can respond to your inquiry. Your email service also handles that
            message.
          </p>
        </section>

        <section className="prose-section">
          <h2>Hosting and technical information</h2>
          <p>
            The production hosting configuration and any provider-specific
            technical logging have not been verified. This information will be
            updated when the production configuration is confirmed.
          </p>
        </section>

        <section className="prose-section">
          <h2>Privacy questions</h2>
          <p>
            For privacy questions about this standalone public website, contact
            DealSync Project Team at{' '}
            <a href="mailto:dealsync06@gmail.com">dealsync06@gmail.com</a>.
          </p>
        </section>
      </div>
    </article>
  )
}

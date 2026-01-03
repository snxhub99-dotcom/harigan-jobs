import React from 'react';
import SectionTitle from './SectionTitle';

const TermsAndConditions: React.FC = () => {
  return (
    <section id="terms" className="py-16 md:py-24 bg-gray-900 text-text-light">
      <div className="container mx-auto px-6 max-w-4xl">
        <SectionTitle
          title="Terms & Conditions"
          subtitle="Understanding our partnership for mutual success."
        />
        <div className="text-left mt-12 space-y-8 leading-relaxed">
          <p>
            Welcome to Resto Jobs. By engaging with our manpower consultancy services,
            you agree to the following terms and conditions. These terms are designed
            to ensure transparency and clarity in our professional relationship.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">1. Scope of Services</h3>
            <p className="mb-4">
              Resto Jobs specializes in end-to-end staffing solutions for the restaurant
              and café industry. Our services include candidate sourcing, screening,
              shortlisting, interview coordination, and post-placement support as
              detailed in our service modules. Specific service agreements will be
              outlined in individual contracts.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">2. Client Responsibilities</h3>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Provide clear and accurate job descriptions and requirements.</li>
              <li>Communicate feedback on candidates in a timely manner.</li>
              <li>Adhere to agreed-upon payment schedules.</li>
              <li>Ensure a safe and compliant working environment for placed candidates.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">3. Fees and Payment</h3>
            <p className="mb-4">
              Our fee structure will be clearly communicated and agreed upon prior
              to the commencement of services. Invoices will be issued as per the
              payment milestones outlined in your service agreement. All fees are
              non-refundable unless explicitly stated otherwise in the contract.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">4. Confidentiality</h3>
            <p className="mb-4">
              Resto Jobs is committed to maintaining the confidentiality of all client
              and candidate information shared during the recruitment process. We expect
              clients to also respect the privacy and confidentiality of candidate data.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-accent-gold mb-4">5. Guarantees and Replacements</h3>
            <p className="mb-4">
              We strive for optimal placements. In the rare event that a placed candidate
              departs within a specified guarantee period (as outlined in the service
              contract), Resto Jobs will provide a replacement at no additional charge
              under certain conditions.
            </p>
          </div>

          <p>
            These terms and conditions may be updated periodically. It is advisable
            to review them regularly. For any questions or clarifications, please
            contact us directly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;

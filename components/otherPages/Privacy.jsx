import React from "react";

export default function Privacy() {
  return (
    <div className="section py-4 lg:py-6 xl:py-8">
      <div className="container max-w-lg">
        <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
          <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
            <div className="panel">
              <h1 className="h3 lg:h1 m-0">Privacy Policy</h1>
            </div>
          </header>
          <div className="page-content panel fs-6 md:fs-5">
            <p>
              At Galactic Technologies, your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and disclose your information when you visit our website or use our services.
            </p>
            <p>
              By using our website or engaging with our services, you agree to the practices described in this policy.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">1. Information We Collect</h3>
            <ul className="list list-bullets">
              <li><strong>Personal Information:</strong> Name, email, phone number, company name, and other data you provide when contacting or working with us.</li>
              <li><strong>Non-Personal Information:</strong> IP address, browser type, pages visited, and technical data collected through cookies and analytics tools.</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">2. How We Use Your Information</h3>
            <ul className="list list-bullets">
              <li>To respond to your inquiries and provide services.</li>
              <li>To improve our website functionality and user experience.</li>
              <li>To send relevant updates and communications.</li>
              <li>To ensure security and prevent fraudulent activity.</li>
            </ul>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">3. Sharing Your Information</h3>
            <p>
              We do not sell or rent your personal information. We may share it with trusted service providers, or when required by law, to protect our rights or comply with legal obligations.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">4. Data Security</h3>
            <p>
              We implement standard security measures to protect your data. However, no online method is completely secure, and we cannot guarantee absolute security.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">5. Cookies and Tracking</h3>
            <p>
              We use cookies to enhance your experience and analyze usage. You can manage your cookie preferences in your browser settings.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">6. Third-Party Links</h3>
            <p>
              Our site may link to third-party websites. We are not responsible for their content or privacy practices. We recommend reviewing their policies separately.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">7. Your Rights</h3>
            <p>
              You may have the right to access, update, or delete your data. Contact us if you'd like to exercise any data privacy rights or request a copy of your information.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">8. Children’s Privacy</h3>
            <p>
              Our services are not intended for children under 13. We do not knowingly collect information from minors. If we discover any such data, we will remove it promptly.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">9. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy occasionally. The latest version will always be available here. Your continued use of our website after changes means you accept the updated policy.
            </p>

            <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">10. Contact Us</h3>
            <p>
              For questions about this policy, please contact us:<br />
              📧 Email: info@gtl.com <br />
              📞 Phone: 8894030663 <br />
              🌐 Website: www.galactictechnologies.com
            </p>
          </div>
          <div className="page-footer panel">
            <p className="fs-7 opacity-60 m-0">Last updated: 20 May, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const Privacy = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Privacy Policy</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Your privacy is important to us. Learn how we collect, use, and protect your personal information.
        </p>
      </header>

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Information We Collect</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Personal Information</p>
                <p className="text-slate-600">Name, email address, phone number, and shipping address when you create an account or place an order</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Payment Information</p>
                <p className="text-slate-600">Payment details processed securely through our payment partners</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Usage Data</p>
                <p className="text-slate-600">Information about how you use our website, including pages visited and products viewed</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">How We Use Your Information</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Process and fulfill your orders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Provide customer support and respond to your inquiries</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Send you important updates about your orders</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Improve our website and services</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Send marketing communications (with your consent)</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Information Sharing</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Service Providers</p>
                <p className="text-slate-600">With trusted partners who help us operate our business (payment processors, shipping companies)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Legal Requirements</p>
                <p className="text-slate-600">When required by law or to protect our rights and safety</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Business Transfers</p>
                <p className="text-slate-600">In connection with a merger, acquisition, or sale of assets</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Data Security</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Security Measures:</span> SSL encryption, secure payment processing, regular security audits, and employee training on data protection.
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Your Rights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Access & Update</h3>
              <p className="text-slate-600 text-sm">You can access and update your personal information in your account settings</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Data Deletion</h3>
              <p className="text-slate-600 text-sm">You can request deletion of your personal data by contacting us</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Marketing Opt-out</h3>
              <p className="text-slate-600 text-sm">You can unsubscribe from marketing communications at any time</p>
            </div>
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">Data Portability</h3>
              <p className="text-slate-600 text-sm">You can request a copy of your data in a portable format</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Us About Privacy</h2>
          <p className="mb-6 opacity-80">
            If you have any questions about this Privacy Policy or our data practices, please contact us.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Email:</span>
              <span>privacy@ronniesfabrics.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Phone:</span>
              <span>07019277357</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Address:</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Policy Updates</h2>
          <p className="text-slate-600 leading-relaxed text-center">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          <div className="text-center mt-4">
            <p className="text-sm text-slate-500">Last updated: January 14, 2026</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
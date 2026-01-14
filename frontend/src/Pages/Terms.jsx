import React from 'react';

const Terms = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Terms & Conditions</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Please read these terms and conditions carefully before using our services.
        </p>
      </header>

      <div className="space-y-8">
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-600 leading-relaxed">
            By accessing and using Ronniesfabrics website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Use License</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Permission Granted</p>
                <p className="text-slate-600">Permission is granted to temporarily access the materials on Ronniesfabrics website for personal, non-commercial transitory viewing only</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Prohibited Uses</p>
                <p className="text-slate-600">You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information obtained from this website</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Product Information & Pricing</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Accuracy</p>
                <p className="text-slate-600">We strive to provide accurate product descriptions, pricing, and availability information, but we do not warrant that product descriptions or other content is accurate, complete, or current</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Price Changes</p>
                <p className="text-slate-600">Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product at any time</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Orders & Payment</h2>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>All orders are subject to acceptance and availability</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>Payment must be received in full before order processing begins</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>We reserve the right to refuse or cancel any order for any reason</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 font-bold">•</span>
              <span>All payments are processed securely through authorized payment providers</span>
            </li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Shipping & Delivery</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Delivery Times</p>
                <p className="text-slate-600">Delivery times are estimates and may vary due to factors beyond our control</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">Risk of Loss</p>
                <p className="text-slate-600">Risk of loss passes to the buyer upon delivery to the carrier</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-orange-500 font-bold text-lg">•</span>
              <div>
                <p className="font-semibold text-slate-800">International Shipping</p>
                <p className="text-slate-600">Additional customs duties and taxes may apply for international orders</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Returns & Refunds</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Returns and refunds are subject to our return policy. Please refer to our Returns page for detailed information.
          </p>
          <div className="bg-white p-4 rounded-lg border border-orange-200">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-slate-800">Return Window:</span> 14 days from delivery<br/>
              <span className="font-semibold text-slate-800">Conditions:</span> Items must be unused and in original packaging<br/>
              <span className="font-semibold text-slate-800">Refunds:</span> Processed within 5-7 business days after receipt
            </p>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">User Conduct</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            You agree not to use the website for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances.
          </p>
          <div className="space-y-2 text-slate-600">
            <p className="text-sm">Prohibited activities include but are not limited to:</p>
            <ul className="space-y-1 text-sm ml-4">
              <li>• Using the site for any fraudulent or illegal activities</li>
              <li>• Interfering with or disrupting the website or servers</li>
              <li>• Attempting to gain unauthorized access to any part of the site</li>
              <li>• Using automated systems to access the website without permission</li>
            </ul>
          </div>
        </section>

        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p className="mb-6 opacity-80">
            If you have any questions about these Terms & Conditions, please contact us.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Email:</span>
              <span>legal@ronniesfabrics.com</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Phone:</span>
              <span>09075799282</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-orange-400 font-semibold">Address:</span>
              <span>Lagos, Nigeria</span>
            </div>
          </div>
        </section>

        <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Terms Updates</h2>
          <p className="text-slate-600 leading-relaxed text-center">
            We reserve the right to update these terms and conditions at any time. Changes will be effective immediately upon posting on this page.
          </p>
          <div className="text-center mt-4">
            <p className="text-sm text-slate-500">Last updated: January 14, 2026</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
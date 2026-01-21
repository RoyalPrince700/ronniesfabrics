import React from 'react';

const PurchaseProtection = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Purchase Protection</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Shop with confidence knowing your purchases are protected by our comprehensive buyer protection program.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Secure Payment</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">SSL Encryption</p>
                  <p className="text-slate-600">All transactions are secured with 256-bit SSL encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Trusted Partners</p>
                  <p className="text-slate-600">We work with verified payment processors like Stripe and Flutterwave</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">PCI Compliance</p>
                  <p className="text-slate-600">Our payment systems meet PCI DSS security standards</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Quality Guarantee</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We stand behind the quality of our fabrics and materials. Every product undergoes quality control checks before shipping.
            </p>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Defective Items:</span> Full refund or replacement within 30 days<br/>
                <span className="font-semibold text-slate-800">Quality Issues:</span> Free repair or replacement<br/>
                <span className="font-semibold text-slate-800">Authenticity:</span> All products are genuine, high-quality fabrics
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Order Protection</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Order confirmation via SMS and email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Real-time order tracking and updates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Dedicated customer support for order issues</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>24/7 order status monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Insurance coverage for high-value orders</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Resolution Center</h2>
            <p className="mb-6 opacity-80">
              Our dedicated team ensures swift resolution for any purchase-related concerns.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Response Time:</span>
                <span>Within 24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Resolution Rate:</span>
                <span>98% positive outcomes</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Support Hours:</span>
                <span>Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Protection Promise</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Secure Transactions</h3>
            <p className="text-slate-600 text-sm">Bank-level security for all payments and personal information</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-2xl">✅</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Quality Assured</h3>
            <p className="text-slate-600 text-sm">Rigorous quality checks ensure you receive premium fabrics</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-600 font-bold text-2xl">🛡️</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Buyer Protection</h3>
            <p className="text-slate-600 text-sm">Comprehensive coverage for your peace of mind</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">How to Report an Issue</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">For Order Issues:</h3>
            <ol className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">1.</span>
                <span>Contact our support team at 07019277357 or support@ronniesfabrics.com</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">2.</span>
                <span>Provide your order number and describe the issue</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">3.</span>
                <span>Include photos if applicable (damaged items, quality issues)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">4.</span>
                <span>Receive resolution within 24-48 hours</span>
              </li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-slate-800 mb-3">For Payment Issues:</h3>
            <ol className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">1.</span>
                <span>Check your payment confirmation email/SMS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">2.</span>
                <span>Contact your bank if the charge doesn't appear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">3.</span>
                <span>Reach out to our team for immediate assistance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">4.</span>
                <span>Refund processed within 3-5 business days</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">Need Protection Help?</h2>
        <p className="text-center mb-6 opacity-80">
          Our purchase protection team is here to help resolve any concerns quickly and fairly.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-xl">📞</span>
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="opacity-80">07019277357</p>
            <p className="text-sm opacity-60">Mon-Fri 9AM-6PM</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-xl">📧</span>
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="opacity-80">protection@ronniesfabrics.com</p>
            <p className="text-sm opacity-60">24/7 support</p>
          </div>
          <div>
            <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="font-bold text-xl">💬</span>
            </div>
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="opacity-80">Available on website</p>
            <p className="text-sm opacity-60">Mon-Sat 9AM-8PM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PurchaseProtection;
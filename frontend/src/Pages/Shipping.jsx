import React from 'react';

const Shipping = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Shipping & Delivery</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Fast, reliable delivery to get your fabrics and materials to you when you need them most.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Delivery Times</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Standard Delivery</p>
                  <p className="text-slate-600">3-5 business days - Free on orders over ₦50,000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Express Delivery</p>
                  <p className="text-slate-600">1-2 business days - ₦5,000 additional fee</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Same Day Delivery</p>
                  <p className="text-slate-600">Available in Lagos - ₦10,000 fee (orders before 12 PM)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Shipping Costs</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We offer competitive shipping rates with free delivery on qualifying orders. Shipping costs are calculated at checkout based on your location and order value.
            </p>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Free Shipping:</span> Orders over ₦50,000<br/>
                <span className="font-semibold text-slate-800">Standard Rate:</span> ₦2,500 for orders under ₦50,000
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Delivery Areas</h2>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Lagos and surrounding areas (metropolitan)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>All major cities across Nigeria</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>International shipping available upon request</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 font-bold">•</span>
                <span>Remote areas may have extended delivery times</span>
              </li>
            </ul>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
            <p className="mb-6 opacity-80">
              Track your order in real-time from our website. You'll receive tracking updates via SMS and email.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Phone:</span>
                <span>09075799282</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Email:</span>
                <span>contact@ronniesfabrics.com</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Hours:</span>
                <span>Mon-Fri 9AM-6PM</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="mt-12 bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">Important Shipping Notes</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-xl">📦</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Secure Packaging</h3>
            <p className="text-slate-600 text-sm">All fabrics are carefully packaged to prevent damage during transit</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-xl">🚚</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Reliable Partners</h3>
            <p className="text-slate-600 text-sm">We work with trusted courier services for safe and timely delivery</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 font-bold text-xl">📞</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Customer Support</h3>
            <p className="text-slate-600 text-sm">Our team is available to assist with any delivery concerns</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
import React from 'react';

const Returns = () => {
  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Returns & Exchanges</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          We're committed to your satisfaction. Learn about our hassle-free return and exchange policy.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Return Policy</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Return Window</p>
                  <p className="text-slate-600">Items can be returned within 14 days of delivery</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Condition Requirements</p>
                  <p className="text-slate-600">Fabrics must be unused, in original packaging, and with tags attached</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-orange-500 font-bold text-lg">•</span>
                <div>
                  <p className="font-semibold text-slate-800">Return Shipping</p>
                  <p className="text-slate-600">Free return shipping for defective items; customer pays for other returns</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#FFF9F5] p-8 rounded-3xl shadow-sm border border-orange-100">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Exchange Policy</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We offer exchanges for different sizes, colors, or styles within 14 days of purchase. Exchanges are subject to stock availability.
            </p>
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">Exchange Fee:</span> ₦2,000 processing fee<br/>
                <span className="font-semibold text-slate-800">Shipping:</span> Free for exchanges
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Return Process</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Contact Us</p>
                  <p className="text-slate-600">Call or email to initiate your return request</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Package Item</p>
                  <p className="text-slate-600">Securely package the item in its original packaging</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Ship Back</p>
                  <p className="text-slate-600">Use the provided return label or approved courier</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Refund Processing</p>
                  <p className="text-slate-600">Receive your refund within 5-7 business days</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Contact for Returns</h2>
            <p className="mb-6 opacity-80">
              Our customer service team is ready to assist you with your return or exchange request.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Phone:</span>
                <span>09075799282</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-orange-400 font-semibold">Email:</span>
                <span>returns@ronniesfabrics.com</span>
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
        <h2 className="text-2xl font-bold text-slate-800 mb-4 text-center">What We Don't Accept Returns On</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 font-bold text-xl">✂️</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Cut Fabrics</h3>
            <p className="text-slate-600 text-sm">Fabrics that have been cut or altered</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 font-bold text-xl">🧴</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Used Items</h3>
            <p className="text-slate-600 text-sm">Items that show signs of use or wear</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 font-bold text-xl">🏷️</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Missing Tags</h3>
            <p className="text-slate-600 text-sm">Items without original tags or labels</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-red-600 font-bold text-xl">📦</span>
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">Damaged Packaging</h3>
            <p className="text-slate-600 text-sm">Items returned without proper packaging</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;
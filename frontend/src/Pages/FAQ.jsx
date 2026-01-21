import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqCategories = [
    {
      title: "Ordering & Payment",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "Browse our fabric collection, add items to your cart, and proceed to checkout. You'll receive a confirmation call to finalize your order details and payment."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, bank transfers, and digital payment methods including PayPal, Flutterwave, and direct bank transfers."
        },
        {
          question: "Is it safe to make payments on your website?",
          answer: "Yes, we use industry-standard SSL encryption and work with trusted payment processors to ensure your payment information is secure."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "Orders can be modified within 1 hour of placement. Please contact us immediately at 07019277357 to make changes."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      faqs: [
        {
          question: "How long does delivery take?",
          answer: "Standard delivery takes 3-5 business days. Express delivery (1-2 days) is available for ₦5,000 additional fee. Same-day delivery is available in Lagos for ₦10,000."
        },
        {
          question: "Do you offer free shipping?",
          answer: "Yes! Free standard shipping on all orders over ₦50,000. Orders under this amount have a ₦2,500 shipping fee."
        },
        {
          question: "Can I track my order?",
          answer: "Yes, you'll receive tracking information via SMS and email once your order ships. You can also track your order through your account dashboard."
        },
        {
          question: "What if my package is damaged during delivery?",
          answer: "Please take photos of the damaged packaging and contact us immediately. We'll arrange for a replacement or full refund at no cost to you."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      faqs: [
        {
          question: "What is your return policy?",
          answer: "We accept returns within 14 days of delivery. Items must be unused, in original packaging, and with tags attached. Customer pays return shipping unless the item is defective."
        },
        {
          question: "How do I return an item?",
          answer: "Contact our customer service team, receive a return authorization, package the item securely, and ship it back using our preferred courier. We'll process your refund within 5-7 business days."
        },
        {
          question: "Can I exchange an item for a different one?",
          answer: "Yes, exchanges are available within 14 days. There's a ₦2,000 processing fee, but shipping is free. Exchanges are subject to stock availability."
        },
        {
          question: "How long do refunds take to process?",
          answer: "Refunds are processed within 5-7 business days after we receive your returned item. The time for the refund to appear in your account depends on your payment method."
        }
      ]
    },
    {
      title: "Products & Quality",
      faqs: [
        {
          question: "Are your fabrics authentic and high quality?",
          answer: "Yes, we source our fabrics directly from reputable manufacturers and only sell genuine, high-quality materials. Each fabric undergoes quality control checks before shipping."
        },
        {
          question: "Do you provide fabric samples?",
          answer: "We offer fabric swatches for most items. You can request samples during checkout or by contacting our customer service team."
        },
        {
          question: "What care instructions do you provide?",
          answer: "Each fabric comes with detailed care instructions. Our team can also provide guidance on washing, ironing, and maintaining your fabrics."
        },
        {
          question: "Can you help me choose the right fabric for my project?",
          answer: "Absolutely! Our experienced team can provide recommendations based on your project needs, budget, and preferences. Contact us for personalized advice."
        }
      ]
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mt-[80px] lg:mt-[100px] mx-auto p-4 max-w-5xl">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-serif text-slate-800">Frequently Asked Questions</h1>
        <div className="w-16 h-[2px] bg-orange-400 mx-auto mt-4"></div>
        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Find answers to common questions about our fabrics, ordering process, and policies.
        </p>
      </header>

      <div className="space-y-8">
        {faqCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="bg-white p-8 rounded-3xl shadow-sm border border-orange-50">
            <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-4 border-b border-orange-100">
              {category.title}
            </h2>

            <div className="space-y-4">
              {category.faqs.map((faq, faqIndex) => {
                const globalIndex = `${categoryIndex}-${faqIndex}`;
                return (
                  <div key={faqIndex} className="border-b border-orange-50 last:border-b-0 pb-4 last:pb-0">
                    <button
                      className="w-full text-left font-semibold text-slate-800 hover:text-orange-600 transition-colors flex justify-between items-center focus:outline-none"
                      onClick={() => toggleFaq(globalIndex)}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className="text-orange-500 font-bold text-xl flex-shrink-0">
                        {activeIndex === globalIndex ? '−' : '+'}
                      </span>
                    </button>
                    {activeIndex === globalIndex && (
                      <div className="mt-4 text-slate-600 leading-relaxed bg-orange-50 p-4 rounded-lg">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12 bg-slate-900 text-white p-8 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Still Have Questions?</h2>
        <p className="text-center mb-6 opacity-80">
          Can't find what you're looking for? Our customer service team is here to help.
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
              <span className="font-bold text-xl">✉️</span>
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="opacity-80">support@ronniesfabrics.com</p>
            <p className="text-sm opacity-60">24/7 response</p>
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

export default FAQ;
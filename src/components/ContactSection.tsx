import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Smartphone, Clock, Copy, Check, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneNumber = '03430333817';
  const emailAddress = 'hafsaqadirbux0@gmail.com';
  const addressLine = 'Main Road HyderAbaad Matli, Matli Bus Stop';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(
    'Hello Hafsa! I would like to order or inquire about your handmade clothes.'
  )}`;

  const whatsappLink = `https://wa.me/923430333817?text=${encodeURIComponent(
    'Hello Hafsa! I would like to inquire about your handmade crochet pieces and place an order.'
  )}`;

  const emailLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    'Handmade Clothing Inquiry / Order - Hafsa Clothing'
  )}&body=${encodeURIComponent(
    'Hello Hafsa,\n\nI am interested in your handmade collection. Here are the details of the items/measurements I would like to order:\n\nName:\nContact Number:\nCity / Delivery Address:\nItems & Colors:\n\nThank you!'
  )}`;

  return (
    <section id="contact" className="py-20 md:py-28 border-b border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-amber-800 font-semibold">
            Direct Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-light text-stone-900 mt-1">
            Reach Hafsa by Email or Phone
          </h2>
          <p className="text-sm text-stone-600 font-light mt-3 leading-relaxed">
            Every garment is crafted by hand. To order or ask questions, send a direct phone message (SMS / WhatsApp), make a phone call, or email Hafsa directly.
          </p>
        </div>

        {/* 3-Pillar Direct Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Phone & Mobile Messages */}
          <div className="bg-white border border-stone-200/90 p-8 shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-900 border border-amber-200 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-amber-800 font-semibold block">
                  Direct Line & Messages
                </span>
                <h3 className="text-xl font-serif font-medium text-stone-900 mt-0.5">
                  Phone & SMS Message
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Call or send a text message directly to Hafsa for instant assistance.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${phoneNumber}`}
                  className="text-2xl font-serif font-medium text-stone-900 hover:text-amber-900 transition-colors block tracking-tight"
                >
                  {phoneNumber}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-stone-100 space-y-2.5">
              <a
                href={`tel:${phoneNumber}`}
                className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {phoneNumber}</span>
              </a>

              <a
                href={smsLink}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Smartphone className="w-3.5 h-3.5 text-stone-700" />
                <span>Send Phone SMS</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-800 hover:bg-emerald-700 text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send WhatsApp Message</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="w-full py-2 text-stone-500 hover:text-stone-900 text-[11px] tracking-wide flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Phone number copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy phone number</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Card 2: Email */}
          <div className="bg-white border border-stone-200/90 p-8 shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-900 border border-blue-200 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-blue-800 font-semibold block">
                  Official Email
                </span>
                <h3 className="text-xl font-serif font-medium text-stone-900 mt-0.5">
                  Send an Email
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Send detailed orders, custom sizing measurements, or photos by email.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={emailLink}
                  className="text-base sm:text-lg font-serif font-medium text-stone-900 hover:text-blue-900 transition-colors block break-all tracking-tight underline decoration-stone-300 hover:decoration-stone-900"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-stone-100 space-y-2.5">
              <a
                href={emailLink}
                className="w-full py-3 px-4 bg-stone-900 hover:bg-stone-800 text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Compose Email</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-stone-500 text-center font-light pt-1">
                Hafsa replies to all email inquiries promptly.
              </p>
            </div>
          </div>

          {/* Card 3: Physical Studio Location */}
          <div className="bg-white border border-stone-200/90 p-8 shadow-xs hover:border-stone-400 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 flex items-center justify-center">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-emerald-800 font-semibold block">
                  Studio Location
                </span>
                <h3 className="text-xl font-serif font-medium text-stone-900 mt-0.5">
                  Visit in Matli
                </h3>
                <p className="text-xs text-stone-500 font-light mt-1">
                  Visit our studio for in-person order pickups and fabric previews.
                </p>
              </div>

              <div className="pt-2 space-y-1">
                <p className="text-lg font-serif font-medium text-stone-900">
                  Main Road HyderAbaad Matli
                </p>
                <p className="text-xs text-stone-600 font-medium">
                  Matli Bus Stop
                </p>
              </div>
            </div>

            {/* Details */}
            <div className="pt-6 mt-6 border-t border-stone-100 space-y-3">
              <div className="flex items-center gap-2 text-xs text-stone-600">
                <Clock className="w-4 h-4 text-stone-400 shrink-0" />
                <span>Mon – Sat: 10:00 AM – 8:00 PM</span>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-stone-200 text-xs text-stone-600 space-y-1">
                <p className="font-medium text-stone-900">Custom Orders Welcome:</p>
                <p className="font-light">
                  Please call or text before visiting to ensure Hafsa is ready with your requested pieces or samples.
                </p>
              </div>

              <a
                href={`tel:${phoneNumber}`}
                className="w-full py-2.5 px-4 bg-white hover:bg-stone-100 text-stone-900 border border-stone-300 text-xs uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Before Visiting</span>
              </a>
            </div>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 bg-white border border-stone-200 text-center max-w-3xl mx-auto shadow-xs">
          <p className="text-sm font-serif italic text-stone-800">
            "We do not use complicated web forms. Just call, text, or email me directly at <a href={`tel:${phoneNumber}`} className="font-semibold underline text-stone-900">{phoneNumber}</a> or <a href={`mailto:${emailAddress}`} className="font-semibold underline text-stone-900">{emailAddress}</a> — I am always happy to help you with your custom order."
          </p>
          <p className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold mt-2">
            — Hafsa Nizamani
          </p>
        </div>

      </div>
    </section>
  );
};

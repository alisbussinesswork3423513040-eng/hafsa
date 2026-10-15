import React, { useState } from 'react';
import { X, Check, Scissors } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [activeTab, setActiveTab] = useState<'cardigans' | 'baby' | 'custom'>('cardigans');

  if (!isOpen) return null;

  const cardiganSizesIn = [
    { size: 'Cropped Small', bust: '36 - 38"', length: '19 - 20"', sleeve: '22"', fit: 'Fitted cropped silhouette' },
    { size: 'Small / Medium', bust: '40 - 44"', length: '24 - 26"', sleeve: '23"', fit: 'Comfortable relaxed standard fit' },
    { size: 'Free Size (Oversized)', bust: '46 - 52"', length: '27 - 29"', sleeve: '24"', fit: 'Slouchy balloon sleeve oversized aesthetic' },
    { size: 'Large / XL', bust: '50 - 56"', length: '29 - 31"', sleeve: '25"', fit: 'Generous cozy winter drape' },
  ];

  const cardiganSizesCm = [
    { size: 'Cropped Small', bust: '91 - 96 cm', length: '48 - 51 cm', sleeve: '56 cm', fit: 'Fitted cropped silhouette' },
    { size: 'Small / Medium', bust: '101 - 112 cm', length: '61 - 66 cm', sleeve: '58 cm', fit: 'Comfortable relaxed standard fit' },
    { size: 'Free Size (Oversized)', bust: '117 - 132 cm', length: '68 - 74 cm', sleeve: '61 cm', fit: 'Slouchy balloon sleeve oversized aesthetic' },
    { size: 'Large / XL', bust: '127 - 142 cm', length: '74 - 79 cm', sleeve: '63 cm', fit: 'Generous cozy winter drape' },
  ];

  const babySizes = [
    { age: 'Newborn (0 - 3M)', chest: unit === 'in' ? '16 - 17"' : '40 - 43 cm', frockLength: unit === 'in' ? '12 - 13"' : '30 - 33 cm', booties: unit === 'in' ? '3.5"' : '9 cm' },
    { age: '3 - 6 Months', chest: unit === 'in' ? '18 - 19"' : '45 - 48 cm', frockLength: unit === 'in' ? '14 - 15"' : '35 - 38 cm', booties: unit === 'in' ? '4.0"' : '10 cm' },
    { age: '6 - 12 Months', chest: unit === 'in' ? '20 - 21"' : '50 - 53 cm', frockLength: unit === 'in' ? '16 - 17"' : '40 - 43 cm', booties: unit === 'in' ? '4.5"' : '11.5 cm' },
    { age: '12 - 18 Months', chest: unit === 'in' ? '21 - 22"' : '53 - 56 cm', frockLength: unit === 'in' ? '18 - 19"' : '45 - 48 cm', booties: unit === 'in' ? '5.0"' : '12.5 cm' },
    { age: '2 Years (Toddler)', chest: unit === 'in' ? '22 - 23"' : '56 - 58 cm', frockLength: unit === 'in' ? '20 - 21"' : '50 - 53 cm', booties: unit === 'in' ? '5.5"' : '14 cm' },
  ];

  const activeCardiganSizes = unit === 'in' ? cardiganSizesIn : cardiganSizesCm;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div 
        className="relative w-full max-w-3xl bg-[#FAF8F5] border border-stone-200 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white text-stone-600 hover:text-stone-950 flex items-center justify-center border border-stone-200 cursor-pointer shadow-xs transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-stone-200 pb-4 mb-6 gap-4">
          <div>
            <span className="text-[11px] uppercase tracking-widest text-amber-800 font-semibold">
              Handmade Sizing & Fit
            </span>
            <h3 className="text-2xl font-serif text-stone-900 font-light">
              Measurements & Custom Fit Guide
            </h3>
          </div>

          {/* Unit Toggle Button */}
          <div className="flex items-center gap-1 bg-stone-200/60 p-1 rounded-sm self-start sm:self-auto">
            <button
              type="button"
              onClick={() => setUnit('in')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold cursor-pointer transition-colors ${
                unit === 'in' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Inches (in)
            </button>
            <button
              type="button"
              onClick={() => setUnit('cm')}
              className={`px-3 py-1 text-xs uppercase tracking-wider font-semibold cursor-pointer transition-colors ${
                unit === 'cm' ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Centimeters (cm)
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex border-b border-stone-200 mb-6 gap-2">
          <button
            type="button"
            onClick={() => setActiveTab('cardigans')}
            className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'cardigans' ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Crochet Cardigans
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('baby')}
            className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'baby' ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Baby Frocks & Sets
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('custom')}
            className={`pb-2.5 px-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'custom' ? 'border-stone-900 text-stone-900' : 'border-transparent text-stone-500 hover:text-stone-900'
            }`}
          >
            Custom Sizing Option
          </button>
        </div>

        {/* Tables */}
        {activeTab === 'cardigans' && (
          <div className="overflow-x-auto border border-stone-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-stone-100/70 border-b border-stone-200 text-stone-600 uppercase tracking-wider text-[11px]">
                  <th className="p-3">Size Option</th>
                  <th className="p-3">Chest / Bust</th>
                  <th className="p-3">Body Length</th>
                  <th className="p-3">Sleeve Length</th>
                  <th className="p-3">Fit Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {activeCardiganSizes.map((row) => (
                  <tr key={row.size} className="hover:bg-amber-50/30">
                    <td className="p-3 font-medium text-stone-900">{row.size}</td>
                    <td className="p-3 text-stone-600">{row.bust}</td>
                    <td className="p-3 text-stone-600">{row.length}</td>
                    <td className="p-3 text-stone-600">{row.sleeve}</td>
                    <td className="p-3 text-stone-500 italic">{row.fit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'baby' && (
          <div className="overflow-x-auto border border-stone-200 bg-white">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-stone-100/70 border-b border-stone-200 text-stone-600 uppercase tracking-wider text-[11px]">
                  <th className="p-3">Age Bracket</th>
                  <th className="p-3">Baby Chest</th>
                  <th className="p-3">Frock / Top Length</th>
                  <th className="p-3">Booties Sole</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                {babySizes.map((row) => (
                  <tr key={row.age} className="hover:bg-amber-50/30">
                    <td className="p-3 font-medium text-stone-900">{row.age}</td>
                    <td className="p-3 text-stone-600">{row.chest}</td>
                    <td className="p-3 text-stone-600">{row.frockLength}</td>
                    <td className="p-3 text-stone-600">{row.booties}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'custom' && (
          <div className="p-5 bg-white border border-stone-200 space-y-3">
            <div className="flex items-center gap-2 text-stone-900 font-serif text-base font-medium">
              <Scissors className="w-4 h-4 text-amber-800" />
              <span>Need exact custom measurements?</span>
            </div>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Because Hafsa stitches every piece by hand from home, she is delighted to tailor any cardigan length, sleeve width, or baby outfit to your baby’s exact height and months. 
            </p>
            <p className="text-xs text-stone-600 font-light leading-relaxed">
              Simply specify your measurements in the special instructions box when booking online or send them over WhatsApp (<span className="font-semibold text-stone-900">03430333817</span>).
            </p>
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>Handmade in Matli · Soft, stretchy, comfortable knit yarns</p>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-stone-900 text-white uppercase tracking-wider text-[11px] font-semibold cursor-pointer hover:bg-stone-800 transition-colors"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
};

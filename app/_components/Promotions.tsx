'use client';

import Link from 'next/link';

export default function PromotionLink() {
  return (
    <div className="w-full p-6 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl shadow-md text-white flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <h3 className="text-xl font-bold">Ofertas Especiais!</h3>
        <p className="text-sm opacity-90">Confira nossas promoções ativas e economize.</p>
      </div>
      <Link
        href="/promotions"
        className="px-5 py-2.5 bg-white text-orange-600 font-semibold rounded-lg shadow hover:bg-zinc-100 transition-colors"
      >
        Ver Promoções
      </Link>
    </div>
  );
}
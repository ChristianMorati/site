"use client";

export default function Promotions() {
    const promoItems = [
        { id: 1, title: 'Desconto de Inverno', description: 'Até 40% OFF em itens selecionados.' },
        { id: 2, title: 'Frete Grátis', description: 'Em compras acima de R$ 150 para todo o Brasil.' },
    ];

    return (
        <div className="w-full space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                Promoções em Destaque
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
                {promoItems.map((item) => (
                    <div
                        key={item.id}
                        className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 shadow-sm"
                    >
                        <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{item.title}</h3>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-[#070709] text-white font-mono">
      <div className="text-center space-y-4 max-w-lg border border-zinc-800 p-8 rounded-2xl bg-zinc-950/60">
        <div className="w-3 h-3 rounded-full bg-orange-500 mx-auto animate-ping" />
        <h1 className="text-2xl font-bold tracking-tight text-white uppercase">
          LIENZO EN BLANCO // DISEÑO ANTERIOR ELIMINADO
        </h1>
        <p className="text-xs text-zinc-400 leading-relaxed">
          Se ha borrado toda la estructura anterior (Hero, Bento, Navbars, Footers, 3D anterior y tarjetas estándar).
          Listo para definir y construir el nuevo concepto desde cero.
        </p>
      </div>
    </main>
  );
}

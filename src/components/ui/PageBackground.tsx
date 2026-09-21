export default function PageBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background">
      {/* Drifting brand-color light (radial gradients, no CSS blur filter — cheap to animate) */}
      <div className="bg-aurora absolute -top-[20%] -left-[10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(255,77,1,0.16)_0%,transparent_65%)]" />
      <div className="bg-aurora bg-aurora--slow absolute top-[30%] -right-[15%] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(2,104,63,0.13)_0%,transparent_65%)]" />
      <div className="bg-aurora bg-aurora--reverse absolute -bottom-[25%] left-[20%] h-[75vh] w-[75vh] rounded-full bg-[radial-gradient(circle,rgba(0,0,128,0.10)_0%,transparent_65%)]" />

      {/* Fine dot grid, faded toward the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,0,128,0.14)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_40%,black_30%,transparent_85%)]" />
    </div>
  );
}

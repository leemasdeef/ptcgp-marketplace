export default function Price({ price }: { price: string }) {
  return (
    <div className="border-4 rounded-2xl bg-amber-300 min-w-20 min-h-10 text-center">
      ${price}
    </div>
  );
}

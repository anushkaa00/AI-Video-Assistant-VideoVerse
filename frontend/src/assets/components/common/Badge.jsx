export default function Badge({ children }) {
  return (
    <span
      className="
      inline-flex
      items-center
      rounded-full
      border
      border-violet-500/30
      bg-violet-500/10
      px-4
      py-2
      text-sm
      font-medium
      text-violet-300
      "
    >
      {children}
    </span>
  );
}
export default function SectionHeading({
  title,
  subtitle,
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">

      <h2 className="text-4xl font-bold md:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-lg text-gray-400">
        {subtitle}
      </p>

    </div>
  );
}
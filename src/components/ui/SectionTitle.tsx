type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="mx-auto max-w-3xl text-center">
      <p className="text-xs font-medium uppercase tracking-[0.26em] text-[#0D6EFD]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold tracking-[0.04em] text-[#f3f6fb] md:text-4xl">{title}</h2>
      {description ? <p className="mt-5 text-base font-light text-[#b8c4d8] md:text-lg">{description}</p> : null}
    </header>
  );
}

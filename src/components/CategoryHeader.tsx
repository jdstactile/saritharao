interface CategoryHeaderProps {
  title: string;
}

export default function CategoryHeader({ title }: CategoryHeaderProps) {
  return (
    <section
      className="relative flex min-h-[340px] items-center justify-center overflow-hidden bg-cover bg-fixed bg-center"
      style={{
        backgroundImage:
          'url("https://saritharao.com/wp-content/uploads/2020/12/florist-12.jpg")',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#04A5C2] to-[#04A5C2]/0" />

      <h1 className="relative z-10 text-center font-heading text-[60px] font-bold leading-tight text-white">
        {title}
      </h1>
    </section>
  );
}

import Image from 'next/image'
export const Header = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <section className=" self-center bg-white w-full md:w-1/2 text-center text-primary-darker flex flex-col gap-6 py-20">
    <h1 className="text-header font-ink-blossoms">{title}</h1>
    <p className="text-subheader">{subtitle}</p>
    <Image
      src="/illustrations/ball-flower.svg"
      alt="Header Image"
      width={400}
      height={200}
      className="self-center"
    />
  </section>
)

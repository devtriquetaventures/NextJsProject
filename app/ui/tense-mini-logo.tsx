import Image  from 'next/image'

export default function TenseMiniLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none`}
    >
      <Image
        src="/tense-logo.png"
        width={50}
        height={200}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}

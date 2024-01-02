import Image  from 'next/image'

export default function TenseLogo() {
  return (
    <div
      className={`flex flex-row items-center leading-none`}
    >
      <Image
        src="/tense.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />

      <Image
        src="/tense-logo.png"
        width={50}
        height={56}
        className="block md:hidden"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
  );
}

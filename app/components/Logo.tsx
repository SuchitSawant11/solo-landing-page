import Image from "next/image";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  taglineColor?: string;
}

export default function Logo({
  className = "",
  showTagline = false,
  taglineColor = "text-solo-orange",
}: LogoProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <Image
        src="/solo-logo.png"
        alt="SOLO"
        width={120}
        height={40}
        className="h-auto w-auto"
        priority
      />

      {showTagline && (
        <span className={`mt-1 text-[11px] font-medium ${taglineColor}`}>
          The Career Connect Platform
        </span>
      )}
    </div>
  );
}
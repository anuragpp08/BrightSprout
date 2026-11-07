type LogoProps = {
  className?: string;
  priority?: boolean;
};

/**
 * Vector wordmark. A plain img keeps the SVG sharp at any zoom.
 * next/image would run it through the image optimizer.
 */
export function Logo({ className = "h-12 w-auto", priority = false }: LogoProps) {
  return (
    <img
      src="/brand/bright-sprout-logo.svg"
      alt=""
      width={640}
      height={175}
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}

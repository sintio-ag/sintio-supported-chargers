type CookieProps = {
  height?: string;
};

export function CookieIllustration(props: CookieProps) {
  const defaultHeight = "40px";
  const { height = defaultHeight } = props;

  return (
    <svg
      version="1.1"
      viewBox="0 0 512 512"
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M497.1 286.7c-3.4-4.6-8.5-7.6-14.1-8.3-73.7-9.1-129.2-71.4-129.2-145.1 0-24.7 6.4-49.2 18.5-70.8 2.8-4.9 3.3-10.8 1.6-16.2-1.7-5.4-5.7-9.8-10.8-12.2C330 18.8 294.7 11 258.1 11c-136.2 0-247 109.9-247 245s110.8 245 247.1 245c118.2 0 220.2-83.5 242.6-198.5 1-5.5-.3-11.2-3.7-15.8zm-239 173.5c-113.5 0-205.9-91.6-205.9-204.2S144.6 51.8 258.1 51.8c23.5 0 46.4 3.9 68.2 11.5-9 22.2-13.7 46-13.7 70 0 86.5 59.9 160.8 142.7 181.4-25.7 85.4-105.6 145.5-197.2 145.5z"></path>
      <ellipse cx="194.5" cy="150.8" rx="20.4" ry="20.3"></ellipse>
      <ellipse cx="264.4" cy="230.7" rx="20.4" ry="20.3"></ellipse>
      <ellipse cx="293.8" cy="340.2" rx="20.4" ry="20.3"></ellipse>
      <ellipse cx="146.7" cy="304.3" rx="20.4" ry="20.3"></ellipse>
    </svg>
  );
}

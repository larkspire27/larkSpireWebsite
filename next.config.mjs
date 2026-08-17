/** @type {import('next').NextConfig} */
const nextConfig = {
  /*
   * Performance Note for Canvas Frame Sequences:
   * HTML5 Canvas sequence animations load images directly into 2D context using `new Image()`.
   * Canvas frame drawing bypasses Next.js <Image /> component to eliminate server-side image
   * processing overhead and achieve ultra-smooth 60 FPS scroll scrubbing.
   *
   * If you also use standard <Image /> tags elsewhere in your site, configure domains/formats below.
   */
  output: 'export',
  basePath: '/larkSpireWebsite',
  images: {
    unoptimized: true, // Prevents image optimization overhead for rapid frame sequences if served as static files
  },
  reactStrictMode: true,
};

export default nextConfig;

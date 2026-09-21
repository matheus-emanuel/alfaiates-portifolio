/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Os ícones entram por named import; isso garante que só o que é usado vá pro bundle.
  experimental: { optimizePackageImports: ["lucide-react", "@phosphor-icons/react"] }
};

export default nextConfig;

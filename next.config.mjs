import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

// Configuration pour le déploiement GitHub Pages
const isProd = process.env.NODE_ENV === 'production';
const repoName = '/magic-portfolio';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  distDir: 'out',
  // Définir basePath pour le déploiement en sous-répertoire GitHub Pages
  basePath: isProd ? repoName : '',
  // Définir assetPrefix pour que les assets statiques utilisent aussi le bon chemin
  assetPrefix: isProd ? repoName : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoName : '',
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
};

export default withMDX(nextConfig);

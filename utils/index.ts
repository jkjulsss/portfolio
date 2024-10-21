type MetadataProps = {
  title?: string;
  description?: string;
  canonical: string;
  ogImage?: string;
};

const defaultMetadata = {
  title: "Beaudelaire - The One",
  description: "Portfolio of Beaudelaire Tsoungui Nzodoumkouo",
};

export const constructMetadata = ({
  title,
  description = defaultMetadata.description,
  canonical = "/",
  ogImage = "beaudelaire.jpeg",
}: MetadataProps) => {
  return {
    metadataBase: new URL("https://beaudelaire.ca/"),
    title: title ? `${title} - Beaudelaire` : defaultMetadata.title,
    description,
    keywords: [
      "portfolio",
      "beaudelaire",
      "tsoungui",
      "nzodoumkouo",
      "beaudelaire tsoungui nzodoumkouo",
    ],
    alternates: {
      canonical,
    },
    authors: [
      {
        name: "Beaudelaire Tsoungui Nzodoumkouo",
        url: "https://github.com/TsounguiNzo",
      },
    ],
    openGraph: {
      title,
      description,
      type: "website",
      url: canonical,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "OG Image",
        },
      ],
    },

    // --- will add this once i get the logo ---
    // icons: {
    //   icon: "/icon.png",
    //   shortcut: "/icon.png",
    //   apple: "/icon.png",
    // },

    // --- need a twitter handle for this ---
    // twitter: {
    //   title,
    //   description,
    //   creator: "@beaudelaire",
    //   site: "beaudelaire.ca",
    //   card: "summary_large_image",
    // },
  };
};

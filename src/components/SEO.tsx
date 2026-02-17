import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
}

export const SEO = ({ title, description, image }: SEOProps) => {
  const siteTitle = title 
    ? `${title} | Movimiento Vecinal Escobar` 
    : "Movimiento Vecinal Escobar";
  
  return (
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
    </Helmet>
  );
};
import { useRouter } from 'next/router';

export default function CanonicalURL() {
  const siteUrl = 'https://www.eazetours.com/';
  const { asPath } = useRouter();
  const cleanPath = asPath.split('#')[0].split('?')[0];
  const canonicalUrl = `${siteUrl}` + (router.asPath === '/' ? '' : cleanPath);

  return (
    <link rel="canonical" href={canonicalUrl} />
  );
};

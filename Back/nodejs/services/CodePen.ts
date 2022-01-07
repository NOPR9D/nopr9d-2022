export const getCodepenPreview = (slug: string, name: string) => {
  return {
    slug: slug,
    name: name,
    large: `https://codepen.io/NOPROD/pen/${slug}/image/large.png`,
    small: `https://codepen.io/NOPROD/pen/${slug}/image/small.png`,
  };
};

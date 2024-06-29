interface PictureComponentProps {
  id?: string;
  src: string;
  mediumSrc?: string;
  smallSrc?: string;
  alt?: string;
  className?: string;
  width?: string;
  height?: string;
  ariaHidden?: boolean;
  loadingPriority?: string;
}

const PictureComponent = ({
  src,
  id,
  mediumSrc = "",
  smallSrc = "",
  alt,
  className,
  width,
  height,
  ariaHidden,
  loadingPriority,
}: PictureComponentProps) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");
  const webpMediumSrc = mediumSrc ? mediumSrc.replace(/\.\w+$/, ".webp") : "";
  const webpSmallSrc = smallSrc ? smallSrc.replace(/\.\w+$/, ".webp") : "";

  return /*html*/ `
      <picture>
        <source type="image/webp" srcSet="${webpSrc}" media="(min-width: 1920px)" />
        <source
          type="image/webp"
          srcSet="${mediumSrc ? webpMediumSrc : webpSrc}"
          media="(min-width: 500px) and (max-width: 1920px)"
        />
        <source type="image/webp" srcSet="${smallSrc ? webpSmallSrc : webpSrc}" media="(max-width: 500px)" />
        <img
          id="${id}"
          src="${src}"
          alt="${alt}"
          class="${className}"
          width="${width}"
          height="${height}"
          ${ariaHidden ? 'aria-hidden="true"' : ""}
          loading="lazy"
          ${loadingPriority ? `loading="${loadingPriority === "eager" ? "eager" : "lazy"}"` : ""}
        />
      </picture>
    `;
};

export default PictureComponent;

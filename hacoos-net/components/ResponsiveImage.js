export default function ResponsiveImage({
  src,
  small,
  width = 750,
  height = 750,
  sizes = "(max-width: 720px) 46vw, 360px",
  alt,
  ...props
}) {
  const sourceSet = small ? `${small} 480w, ${src} ${width}w` : undefined;
  return <img src={src} srcSet={sourceSet} sizes={sourceSet ? sizes : undefined} width={width} height={height} alt={alt} {...props}/>;
}

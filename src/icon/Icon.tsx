import './Icon.scss';

export enum IconSize {
  Xs = 'xs',
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
  Xl = 'xl',
}

export function Icon({
  className,
  size = IconSize.Md,
}: {
  className: string;
  size?: IconSize;
}) {
  return <i className={'Icon ' + className + ' size-' + size}></i>;
}

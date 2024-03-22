import { MouseEvent } from 'react';

import { Icon, IconSize } from './icon/Icon';

export function IconButton({
  size,
  className,
  onClick,
}: {
  size: IconSize;
  className: string;
  onClick: (e: MouseEvent) => void;
}) {
  return (
    <span className="cursor-pointer" onClick={(e) => onClick(e)}>
      <Icon className={className} size={size} />
    </span>
  );
}

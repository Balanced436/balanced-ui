import type { CSSProperties } from 'react';
import styles from './Skeleton.module.css';

interface SkeletonProps {
  style?: CSSProperties;
  variant?: 'text' | 'rect' | 'circle';
}

export const Skeleton = ({ style, variant = 'rect' }: SkeletonProps) => {
  const componentClass = `${styles.shape} ${styles[variant]}`;

  return <div aria-hidden="true" className={componentClass} style={style} />;
};

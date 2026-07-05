import { Separator as BaseSeparator } from '@base-ui/react/separator';
import styles from './separator.module.css';

interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  variant?: 'middle' | 'fullSize';
}

/*TODO add prop render as hr and update css*/
export const Separator = ({ orientation = 'horizontal', variant = 'fullSize' }: SeparatorProps) => {
  return <BaseSeparator data-variant={variant} data-orientation={orientation} orientation={orientation} className={styles.separator}></BaseSeparator>;
};

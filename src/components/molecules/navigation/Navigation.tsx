import { NavigationMenu } from '@base-ui/react/navigation-menu';
import styles from './Navigation.module.css';

export interface NavigationItem {
  label: string;
  href: string;
}

interface NavigationProps {
  items: NavigationItem[];
}

export function Navigation({ items = [] }: NavigationProps) {
  return (
    <NavigationMenu.Root className={styles.Root}>
      <NavigationMenu.List className={styles.List}>
        {items.map((item, index) => (
          <NavigationMenu.Item key={index}>
            <Link className={styles.Trigger} href={item.href}>
              {item.label}
            </Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}

function Link(props: NavigationMenu.Link.Props) {
  return <NavigationMenu.Link render={<a />} {...props} />;
}

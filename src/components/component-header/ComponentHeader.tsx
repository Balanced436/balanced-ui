import { Button, Typography } from '../../main.ts';
import styles from './ComponentHeader.module.css';
import { SiStorybook } from 'react-icons/si';
import { FaGitlab } from 'react-icons/fa6';

interface ComponentHeaderProps {
  children: string;
  gitlabUrl?: string;
  storybookUrl?: string;
}
export const ComponentHeader = ({ children, gitlabUrl, storybookUrl }: ComponentHeaderProps) => {
  return (
    <span className={styles.container}>
      <Typography variant={'title-large'}>{children}</Typography>
      <div>
        {gitlabUrl && (
          <Button rightIcon={<FaGitlab />} variant={'invisible'} href={gitlabUrl}>
            GitLab
          </Button>
        )}
        {storybookUrl && (
          <Button rightIcon={<SiStorybook />} variant={'invisible'} href={storybookUrl}>
            Storybook
          </Button>
        )}
      </div>
    </span>
  );
};

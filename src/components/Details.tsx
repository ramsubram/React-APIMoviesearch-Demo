import { Skeleton } from '@material-ui/lab';

interface IProp {
  title: string;
  content?: string | number;
}

const info = ({ title, content }: IProp) => {
  return (
    <div>
      <p>
        <b>{title}:</b>
        <div>
          {content ? (
            content
          ) : (
            <Skeleton variant="text" width={210} height={40} />
          )}
        </div>
      </p>
    </div>
  );
};

export default info;

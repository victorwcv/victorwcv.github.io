import clsx from 'clsx';

type Props = React.JSX.IntrinsicElements['section'];

const SectionLayout: React.FC<Props> = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={clsx(className)}>
      <div className="container mx-auto h-dvh min-h-fit px-2 sm:py-28 py-12">{children}</div>
    </section>
  );
};

export default SectionLayout;

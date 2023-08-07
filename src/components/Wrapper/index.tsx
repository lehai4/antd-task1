type WrapperProps = {
  title: string;
  children: React.ReactNode;
};
const Wrapper = ({ title, children }: WrapperProps) => {
  return <div title={title}>{children}</div>;
};

export default Wrapper;

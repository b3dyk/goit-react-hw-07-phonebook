import { MutatingDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <MutatingDots
      height="100"
      width="100"
      color="#0d6efd"
      secondaryColor="#0d6efd"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      wrapperClass=""
      visible={true}
    />
  );
};

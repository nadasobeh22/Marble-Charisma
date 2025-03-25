import { PropagateLoader } from 'react-spinners';

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-offwhite dark:bg-darkslate z-50 flex items-center justify-center transition-colors duration-300">
      <PropagateLoader color="#0D9488" size={20} speedMultiplier={1.5} />
    </div>
  );
};

export default Preloader;
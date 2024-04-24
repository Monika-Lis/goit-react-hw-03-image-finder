import { TailSpin } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loader}>
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="rgb(177, 154, 240)"
        ariaLabel="tail-spin-loading"
        radius="9"
      />
    </div>
  );
};

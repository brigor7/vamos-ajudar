import React from 'react';
import { ReactComponent as Camera } from '../../assets/lnr-camera.svg';
import styles from './InputThumbnail.module.css';

const InputThumbnail = ({ thumbnail, setThumbnail }) => {
  const preview = React.useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <div className={styles.thumbContainer}>
      <div id={styles.thumbnail}>
        <label>
          <div
            id={styles.preview}
            style={{ backgroundImage: `url('${preview}')` }}
          />
          <input
            type="file"
            onChange={(e) => {
              setThumbnail(e.target.files[0]);
            }}
          />
          <span className={styles.svg}>{!thumbnail && <Camera />}</span>
        </label>
      </div>
    </div>
  );
};

export default InputThumbnail;

import React from 'react';
import { ReactComponent as Camera } from '../../assets/lnr-camera.svg';
import './InputThumbnail.module.css';

const InputThumbnail = ({ thumbnail, setThumbnail }) => {
  const preview = React.useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  return (
    <div className="thumb-container">
      <label
        id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}
      >
        <input
          type="file"
          onChange={(e) => {
            setThumbnail(e.target.files[0]);
          }}
        />
        <span className="svg">
          <Camera />
        </span>
      </label>
    </div>
  );
};

export default InputThumbnail;

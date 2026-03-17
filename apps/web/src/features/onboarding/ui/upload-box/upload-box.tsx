import { UploadIcon, XIcon } from '@kds/icons';
import { Button, ProgressBar } from '@kds/ui';

import * as styles from './upload-box.css';

interface UploadBoxProps {
  file?: File;
  progress?: {
    done: number;
    total: number;
  };
  onChooseFile: () => void;
  onRemoveFile: () => void;
}

const formatFileSize = (fileSize: number) => {
  const kilobytes = fileSize / 1024;

  if (kilobytes < 1024) {
    return `${Math.round(kilobytes)}KB`;
  }

  return `${(kilobytes / 1024).toFixed(1)}MB`;
};

const UploadBox = ({
  file,
  progress,
  onChooseFile,
  onRemoveFile,
}: UploadBoxProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.uploadContainer}>
        <div className={styles.uploadTopSection}>
          <UploadIcon width="2.4rem" height="2.4rem" />
          <p className={styles.text}>Upload Photo</p>
        </div>
        <Button preset="medium_secondary" onClick={onChooseFile}>
          Choose File
        </Button>
      </div>

      {file && (
        <div className={styles.fileContainer}>
          <div className={styles.fileTopSection}>
            <div className={styles.fileSection}>
              <p className={styles.fileName}>{file.name}</p>
              <p className={styles.fileSize}>{formatFileSize(file.size)}</p>
            </div>
            <button className={styles.xButton} onClick={onRemoveFile}>
              <XIcon width="1.6rem" height="1.6rem" />
            </button>
          </div>
          {progress && (
            <ProgressBar total={progress.total} done={progress.done} />
          )}
        </div>
      )}
    </div>
  );
};

export default UploadBox;

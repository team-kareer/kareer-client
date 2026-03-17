import { ChangeEvent, useRef } from 'react';
import { UploadIcon, XIcon } from '@kds/icons';
import { Button, ProgressBar } from '@kds/ui';

import * as styles from './upload-box.css';

interface UploadBoxProps {
  file?: File;
  progress?: {
    done: number;
    total: number;
  };
  onSelectFile: (file: File) => void;
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
  onSelectFile,
  onRemoveFile,
}: UploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) {
      return;
    }

    onSelectFile(selectedFile);
    event.target.value = '';
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.hiddenInput}
        type="file"
        accept="application/pdf"
        onChange={handleChangeFile}
      />
      <section className={styles.uploadContainer}>
        <div className={styles.uploadTopSection}>
          <UploadIcon width="2.4rem" height="2.4rem" />
          <p className={styles.text}>Upload Photo</p>
        </div>
        <Button preset="medium_secondary" onClick={handleChooseFile}>
          Choose File
        </Button>
      </section>

      {file && (
        <section className={styles.fileContainer}>
          <div className={styles.fileTopSection}>
            <div className={styles.fileSection}>
              <p className={styles.fileName}>{file.name}</p>
              <p className={styles.fileSize}>{formatFileSize(file.size)}</p>
            </div>
            <button
              type="button"
              className={styles.xButton}
              onClick={onRemoveFile}
            >
              <XIcon width="1.6rem" height="1.6rem" />
            </button>
          </div>
          {progress && (
            <ProgressBar total={progress.total} done={progress.done} />
          )}
        </section>
      )}
    </div>
  );
};

export default UploadBox;

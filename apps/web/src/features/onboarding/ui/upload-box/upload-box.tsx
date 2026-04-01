import { ChangeEvent, DragEvent, useRef } from 'react';
import { UploadIcon, XIcon } from '@kds/icons';
import { Button, ProgressBar } from '@kds/ui';

import { UploadProgress } from '@features/onboarding/model';

import * as styles from './upload-box.css';

interface UploadBoxProps {
  file?: File;
  progress?: UploadProgress;
  disabled?: boolean;
  onSelectFile: (file: File) => void;
  onRemoveFile: () => void;
}

const ACCEPTED_FILE_TYPES = [
  'image/jpeg',
  'image/png',
  'application/pdf',
] as const;

const FILE_INPUT_ACCEPT = '.jpg,.jpeg,.png,.pdf';

const formatFileSize = (fileSize: number) => {
  const kilobytes = fileSize / 1024;

  if (kilobytes < 1024) {
    return `${Math.round(kilobytes)}KB`;
  }

  return `${(kilobytes / 1024).toFixed(1)}MB`;
};

const isAcceptedFileType = (file: File) => {
  return ACCEPTED_FILE_TYPES.includes(
    file.type as (typeof ACCEPTED_FILE_TYPES)[number],
  );
};

const UploadBox = ({
  file,
  progress,
  disabled,
  onSelectFile,
  onRemoveFile,
}: UploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChooseFile = () => {
    inputRef.current?.click();
  };

  const handleSelectedFile = (file?: File) => {
    if (!file || !isAcceptedFileType(file)) {
      return;
    }

    onSelectFile(file);
  };

  const handleChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
    handleSelectedFile(event.target.files?.[0]);
    event.target.value = '';
  };

  const handleDragOver = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleDrop = (event: DragEvent<HTMLElement>) => {
    event.preventDefault();
    handleSelectedFile(event.dataTransfer.files?.[0]);
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.hiddenInput}
        type="file"
        accept={FILE_INPUT_ACCEPT}
        onChange={handleChangeFile}
      />
      <section
        className={styles.uploadContainer}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className={styles.uploadTopSection}>
          <UploadIcon width={24} height={24} />
          <p className={styles.text}>Upload Photo</p>
        </div>

        <Button
          style={{ width: '100%', justifyContent: 'center' }}
          preset="medium_secondary"
          onClick={handleChooseFile}
          disabled={disabled}
        >
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

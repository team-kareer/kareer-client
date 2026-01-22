import { ChangeEvent, useRef } from 'react';
import { PlusIcon, XIcon } from '@kds/icons';
import { Button, Checkbox } from '@kds/ui';

import { FileItem } from './use-upload-files';

import * as styles from './upload-box.css';

const INFO_MESSAGE = 'Up to 2 files · 20 MB max';
const CHECK_MESSAGE = 'Include completed to-dos';

interface UploadBoxProps {
  isChecked: boolean;
  setIsChecked: (value: boolean) => void;
  onClick: () => void;
  files: FileItem[];
  noticeMessage: string;
  onAddFiles: (selectedFiles: File[]) => void;
  onRemoveFile: (id: string) => void;
  isLoading?: boolean;
}

const UploadBox = ({
  isChecked,
  setIsChecked,
  onClick,
  files,
  noticeMessage,
  onAddFiles,
  onRemoveFile,
  isLoading = false,
}: UploadBoxProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const hasFiles = files.length > 0;

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  const handleChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    if (selectedFiles.length === 0) {
      return;
    }

    onAddFiles(selectedFiles);
    event.target.value = '';
  };

  const handleToggleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <section className={styles.container}>
      <div className={styles.actionSection}>
        <div className={styles.fileContainer}>
          <div className={styles.fileSection}>
            <Button
              preset="medium_secondary"
              onClick={handleClickUpload}
              disabled={isLoading}
            >
              <PlusIcon width={16} height={16} />
              <span>Upload</span>
            </Button>
            <input
              ref={inputRef}
              className={styles.fileInput}
              type="file"
              accept="application/pdf"
              multiple
              onChange={handleChangeFiles}
            />
            {hasFiles && (
              <div className={styles.fileWrapper}>
                {files.map((file) => (
                  <Button
                    key={file.id}
                    preset="medium_outlined"
                    onClick={() => onRemoveFile(file.id)}
                    disabled={isLoading}
                  >
                    <span className={styles.fileName}>{file.name}</span>
                    <XIcon width={16} height={16} />
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className={styles.checkSection}>
            <Checkbox
              isChecked={isChecked}
              onClick={handleToggleCheckBox}
              disabled={isLoading}
            />
            <p className={styles.checkText}>{CHECK_MESSAGE}</p>
          </div>
        </div>
        {hasFiles && (
          <Button
            preset="medium_primary"
            onClick={onClick}
            disabled={isLoading}
          >
            <span>Find Position</span>
          </Button>
        )}
      </div>
      <div className={styles.infoSection}>
        <p className={styles.info}>{INFO_MESSAGE}</p>
        {noticeMessage && <p className={styles.notice}>{noticeMessage}</p>}
      </div>
    </section>
  );
};

export default UploadBox;

import { ChangeEvent, useRef, useState } from 'react';
import { PlusIcon, XIcon } from '@kds/icons';
import { Button, Checkbox } from '@kds/ui';

import { useUploadFiles } from './use-upload-files';

import * as styles from './upload-box.css';

const INFO_MESSAGE = 'Up to 2 files · 20 MB max';
const CHECK_MESSAGE = 'Include completed to-dos';

const UploadBox = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChecked, setIsChecked] = useState(false);
  const { files, noticeMessage, addFiles, removeFile } = useUploadFiles();
  const hasFiles = files.length > 0;

  const handleClickUpload = () => {
    inputRef.current?.click();
  };

  const handleChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(event.target.files ?? []);
    if (selectedFiles.length === 0) {
      return;
    }

    addFiles(selectedFiles);
    event.target.value = '';
  };

  const handleToggleCheckBox = () => {
    setIsChecked((prev) => !prev);
    // TODO: API 연동
  };

  const handleClickFindPosition = () => {
    // @TODO: PDF 업로드
  };

  return (
    <section className={styles.container}>
      <div className={styles.actionSection}>
        <div className={styles.fileContainer}>
          <div className={styles.fileSection}>
            <Button preset="medium_secondary" onClick={handleClickUpload}>
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
                    onClick={() => removeFile(file.id)}
                  >
                    <span className={styles.fileName}>{file.name}</span>
                    <XIcon width={19} height={19} />
                  </Button>
                ))}
              </div>
            )}
          </div>
          <div className={styles.checkSection}>
            <Checkbox isChecked={isChecked} onClick={handleToggleCheckBox} />
            <p className={styles.checkText}>{CHECK_MESSAGE}</p>
          </div>
        </div>
        {hasFiles && (
          <Button preset="medium_primary" onClick={handleClickFindPosition}>
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

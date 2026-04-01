import { SectionHeader } from '@kds/ui';

import { UploadProgress } from '@features/onboarding';
import UploadBox from '@features/onboarding/ui/upload-box/upload-box';

import * as styles from './image-upload-section.css';

interface ImageUploadSectionProps {
  title: string;
  subtitle: string;
  file?: File;
  progress?: UploadProgress;
  errorMessage?: string;
  onSelectFile: (file: File) => void;
  onRemoveFile: () => void;
}

const ImageUploadSection = ({
  title,
  subtitle,
  file,
  progress,
  errorMessage,
  onSelectFile,
  onRemoveFile,
}: ImageUploadSectionProps) => {
  return (
    <section className={styles.container}>
      <SectionHeader title={title} subtitle={subtitle} />
      <UploadBox
        file={file}
        progress={progress}
        onSelectFile={onSelectFile}
        onRemoveFile={onRemoveFile}
      />
      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
    </section>
  );
};

export default ImageUploadSection;

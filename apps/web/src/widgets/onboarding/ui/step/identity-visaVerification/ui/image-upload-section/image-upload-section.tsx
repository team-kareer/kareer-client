import { SectionHeader } from '@kds/ui';

import UploadBox from '@features/onboarding/ui/upload-box/upload-box';

import * as styles from './image-upload-section.css';

interface ImageUploadSectionProps {
  title: string;
  subtitle: string;
  file?: File;
  errorMessage?: string;
  onSelectFile: (file: File) => void;
  onRemoveFile: () => void;
}

const ImageUploadSection = ({
  title,
  subtitle,
  file,
  errorMessage,
  onSelectFile,
  onRemoveFile,
}: ImageUploadSectionProps) => {
  return (
    <section className={styles.container}>
      <SectionHeader title={title} subtitle={subtitle} />
      <UploadBox
        file={file}
        onSelectFile={onSelectFile}
        onRemoveFile={onRemoveFile}
      />
      {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
    </section>
  );
};

export default ImageUploadSection;

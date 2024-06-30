import { FC, useState } from 'react';
import styles from './image.module.css';
import Image from 'next/image';


interface DocuImageProps {
  src: string;
}

const DocuImage: FC<DocuImageProps> = ({ src }) => {
  return (
    <Image src={src} alt="Hello" className={styles.Image} width={500} height={500} />
  );
};



export default function MyApp({ src }) {
  return <DocuImage src={src} />;
}

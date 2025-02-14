'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { Carousel } from 'react-responsive-carousel';
import { Stack, Card, CardContent } from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImagePopup from './components/imgpopup.js';

export default function Home() {
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedImage, setSelectedImage] = useState('');

  // const openImg = (imgSrc) => {
  //   console.log("asdfghj")
  //   if(!isOpen) {
  //   console.log("opening")
  //   setSelectedImage(imgSrc);
  //   setIsOpen(true);
  //   }
  // };
  // const closeImg = () => {
  //   setIsOpen(false);
  // };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Carousel
      autoFocus
      showThumbs={false}
      autoPlay={false}
      infiniteLoop={false}
      swipeable
      showArrows={true}
      useKeyboardArrows={true}
      >
        {Array.from({ length: 25 }, (_, index) => (
            <Card key={index}>
              <CardContent>
                <Stack direction="row" spacing={1}>
                <img
                    src={`/${`portfolio/Page${(index * 2) + 1}.jpg`}`}
                    alt={`Page${index+1}`}
                    style={{
                      height: 600,
                      objectFit: 'contain',
                    }}
                    // onClick={openImg("/pdf.png")}
                  />
                  <img
                    src={`/${`portfolio/Page${(index * 2) + 2}.jpg`}`}
                    alt={`Page${index+1}`}
                    style={{
                      height: 600,
                      objectFit: 'contain',
                    }}
                    // onClick={openImg("/pdf.png")}
                  />
                  </Stack>
              </CardContent>
            </Card>
        ))}
      </Carousel>
      {/* <ImagePopup isOpen={isOpen} onRequestClose={closeImg} imageSrc={selectedImage} /> */}
      </main>
      <footer className={styles.footer}>
        <a
          href="/portfolio.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/pdf.png"
            alt="File icon"
            width={16}
            height={16}
          />
          Portfolio PDF
        </a>
        <a
          href="https://www.linkedin.com/in/zh-bobbyzhao/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Image
          aria-hidden
          src="/linkedin.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Linked In
        </a>
      </footer>
    </div>
  );
}

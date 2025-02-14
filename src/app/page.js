'use client';

import * as React from 'react';
import { useState } from 'react';
import Image from "next/image";
import styles from "./page.module.css";
import { Carousel } from 'react-responsive-carousel';
import { Stack, Card, CardContent } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [imgSource, setImgSource] = React.useState();

  const handleClickOpen = (value) => {
    setImgSource(value);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgSource();
  };


  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <Carousel
      autoFocus
      showThumbs={false}
      autoPlay={false}
      infiniteLoop={true}
      swipeable
      showArrows={true}
      useKeyboardArrows={true}
      showStatus={false}
      >
        {Array.from({ length: 25 }, (_, index) => (
          <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
          key={(index * 2) + 1}    
          >
          <Card 
          onClick={() => {handleClickOpen(`/${`portfolio/Page${(index * 2) + 1}.jpg`}`)}}
          >
            <CardContent>
              <img
              src={`/${`portfolio/Page${(index * 2) + 1}.jpg`}`}
              alt={`Page${index+1}`}
              style={{
                height: 600,
                objectFit: 'contain',
              }}
              />
            </CardContent>
          </Card>
          <Card 
          key={(index * 2) + 2}
          onClick={() => {handleClickOpen(`/${`portfolio/Page${(index * 2) + 2}.jpg`}`)}}
          >
            <CardContent>
              <img
              src={`/${`portfolio/Page${(index * 2) + 2}.jpg`}`}
              alt={`Page${index+1}`}
              style={{
                height: 600,
                objectFit: 'contain',
              }}
              />
            </CardContent>
          </Card>
          </Stack>
        ))}
      </Carousel>
      <Dialog
      onClose={handleClose}
      open={open}
      // References: https://stackoverflow.com/questions/47181399/dialog-width-material-ui
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "1000px",
          },
        },
      }}
  
      >
        <img
          src={imgSource}
          alt="no image"
        />
      </Dialog>
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

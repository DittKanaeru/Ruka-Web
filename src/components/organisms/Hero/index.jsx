import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: '-100%',
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: 'Power3.easeOut',
      },
      '<'
    )
      .from(
        h12.current,
        {
          x: '-100%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        h13.current,
        {
          x: '-100%',
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      )
      .from(
        myimageref.current,
        {
          x: '200%',
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: 'Power3.easeOut',
        },
        '<'
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center">
      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi 🙌 <br /> Im Ruka AI 😻<br />
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          RPG wa Bot
        </h1>
        <h3
          ref={h13}
          className="w-full text-2xl text-dark-primary dark:text-light-primary md:text-4xl xl:text-5xl xl:leading-tight font-bold capitalize"
        >
          Modified by Dixy
        </h3>
      </div>
      <div className="mt-5 md:mt-0 w-48">
        <img
          src="https://telegra.ph/file/050cd7ae57f44e5f56061.png"
          alt="Ruka by Dixy"
          ref={myimageref}
          className="w-1/2 md:ml-auto w-100 border-8 border-dark-primary dark:border-light-primary rounded-full bg-slate-500"
        />
      </div>
    </main>
  );
};

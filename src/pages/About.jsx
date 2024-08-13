import React from 'react';
import { Layout } from '../layouts';
import { Timeline } from '../components';

const About = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 pb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            about me
          </h1>
          <p className="text-content py-8 lg:max-w-3xl">
            Ruka AI? apa itu? Ruka AI sendiri adalah bot whatsapp yg bertemakan RPG
            yg berbase victoria by clayza dan saya Dixy memodifikasi hingga hasil nya
            seperti yg sekarang
          </p>
        </section>
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            AI features
          </h1>
          <Timeline
            position="your best option if you have a question"
            company="Open ai,Gemini,and Claude"
            location="Free"
            type="On"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Games features
          </h1>
          <Timeline
            position="A multiplayer games"
            company="Inspired from realife game"
            location="DB from Github"
            type="On"
          />
        </section>
        <section className="mt-6">
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            RPG games
          </h1>
          <Timeline
            position="A Role play games"
            company="Inspired from console"
            location="code: RK-Web"
            type="On"
          />
        </section>
      </main>
    </Layout>
  );
};

export default About;

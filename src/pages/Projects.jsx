import React from 'react';
import { Layout } from '../layouts';
import { Card } from '../components';
import { projects } from '../data';

const Projects = () => {
  return (
    <Layout>
      <main className="container mx-auto max-width pt-10 mb-20 mt-10">
        <section>
          <h1 className="text-1xl text-dark-primary dark:text-light-primary md:text-3xl xl:text-4xl xl:leading-tight font-bold capitalize">
            Features
          </h1>
          <p className="text-xl text-dark-content md:text-1xl xl:text-2xl py-2">
            An example for our features
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
            {React.Children.toArray(
              projects.map(
                ({
                  title,
                  image,
                  description,
                  previewLink,
                  example,
                }) => (
                  <Card
                    title={title}
                    image={image}
                    description={description}
                    previewLink={previewLink}
                    example={example}
                  />
                )
              )
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default Projects;

import React from "react";
import { PageHeaderShape } from "@/app/components/PageHeaderShape";
import exampleImage from 'figma:asset/2e5815ad9cd7b670b5966472dfc21d4d581a46a9.png';

export default function About() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeaderShape fillColor="#A799B7">
        <h1 className="font-headline text-4xl md:text-6xl mb-[5px] mt-[15px] mr-[0px] ml-[0px] mx-[0px] my-[15px]">About</h1>

      </PageHeaderShape>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-[-200px] relative z-10 pt-[20px] pr-[32px] pb-[0px] pl-[32px] mb-[0px]">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
             <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={exampleImage}
                  alt="Artist work"
                  className="w-full h-full object-cover"
                />
             </div>
             <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-headline text-3xl text-primary mb-6">Hello & Welcome</h2>
                <div className="prose prose-lg text-foreground/80 font-body max-w-none">
                  <p className="mb-4">
                    I'm an artist and historian specializing in 18th- and 19th-century art, decorative arts, material culture, and women’s history. With a decade of experience as a textile dyer, I possess a deep technical and historical understanding of botanical dyes, with a particular expertise in indigo.
                  </p>
                  <p>
                    In addition to textile work, I'm an accomplished printmaker and designer. I earned a BFA in Art History with a Fine Arts minor in Drawing and Print Media from Moore College of Art and Design in May 2021, and I'm currently pursuing a Master of Arts in Museum Studies at Johns Hopkins University.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

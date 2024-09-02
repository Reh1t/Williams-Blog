import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";

const BlogWilliams: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start py-10 px-[60px] box-border gap-10 leading-[normal] tracking-[normal] mq725:gap-[30px] mq1025:gap-[60px] mq1025:pl-[30px] mq1025:pr-[30px] mq1025:box-border">
      <section className="w-[1658px] flex flex-col items-center justify-start gap-8 max-w-full text-center text-45xl text-darkslateblue font-inter mq725:gap-4">
        <h1 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] inline-block shrink-0 mq450:text-10xl mq975:text-[48px]">{`Williams Solutions.Pro Blog `}</h1>
        <h1 className="m-0 self-stretch relative text-19xl font-medium font-[inherit] text-darkslategray mq450:text-[31px] mq975:text-23xl">
          Connecting You with Knowledge.
        </h1>
      </section>
      <section className="self-stretch flex flex-row items-start justify-center flex-wrap content-start pt-0 px-px pb-0 box-border gap-x-14 gap-y-[54px] max-w-full mq725:gap-[27px]">
        <FrameComponent
          photo="/rectangle-124@2x.png"
          dateOfPublish="MAY 26, 2024"
          titleOfParagraph="Understanding Septic Systems: A Beginner’s Guide"
          parapgraph="If you’ve recently moved into a home with a septic system or are considering installing one, understanding how these systems work is essential. This guide will provide you with a comprehensive overview of septic systems, their components, and how to maintain them properly. "
          url="/septic-system"
        />
        <FrameComponent
          photo="/rectangle-124-1@2x.png"
          dateOfPublish="NOV 23 , 2023"
          propFontFamily="Montserrat"
          propTextDecoration="unset"
          titleOfParagraph="The Benefits of UV Water Treatment: A Comprehensive Guide"
          propFontFamily1="Montserrat"
          propAlignSelf="stretch"
          parapgraph="Water quality is a critical concern for many households and businesses. One of the most effective and environmentally friendly methods for ensuring safe drinking water is UV (ultraviolet) water treatment. This guide will explore how UV water treatment works, its benefits, and why it might be the right choice for your water purification needs."
          url="/u-v-water-treatment"
        />
        <FrameComponent
          photo="/rectangle-124-2@2x.png"
          dateOfPublish="FEB 9, 2021"
          propFontFamily="Inter"
          propTextDecoration="none"
          titleOfParagraph="Top 10 Plumbing Tips Every Homeowner Should Know"
          propFontFamily1="Montserrat"
          propAlignSelf="stretch"
          parapgraph="Proper plumbing maintenance is crucial for ensuring the longevity of your home’s plumbing system and preventing costly repairs. Read on for ten essential plumbing tips that every homeowner should know."
          url="/plumbing-tips"
        />
      </section>
    </div>
  );
};

export default BlogWilliams;

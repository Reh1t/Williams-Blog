import type { NextPage } from "next";
import Section from "./section";

export type BlogWilliamsWaterType = {
  className?: string;
};

const BlogWilliamsWater: NextPage<BlogWilliamsWaterType> = ({
  className = "",
}) => {
  return (
    <main
      className={`flex-1 bg-whiteoverflow-hidden flex flex-col items-end justify-start py-[78px] px-0 gap-[106px] max-w-full text-left text-xs text-darkslategray font-montserrat lg:pt-[33px] lg:pb-[33px] lg:box-border mq450:gap-[26px] mq450:pt-5 mq450:pb-5 mq450:box-border mq750:gap-[53px] mq1050:pt-[21px] mq1050:pb-[21px] mq1050:box-border ${className}`}
    >
      <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <div className="h-[400px] flex flex-col items-start justify-start max-w-full">
          <img
            className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-1243@2x.png"
          />
        </div>
      </section>
      <section className="self-stretch flex flex-col items-center justify-start py-0 px-5 box-border gap-6 max-w-full text-left text-5xl text-darkslategray font-montserrat">
        <Section />
        <div className="w-[1220px] hidden flex-col items-start justify-start gap-1 max-w-full">
          <div className="w-[184px] hidden flex-row items-center justify-center py-2.5 px-[9px] box-border font-inter">
            <div className="h-[29px] flex-1 relative font-semibold inline-block mq450:text-lgi">
              MAY 26, 2024
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start p-2.5 box-border max-w-full text-17xl text-darkblue">
            <b className="flex-1 relative inline-block max-w-full mq450:text-3xl mq1050:text-10xl">
              How a Septic System Works
            </b>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center p-2.5 box-border max-w-full">
            <div className="flex-1 relative inline-block max-w-full mq450:text-lgi">
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  When wastewater enters the septic tank, the solid materials
                  settle to the bottom, while oil and grease float to the top.
                  The remaining liquid wastewater exits the tank into the drain
                  field. The drain field treats the wastewater as it percolates
                  through the soil, which removes harmful coliform bacteria,
                  viruses, and nutrients.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <i className="font-medium font-montserrat">
                  Signs Your Septic System Needs Attention
                </i>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">
                  Regular maintenance is crucial for a well-functioning septic
                  system. Here are some signs that your system may need
                  attention:
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">
                  {`- `}
                  <span className="[text-decoration:underline]">
                    Slow Drains:
                  </span>{" "}
                  If your sinks, toilets, or showers are draining slowly, it
                  could indicate a clog in the system.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">
                  {`- `}
                  <span className="[text-decoration:underline]">{`Foul Odours: `}</span>
                  Unpleasant smells around your septic tank or drain field can
                  signal a problem.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">
                  {`- `}
                  <span className="[text-decoration:underline]">{`Lush, Green Grass: `}</span>
                  While a green lawn is usually desirable, overly lush grass
                  around your drain field may indicate that your system is
                  leaking and over-saturating the soil.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">
                  {`- `}
                  <span className="[text-decoration:underline]">{`Sewage Backups: `}</span>
                </span>
                <span className="font-medium">
                  Backups in toilets or drains are a clear sign of septic system
                  issues that need immediate attention.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium"> </span>
                <b className="font-montserrat">
                  Septic System Maintenance Tips
                </b>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  Proper maintenance can extend the life of your septic system
                  and prevent costly repairs. Here are some tips:
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  - Regular Inspections: Have your septic system inspected every
                  three years by a professional.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  - Pump the Tank: Your septic tank should be pumped every three
                  to five years to remove sludge and scum buildup.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  - Water Conservation: Using water efficiently can improve the
                  operation of your septic system and reduce the risk of
                  failure.
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  - Proper Disposal: Avoid flushing non-biodegradable items,
                  grease, and hazardous chemicals down the drain 
                </span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <b className="font-montserrat"> Conclusion</b>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">&nbsp;</span>
              </p>
              <p className="[margin-block-start:0] [margin-block-end:8px]">
                <span className="font-medium font-montserrat">
                  Understanding your septic system is the first step in ensuring
                  it operates efficiently and lasts for many years. Regular
                  maintenance and being mindful of what goes down your drains
                  can prevent most problems. If you have any concerns or need
                  professional assistance, don't hesitate to contact us. Our
                  team of experts is here to help you with all your septic
                  system needs.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogWilliamsWater;

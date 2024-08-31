import type { NextPage } from "next";
import { useMemo, type CSSProperties, useCallback } from "react";
import { useRouter } from "next/router";

export type FrameComponentType = {
  className?: string;
  rectangle124?: string;
  mAY262024?: string;
  understandingSepticSystems?: string;
  ifYouveRecentlyMovedIntoAHom?: string;
  url?: string;

  /** Style props */
  propFontFamily?: CSSProperties["fontFamily"];
  propTextDecoration?: CSSProperties["textDecoration"];
  propFontFamily1?: CSSProperties["fontFamily"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  rectangle124,
  mAY262024,
  propFontFamily,
  propTextDecoration,
  understandingSepticSystems,
  propFontFamily1,
  propAlignSelf,
  ifYouveRecentlyMovedIntoAHom,
  url,
}) => {
  const mAY262024Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: propFontFamily,
      textDecoration: propTextDecoration,
    };
  }, [propFontFamily, propTextDecoration]);

  const understandingSepticSystemsStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: propFontFamily1,
      alignSelf: propAlignSelf,
    };
  }, [propFontFamily1, propAlignSelf]);

  const router = useRouter();

  const onREADMORETextClick = useCallback(() => {
    router.push("url");
  }, [router]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-6 max-w-full min-w-44 shrink-0 text-left text-sm text-darkslategray font-inter ${className}`}
    >
      <div className="self-stretch h-[350px] flex flex-col items-start justify-start">
        <img
          className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
          loading="lazy"
          alt=""
          src={rectangle124}
        />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-3 shrink-0">
        <div
          className="self-stretch relative font-semibold"
          style={mAY262024Style}
        >
          {mAY262024}
        </div>
        <h2
          className="m-0 relative text-5xl font-semibold font-[inherit] text-darkslateblue mq450:text-lgi"
          style={understandingSepticSystemsStyle}
        >
          {understandingSepticSystems}
        </h2>
        <div className="self-stretch relative text-base font-montserrat">
          {ifYouveRecentlyMovedIntoAHom}
        </div>
      </div>
      <div className="w-[117px] h-px relative border-darkslateblue border-t-[1px] border-solid box-border" />
      <a
        className="self-stretch relative text-lg [text-decoration:underline] font-medium text-darkslateblue cursor-pointer"
        href="https://www.figma.com/design/hzokTab1eBIAnMbu6EJpLC?node-id=4516-38"
        target="_blank"
        onClick={onREADMORETextClick}
      >
        READ MORE
      </a>
    </div>
  );
};

export default FrameComponent;

import imgManInHoodie from "figma:asset/18e1dc6eea793c1d5c5058dc1a1f741c3f223165.png";

function Frame() {
  return (
    <div className="bg-[#dbdbdb] col-1 h-[178.5px] relative row-1 shrink-0 w-[202.667px]">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] left-[calc(50%+0.17px)] text-[128px] text-black text-center top-[calc(50%-0.25px)] tracking-[-6.4px] whitespace-nowrap">
        <p className="leading-[128px]">07</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#c10014] content-stretch flex flex-col items-start px-[12px] py-[4px] relative shrink-0" data-name="Background">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] relative shrink-0 text-[10px] text-white tracking-[2px] uppercase w-[106.63px]">
        <p className="leading-[15px]">FWA OF THE DAY</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Background />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[180px] relative shrink-0 w-[180px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[33px] justify-center leading-[0] not-italic relative shrink-0 text-[#5a6061] text-[10px] tracking-[1px] uppercase w-[158.45px]">
        <p className="leading-[16.25px] mb-0">make here another text</p>
        <p className="leading-[16.25px]">block</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="col-[1/span_3] content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function TopPart() {
  return (
    <div className="gap-y-[16px] grid grid-cols-[___minmax(0,1fr)_101.33px_minmax(0,1fr)] grid-rows-[__178.50px_minmax(0,1fr)] h-[321px] relative shrink-0 w-full" data-name="Top part">
      <Frame />
      <Container />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[320px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[18px] w-full">
        <p className="leading-[29.25px] mb-0">A generative synthesis of human</p>
        <p className="leading-[29.25px] mb-0">perception and machine</p>
        <p className="leading-[29.25px] mb-0">intelligence. Redefining the</p>
        <p className="leading-[29.25px] mb-0">boundaries of digital curation</p>
        <p className="leading-[29.25px]">through algorithmic precision.</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#5e5e5e] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[17px] justify-center leading-[0] relative shrink-0 text-[#f8f8f8] text-[11px] text-center tracking-[2.2px] uppercase w-[125.42px]">
            <p className="leading-[16.5px]">Launch Project</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DescriptiveText() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Descriptive Text">
      <Container3 />
      <Button />
    </div>
  );
}

function BottomPart() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom part">
      <div className="content-stretch flex flex-col items-start pr-[48px] relative w-full">
        <DescriptiveText />
      </div>
    </div>
  );
}

function LeftColumn() {
  return (
    <div className="col-[1/span_3] justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Left Column">
      <div className="content-stretch flex flex-col items-start justify-between pt-[44px] relative size-full">
        <TopPart />
        <BottomPart />
      </div>
    </div>
  );
}

function ManInHoodie() {
  return (
    <div className="h-[627px] relative shrink-0 w-full" data-name="man in hoodie">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[145.45%] left-0 max-w-none top-[-22.73%] w-full" src={imgManInHoodie} />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black justify-center leading-[0] relative shrink-0 text-[128px] text-white tracking-[-6.4px] w-full">
        <p className="leading-[128px]">Oryzo AI</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Newsreader:Regular_Italic',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-[rgba(255,255,255,0.9)] w-full">
        <p className="leading-[36px]">Powered by AI</p>
      </div>
    </div>
  );
}

function OverlayTypography() {
  return (
    <div className="absolute bottom-[48px] content-stretch flex flex-col gap-[16px] items-start left-[48px] right-[48px]" data-name="Overlay Typography">
      <Heading />
      <Container4 />
    </div>
  );
}

function MiddleRightColumnsExpandedHeroImage() {
  return (
    <div className="bg-[#ebeeef] col-[4/span_9] content-stretch flex flex-col items-start justify-center justify-self-stretch overflow-clip relative row-1 self-end shrink-0" data-name="Middle & Right Columns: Expanded Hero Image">
      <ManInHoodie />
      <OverlayTypography />
    </div>
  );
}

function MainContentCanvas() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Main Content Canvas">
      <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_670.50px] max-w-[inherit] px-[32px] relative w-full">
        <LeftColumn />
        <MiddleRightColumnsExpandedHeroImage />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="col-[1/span_3] content-stretch flex flex-col items-start justify-self-stretch pb-[358.5px] relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#c10014] text-[10px] tracking-[3px] uppercase w-[111.16px]">
        <p className="leading-[15px]">01 — CONCEPT</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5a6061] text-[10px] tracking-[3px] uppercase w-[55.8px]">
          <p className="leading-[15px]">POINTS</p>
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[60px] tracking-[-3px] w-[69.39px]">
          <p className="leading-[60px]">90</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="min-w-[200px] relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(173,179,180,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] h-full items-end min-w-[inherit] pb-[17px] pr-[50.81px] relative">
          <Container7 />
          <Container8 />
        </div>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#5a6061] text-[10px] tracking-[3px] uppercase w-[39.34px]">
          <p className="leading-[15px]">DAYS</p>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative">
        <div className="flex flex-col font-['Epilogue:Black',sans-serif] font-black h-[60px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[60px] tracking-[-3px] w-[35.98px]">
          <p className="leading-[60px]">2</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="min-w-[200px] relative self-stretch shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(173,179,180,0.2)] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-end min-w-[inherit] size-full">
        <div className="content-stretch flex gap-[24px] h-full items-end min-w-[inherit] pb-[17px] pr-[100.68px] relative">
          <Container9 />
          <Container10 />
        </div>
      </div>
    </div>
  );
}

function HorizontalStatsBlockMovedHere() {
  return (
    <div className="content-stretch flex gap-[64px] h-[77px] items-start relative shrink-0 w-full" data-name="Horizontal Stats Block (Moved here)">
      <HorizontalBorder />
      <HorizontalBorder1 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[896px] relative shrink-0 w-[896px]" data-name="Heading 3">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[216px] justify-center leading-[0] relative shrink-0 text-[#2d3435] text-[72px] tracking-[-3.6px] w-[868.55px]">
        <p className="leading-[72px] mb-0">The intersection of neural</p>
        <p className="leading-[72px] mb-0">networks and editorial</p>
        <p className="leading-[72px]">design.</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="col-[4/span_9] content-stretch flex flex-col gap-[80px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <HorizontalStatsBlockMovedHere />
      <Heading1 />
    </div>
  );
}

function ProjectSectionTransitionsHorizontalStats() {
  return (
    <div className="grid grid-cols-[repeat(12,minmax(0,1fr))] grid-rows-[_373px] pt-[46px] relative shrink-0 w-[1216px]" data-name="Project Section Transitions & Horizontal Stats">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Bold',sans-serif] font-bold h-[24px] justify-center leading-[0] relative shrink-0 text-[#171717] text-[16px] tracking-[-0.8px] uppercase w-[85.48px]">
        <p className="leading-[24px]">STUDIO.EDIT</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1.2px] uppercase w-[285.3px]">
        <p className="leading-[18px]">©2024 STUDIO.EDIT — ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-[285.3px]" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] tracking-[1px] uppercase w-[42.61px]">
        <p className="leading-[15px]">Social</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1.2px] uppercase w-[73.56px]">
        <p className="leading-[18px]">Instagram</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1.2px] uppercase w-[45.83px]">
        <p className="leading-[18px]">Are.na</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#737373] text-[12px] tracking-[1.2px] uppercase w-[58.2px]">
        <p className="leading-[18px]">LinkedIn</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 w-[73.56px]" data-name="Container">
      <Container17 />
      <Link />
      <Link1 />
      <Link2 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#a3a3a3] text-[10px] tracking-[1px] uppercase w-[55.42px]">
        <p className="leading-[15px]">Contact</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Epilogue:Regular',sans-serif] font-normal h-[18px] justify-center leading-[0] relative shrink-0 text-[#171717] text-[12px] tracking-[1.2px] uppercase w-[130.72px]">
        <p className="[text-decoration-skip-ink:none] decoration-solid leading-[18px] underline">hello@studio.edit</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative self-stretch shrink-0 w-[130.72px]" data-name="Container">
      <Container19 />
      <Link3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[64px] h-[105px] items-start relative shrink-0" data-name="Container">
      <Container16 />
      <Container18 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-start justify-between max-w-[1600px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
    </div>
  );
}

function FooterComponent() {
  return (
    <div className="bg-[#fafafa] relative shrink-0 w-full" data-name="Footer Component">
      <div className="content-stretch flex flex-col items-start px-[32px] py-[80px] relative w-full">
        <Container11 />
      </div>
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#f9f9f9] content-stretch flex flex-col items-center relative size-full" data-name="Body">
      <MainContentCanvas />
      <ProjectSectionTransitionsHorizontalStats />
      <FooterComponent />
    </div>
  );
}
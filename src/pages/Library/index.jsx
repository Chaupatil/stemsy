import { Helmet } from "react-helmet";
import { Heading, Img, SelectBox, Button, Input } from "../../components";
import { CloseSVG } from "../../components/Input/close.jsx";
import LibraryColumnTwo from "./LibraryColumnTwo";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function LibraryPage() {
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <>
      <Helmet>
        <title>Library</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-6 bg-gray-50_02">
        <header>
          <div className="relative z-[1] flex items-center justify-between gap-5 bg-blue-800 px-[34px] py-[18px] md:flex-col sm:px-4">
            <div className="flex items-center gap-[18px]">
              <div className="mb-1 flex flex-col items-center p-3">
                <a href="#">
                  <Img
                    src="images/img_icon_charm_menu_hamburger.svg"
                    alt="Iconcharmmenu"
                    className="h-[32px] w-[32px]"
                  />
                </a>
              </div>
              <Img
                src="images/img_header_logo.png"
                alt="Headerlogo"
                className="h-[52px] w-[154px] self-end object-contain"
              />
            </div>
            <div className="flex w-[74%] items-center justify-between gap-5 md:w-full md:flex-col">
              <div className="flex w-[88%] justify-center gap-[22px] md:w-full md:flex-col">
                <SelectBox
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown.svg"
                      alt="Arrow Down"
                      className="h-[24px] w-[24px]"
                    />
                  }
                  name="explorebutton"
                  placeholder={`Explore`}
                  options={dropDownOptions}
                  className="w-[12% ] gap-2 font-semibold md:w-full"
                />
                <Input
                  shape="round"
                  name="search"
                  placeholder={`Search here`}
                  value={searchBarValue4}
                  onChange={(e) => setSearchBarValue4(e.target.value)}
                  suffix={
                    searchBarValue4?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue4("")}
                        height={24}
                        width={24}
                        fillColor="#7b7a7cff"
                      />
                    ) : (
                      <Img
                        src="images/img_search_gray_600_03.svg"
                        alt="Search"
                        className="h-[24px] w-[24px]"
                      />
                    )
                  }
                  className="flex-grow gap-2 text-gray-400"
                />
                <div className="flex w-[36%] items-center justify-between gap-5 md:w-full">
                  <a href="#">
                    <Button
                      size="3xl"
                      className="w-[54px] rounded-[26px] border border-solid border-gray-50"
                    >
                      <Img src="images/img_icon_ri_mic_line.svg" />
                    </Button>
                  </a>
                  <SelectBox
                    variant="outline"
                    shape="round"
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_50.svg"
                        alt="Arrow Down"
                        className="h-[24px] w-[24px]"
                      />
                    }
                    getOptionLabel={(e) => (
                      <>
                        <div className="flex items-center">
                          <Img
                            src="images/img_icon_uillanguage.svg"
                            alt="Icon/uil:language"
                            className="h-[24px] w-[24px]"
                          />
                          <span>{e.label}</span>
                        </div>
                      </>
                    )}
                    name="language"
                    placeholder={`English`}
                    options={dropDownOptions}
                    className="w-[38% ] gap-2 font-semibold"
                  />
                </div>
              </div>
              <a
                href="https://www.youtube.com/embed/bv8Fxkøsz71"
                target="_blank"
              >
                <Img
                  src="images/img_ellipse_2.png"
                  alt="Image"
                  className="h-[52px] w-[52px] rounded-[26px] object-cover md:w-full"
                />
              </a>
            </div>
          </div>
          <div className="relative mt-[-2px] flex justify-center bg-amber-300_02">
            <div className="container-xs mt-1 flex justify-center px-14 lg:px-5 md:px-5">
              <Heading
                size="text7xl"
                as="p"
                className="capitalize md:text-[22px]"
              >
                Library
              </Heading>
            </div>
          </div>
        </header>
        <LibraryColumnTwo />
      </div>
    </>
  );
}

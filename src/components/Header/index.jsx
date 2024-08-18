import { CloseSVG } from "../Input/close.jsx";
import { Img, SelectBox, Button, Input } from "./..";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header
      {...props}
      className={`${props.className} flex sm:flex-col justify-between items-center gap-5 px-[34px] py-[18px] sm:px-4 bg-blue-800`}
    >
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
      <div className="flex w-[46%] items-center justify-center gap-[22px] md:w-full md:flex-col">
        <SelectBox
          shape="round"
          indicator={
            <Img
              src="images/img_arrowdown.svg"
              alt="Arrow Down"
              className="w-[24px] h-[24px]"
            />
          }
          name="explorebutton"
          placeholder={`Explore`}
          options={dropDownOptions}
          className="w-[18%] gap-2 font-semibold md:w-full"
        />
        <Input
          shape="round"
          name="search"
          placeholder={`Search here`}
          value={searchBarValue}
          onChange={(e) => setSearchBarValue(e.target.value)}
          suffix={
            searchBarValue?.length > 0 ? (
              <CloseSVG
                onClick={() => setSearchBarValue("")}
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
        <a href="#">
          <Button
            size="3xl"
            className="w-[54px] rounded-[26px] border border-solid border-gray-50"
          >
            <Img src="images/img_icon_ri_mic_line.svg" />
          </Button>
        </a>
      </div>
      <div className="flex w-[18%] items-center justify-between gap-5 md:w-full">
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
          className="w-[52%] gap-2 font-semibold"
        />
        <Img
          src="images/img_ellipse_2.png"
          alt="Image"
          className="h-[52px] w-[52px] rounded-[26px] object-cover"
        />{" "}
      </div>
    </header>
  );
}

import { Helmet } from "react-helmet";
import { Img, Text, Button, Input, Heading, SelectBox } from "../../components";
import React from "react";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function SigninfilledPage() {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="h-[1080px] w-full bg-gray-50_02 bg-[url(/public/images/img_sign_in_filled.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
        <div className="h-[1080px] bg-[url(/public/images/img_group_38.png)] bg-cover bg-no-repeat lg:h-auto md:h-auto">
          <div className="mt - [82px]">
            <div className="flex flex-col items-center gap-[66px] sm:gap-[33px]">
              <header className="flex w-[96%] items-center justify-between gap-5 lg:w-full lg:px-5 md:w-full md:px-5">
                <a href="#">
                  <Button size="2xl" className="w-[42px] rounded-[20px] ">
                    <Img src="images/img_arrow_right.svg" />
                  </Button>
                </a>
                <SelectBox
                  color="gray_900"
                  size="xs"
                  variant="outline"
                  shape="round"
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_900.svg"
                      alt="Arrow Down"
                      className="h-[20px] w-[20px]"
                    />
                  }
                  getOptionLabel={(e) => (
                    <>
                      <div className="flex items-center">
                        <Img
                          src="images/img_icon_uillanguage_blue_800.svg"
                          alt="Icon/uil:language"
                          className="h-[20px] w-[20px]"
                        />
                        <span>{e.label}</span>
                      </div>
                    </>
                  )}
                  name="language"
                  placeholder={`English`}
                  options={dropDownOptions}
                  className="w-[8%] gap-2 font-semibold"
                />
              </header>
              <div className="flex items-end self-stretch md:flex-col">
                <Img
                  src="images/img_group_1000002262.svg"
                  alt="Image"
                  className="mb-[196px] h-[114px] w-[6%] object-contain md:w-full"
                />
                <div className="flex flex-1 flex-col items-center self-center px-14 md:self-stretch md:px-5">
                  <div className="flex w-[38%] flex-col items-center justify-center gap-16 rounded-[28px] border border-solid border-black-900_4c bg-gray-50 px-[46px] py-[60px] lg:w-full md:w-full md:p-5 sm:gap-8 sm:p-4">
                    <Heading
                      size="text8xl"
                      as="h1"
                      className="!text-black-900 md:text-[26px] sm:text-[24px]"
                    >
                      Let's get started!
                    </Heading>
                    <div className="mb-2 flex flex-col items-center self-stretch">
                      <Input
                        color="blue_gray_50"
                        size="sm"
                        shape="round"
                        name="buttonfield_one"
                        placeholder={`ID-ASV215487963`}
                        className="self-stretch border border-solid border-black-900_33"
                      />
                      <Input
                        color="blue_gray_50"
                        size="sm"
                        shape="round"
                        type="password"
                        name="password"
                        placeholder={`************`}
                        suffix={
                          <Img
                            src="images/img_eye.svg"
                            alt="Eye"
                            className="h-[24px] w-[24px]"
                          />
                        }
                        className="mt-4 gap-2 self-stretch border border-solid border-black-900_33"
                      />
                      <a href="#" className="mt-4 self-end">
                        <Text as="p" className="! font-medium !text-blue-800">
                          Forgot password?
                        </Text>
                      </a>
                      <a
                        href="https://www.youtube.com/embed/bv8Fxk@sz7I"
                        target="_blank"
                      >
                        <Button
                          size="5xl"
                          shape="round"
                          rightIcon={
                            <Img
                              src="images/img_arrow_right.svg"
                              alt="Arrow Right"
                              className="my-0.5 h-[20px] w-[20px]"
                            />
                          }
                          className="mt-9 gap-1 self-stretch font-semibold text-gray-50"
                        >
                          Sign in
                        </Button>
                      </a>
                      <div className="mt-8 flex items-end justify-center gap-3.5 self-stretch sm: flex-col">
                        <div className="mb-2 h-[0.5px] flex-1 bg-gray-500_02 sm:self-stretch" />
                        <Text as="p" className="self-center !text-gray-700">
                          Or Sign In with{" "}
                        </Text>
                        <div className="mb-2 h-[0.5px] flex-1 bg-gray-500_02 sm:self-stretch" />
                      </div>
                      <Button
                        color="black_900_33"
                        size="xl"
                        variant="outline"
                        shape="round"
                        leftIcon={
                          <Img
                            src="images/img_icon_google.svg"
                            alt="Icon/google"
                            className="my-0.5 h-[20px] w-[20px]"
                          />
                        }
                        className="mt-4 min-w-[130px] gap-2"
                      >
                        Google
                      </Button>
                      <Text as="p" className="mt-[68px] !text-blue-800">
                        <span className="text-blue_gray-400">
                          Don't have an account?
                        </span>
                        <span className="text-blue-800">&nbsp;</span>
                        <span className="font-medium text-blue-800">
                          Sign up
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <Img
                  src="images/img_group_1000002266.png"
                  alt="Image"
                  className="mb-[124px] h-[184px] w-[6%] object-contain md:w-full"
                />
              </div>
              <div className="container-xs flex flex-col items-center px-14 lg:px-5 md:px-5">
                <div className="mr-6 flex w-[90%] justify-between gap-5 lg:w-full md:mr-0 md:w-full">
                  <Img
                    src="images/img_group_1000002264.png"
                    alt="Image"
                    className="h-[106px] w-[8%] object-contain"
                  />
                  <Img
                    src="images/img_group_1000002263.png"
                    alt="Image"
                    className="h-[106px] w-[12%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

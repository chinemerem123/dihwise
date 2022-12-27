import React from "react";

import { Column, Row, Text, Button, Stack, Img, List } from "components";

const MacBookPro14OnePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-nunito items-center justify-start mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_frame2.png')" }}
        >
          <Column className="bg-black_900_7f flex flex-col items-center justify-start pb-[151px] sm:pb-[15px] md:pb-[98px] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Row className="bg-black_900_66 flex flex-row md:flex-wrap sm:flex-wrap items-center md:p-[13px] sm:p-[15px] p-[21px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between max-w-[1359px] mb-[1px] md:ml-[38px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Text
                    className="font-bold font-nunito sm:mt-[13px] md:mt-[17px] mt-[26px] text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    ഥധഉധ
                  </Text>
                  <Button className="cursor-pointer font-bold font-inter min-w-[13%] text-[20px] text-center text-gray_800 w-[max-content]">
                    Get Started
                  </Button>
                </Row>
              </Row>
              <Column className="flex flex-col justify-start max-w-[1242px] md:ml-[52px] ml-[auto] mr-[auto] mt-[106px] sm:mt-[53px] md:mt-[69px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Text
                  className="font-extrabold font-lato text-gray_400 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  (Nacos Noun National)
                </Text>
                <Text
                  className="font-lato leading-[90.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[13px] md:mt-[17px] mt-[27px] text-white_A700 w-[100%]"
                  as="h1"
                  variant="h1"
                >
                  The Nigeria Association of Computing
                  <br />
                  Students of the National <br />
                  Open University of Nigeria
                </Text>
                <Text
                  className="bg-green_A700 font-inter sm:mt-[31px] md:mt-[40px] mt-[62px] sm:p-[15px] md:px-[22px] px-[35px] md:py-[15px] py-[24px] rounded-radius10 text-shadow-ts text-white_A700 w-[224px]"
                  as="h6"
                  variant="h6"
                >
                  Get Started
                </Text>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start max-w-[1331px] ml-[auto] mr-[auto] mt-[108px] sm:mt-[54px] md:mt-[70px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
            <Stack className="h-[596px] relative sm:w-[100%] w-[45%]">
              <Column className="absolute flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[87%]">
                <Stack className="h-[517px] relative rounded-radius475 w-[100%]">
                  <Stack className="absolute bottom-[0] h-[374px] w-[100%]">
                    <Img
                      src="images/img_rectangle3.svg"
                      className="absolute bottom-[0] h-[350px] left-[0] max-w-[100%] rounded-bl-[0] rounded-br-[0] rounded-tl-[28.5px] rounded-tr-[28.5px] sm:w-[100%] w-[67%]"
                      alt="RectangleThree"
                    />
                    <Img
                      src="images/img_rectangle4.svg"
                      className="absolute h-[374px] max-w-[100%] right-[0] rounded-bl-[0] rounded-br-[0] rounded-tl-[28.5px] rounded-tr-[28.5px] sm:w-[100%] w-[64%]"
                      alt="RectangleFour"
                    />
                  </Stack>
                  <Img
                    src="images/img_icons8teamfcl.png"
                    className="absolute h-[517px] left-[10%] max-w-[100%] rounded-radius475 sm:w-[100%] w-[76%]"
                    alt="icons8teamFcL"
                  />
                </Stack>
              </Column>
              <Row className="absolute bg-white_A700 bottom-[0] flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] md:p-[15px] sm:p-[15px] p-[23px] right-[0] rounded-radius10 shadow-bs sm:w-[100%] w-[78%]">
                <Img
                  src="images/img_ellipse1.png"
                  className="h-[100px] sm:h-[51px] md:h-[66px] mb-[2px] rounded-radius50 w-[100px] sm:w-[50px] md:w-[65px]"
                  alt="EllipseOne"
                />
                <Text
                  className="flex-grow font-bold leading-[normal] md:ml-[15px] ml-[24px] sm:mx-[0] text-black_900"
                  as="h5"
                  variant="h5"
                >
                  Advancing Technology and
                  <br />
                  Innovation Conference
                </Text>
              </Row>
            </Stack>
            <Column className="flex flex-col justify-start sm:mt-[27px] md:mt-[36px] mt-[55px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="font-roboto text-black_900 w-[auto]"
                as="h2"
                variant="h2"
              >
                About (Nacos Noun National)
              </Text>
              <Text
                className="font-sansation leading-[30.00px] md:leading-[normal] sm:leading-[normal] sm:mt-[17px] md:mt-[22px] mt-[34px] not-italic text-gray_500 tracking-ls075 md:tracking-ls1 sm:tracking-ls1 w-[100%]"
                as="h4"
                variant="h4"
              >
                We now live in world where nearly everything is being
                digitalized. It has been said repeatedly that the next
                generation belong to the young people of today.
                <br />
                <br />
                Bearing in the mind that National Open University has the
                highest number of Nigeria, Computer Science & information
                Technology Student in Nigeria in the country that we make good
                use of the number of schools in particular the I.T related
                aspect of our studying to really count.
              </Text>
              <Text
                className="bg-green_A700 font-inter sm:mt-[32px] md:mt-[42px] mt-[65px] sm:p-[15px] md:px-[22px] px-[35px] md:py-[15px] py-[24px] rounded-radius10 text-shadow-ts text-white_A700 w-[224px]"
                as="h6"
                variant="h6"
              >
                Get Started
              </Text>
            </Column>
          </Row>
        </Column>
        <Column className="bg-gray_50 flex flex-col font-sansation items-center justify-start mt-[148px] sm:mt-[75px] md:mt-[97px] sm:p-[15px] md:p-[45px] p-[70px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1364px] sm:mb-[15px] md:mb-[19px] mb-[30px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Text
                className="text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls15 w-[auto]"
                as="h2"
                variant="h2"
              >
                Feature
              </Text>
              <List
                className="gap-[15px] sm:gap-[7px] md:gap-[9px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:mt-[41px] md:mt-[53px] mt-[81px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[25px] rounded-radius5 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_iconsaxbulkbo.svg"
                    className="sm:h-[41px] md:h-[53px] h-[80px] max-w-[100%] sm:ml-[10px] md:ml-[13px] ml-[21px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:w-[40px] md:w-[52px] w-[80px]"
                    alt="IconsaxBulkbo"
                  />
                  <Text
                    className="sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[13px] md:mt-[17px] mt-[26px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls105 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Match
                  </Text>
                  <Text
                    className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[13px] ml-[21px] mt-[15px] sm:mt-[7px] md:mt-[9px] sm:mx-[0] text-gray_600 tracking-ls051 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[88%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, his ex docendi pertinacia
                    assueverit, ad atomorum voluptatum usu, quo modo natum ex.
                    Mel quidam quaerendum definition.
                  </Text>
                </Column>
                <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[25px] rounded-radius5 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_iconsaxbulkre.svg"
                    className="sm:h-[41px] md:h-[53px] h-[80px] max-w-[100%] sm:ml-[11px] md:ml-[15px] ml-[23px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:w-[40px] md:w-[52px] w-[80px]"
                    alt="IconsaxBulkre"
                  />
                  <Text
                    className="sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[13px] md:mt-[17px] mt-[26px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls105 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Competition
                  </Text>
                  <Text
                    className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[13px] ml-[21px] sm:mt-[4px] md:mt-[5px] mt-[9px] sm:mx-[0] text-gray_600 tracking-ls051 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[88%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, his ex docendi pertinacia
                    assueverit, ad atomorum voluptatum usu, quo modo natum ex.
                    Mel quidam quaerendum definition.
                  </Text>
                </Column>
                <Column className="bg-white_A700 flex flex-col justify-end sm:p-[15px] md:p-[16px] p-[25px] rounded-radius5 shadow-bs1 w-[100%]">
                  <Img
                    src="images/img_user.svg"
                    className="sm:h-[41px] md:h-[53px] h-[80px] max-w-[100%] sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[3px] md:mt-[4px] mt-[7px] sm:w-[40px] md:w-[52px] w-[80px]"
                    alt="user"
                  />
                  <Text
                    className="sm:ml-[13px] md:ml-[17px] ml-[26px] sm:mt-[13px] md:mt-[17px] mt-[26px] text-black_900 md:tracking-ls1 sm:tracking-ls1 tracking-ls105 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Membership
                  </Text>
                  <Text
                    className="leading-[30.00px] md:leading-[normal] sm:leading-[normal] md:ml-[13px] ml-[21px] sm:mt-[4px] md:mt-[5px] mt-[9px] sm:mx-[0] text-gray_600 tracking-ls051 md:tracking-ls1 sm:tracking-ls1 sm:w-[100%] w-[88%]"
                    variant="body1"
                  >
                    Lorem ipsum dolor sit amet, his ex docendi pertinacia
                    assueverit, ad atomorum voluptatum usu, quo modo natum ex.
                    Mel quidam quaerendum definition.
                  </Text>
                </Column>
              </List>
            </Column>
          </Column>
        </Column>
        <Column className="bg-black_901 flex flex-col font-sansation items-center justify-end md:mt-[101px] mt-[155px] sm:mt-[78px] sm:p-[15px] md:p-[35px] p-[54px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[348px] ml-[auto] mr-[auto] md:mt-[10px] mt-[16px] sm:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="text-white_A700 tracking-ls06 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h6"
              variant="h6"
            >
              Copyright 2022. All Rights Reserved
            </Text>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default MacBookPro14OnePage;

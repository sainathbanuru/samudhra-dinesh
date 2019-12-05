import React, { Component, useEffect } from "react";
import styled from "styled-components";
import Heading from "../common/heading";
import EmptyLines from "../common/emptyLines";

import { Parallax, Background } from "react-parallax";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const ContactDetails = styled.div`
  @media (max-width: 767px) {
    flex-direction: column;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;

    justify-content: center;
  }
`;

const InputContainer = styled.div`
  @media (max-width: 767px) {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-bottom: 20px;
    margin: 0;
    width: 90%;
  }

  @media (min-width: 768px) {
    border: 1px solid #000;
    padding: "16px 0";
    display: flex;
  }
`;

const CustomButton = styled.p`
  color: #fff;
  background-color: #dc851e;
  padding: 8px 40px;

  @media (max-width: 767px) {
    width: 100%;
    text-align: center;
  }

  @media (min-width: 768px) {
  }
`;

const Text = styled.p`
  font-family: Quicksand-Regular;
`;

const H3Heading = styled.h3`
  font-family: Quicksand-Regular;
`;

const Contact = props => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true";
    script.async = true;

    const childrenLength = document.getElementById("opentable").children.length;

    if (childrenLength == 0) {
      // console.log(childrenLength);
      document.getElementById("opentable").appendChild(script);
    }
  }, []);

  return (
    <Wrapper>
      <Heading>Reservations</Heading>
      {/* <ContactDetails>
          <Text style={{ textAlign: "center" }}>Tel: 123-456-7890</Text>
          <Text>&nbsp; | &nbsp;Email: info@mysite.com</Text>
        </ContactDetails> */}

      {/* <EmptyLines /> */}
      {/* <script
          type="text/javascript"
          src="//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true"
        /> */}

      <Parallax
        blur={0}
        bgImage={"/static/images/wave250Op.png"}
        bgImageAlt="the cat"
        strength={800}
        style={{
          height: "auto",
          display: "flex",
          justifyContent: "center",
          backgroundSize: "contain",
          flexDirection: "row",
          width: "100%"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "16px auto",
            padding: "16px",
            maxWidth: "75%"
          }}
        >
          {/* <H3Heading
            style={{
              textAlign: "center",
              margin: 0,
              marginBottom: 8,
              marginRight: 8,
              marginLeft: 8,
              fontFamily: "Sans-Narrow-Regular"
            }}
          >
            One should never pass by any opportunity to celebrate. Be it any
            occasion just share with us and we will begin the process to make it
            a celebration!
          </H3Heading> */}

          {/* <div
              dangerouslySetInnerHTML={{
                __html: `<script type="text/javascript"  src="//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true"/>`
              }}
            /> */}

          <div id={"opentable"}> </div>

          {/* <InputContainer>
              <input
                style={{
                  width: "100%",
                  padding: "8px 0 8px 4px",
                  marginBottom: "8px"
                }}
                placeholder="Name"
                type="text"
              />
              <input
                style={{
                  width: "100%",
                  padding: "8px 0 8px 4px",
                  marginBottom: "8px"
                }}
                placeholder="Email"
                type="email"
              />
              <textarea
                rows={8}
                style={{
                  width: "100%",
                  padding: "8px 0 8px 4px",
                  marginBottom: "8px"
                }}
                placeholder="Message"
                type="textarea"
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  marginBottom: 16
                }}
              >
                <CustomButton>Submit</CustomButton>
              </div>
            </InputContainer> */}
        </div>
      </Parallax>
    </Wrapper>
  );
};

// class Contact extends Component {
//   state = {
//     loaded: false
//   };

//   loaded = false;
//   componentDidMount() {
//     if (!this.loaded) {
//       const script = document.createElement("script");

//       script.src =
//         "//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true";
//       script.async = true;

//       const childrenLength = document.getElementById("opentable").children
//         .length;

//       console.log(childrenLength);
//       if (childrenLength == 0) {
//         document.getElementById("opentable").appendChild(script);
//       }

//       // console.log("adding");
//       // this.loaded = true;
//       // this.setState({
//       //   loaded: true
//       // });
//     }
//     // document.body.appendChild(script);
//   }

//   render() {
//     return (
//       <Wrapper>
//         <Heading>Reservations</Heading>
//         {/* <ContactDetails>
//           <Text style={{ textAlign: "center" }}>Tel: 123-456-7890</Text>
//           <Text>&nbsp; | &nbsp;Email: info@mysite.com</Text>
//         </ContactDetails> */}

//         {/* <EmptyLines /> */}
//         {/* <script
//           type="text/javascript"
//           src="//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true"
//         /> */}

//         <Parallax
//           blur={0}
//           bgImage={"/static/images/wave250Op.png"}
//           bgImageAlt="the cat"
//           strength={800}
//           style={{
//             height: "auto",
//             display: "flex",
//             justifyContent: "center",
//             backgroundSize: "contain",
//             flexDirection: "row",
//             width: "100%"
//           }}
//         >
//           <div
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               margin: "16px auto",
//               padding: "16px",
//               maxWidth: "75%"
//             }}
//           >
//             <H3Heading
//               style={{
//                 textAlign: "center",
//                 margin: 0,
//                 marginBottom: 8,
//                 marginRight: 8,
//                 marginLeft: 8,
//                 fontFamily: "Sans-Narrow-Regular"
//               }}
//             >
//               One should never pass by any opportunity to celebrate. Be it any
//               occasion just share with us and we will begin the process to make
//               it a celebration!
//             </H3Heading>

//             {/* <div
//               dangerouslySetInnerHTML={{
//                 __html: `<script type="text/javascript"  src="//www.opentable.com/widget/reservation/loader?rid=1049302&domain=com&type=standard&theme=standard&lang=en&overlay=false&iframe=true"/>`
//               }}
//             /> */}

//             <div id={"opentable"}> </div>

//             {/* <InputContainer>
//               <input
//                 style={{
//                   width: "100%",
//                   padding: "8px 0 8px 4px",
//                   marginBottom: "8px"
//                 }}
//                 placeholder="Name"
//                 type="text"
//               />
//               <input
//                 style={{
//                   width: "100%",
//                   padding: "8px 0 8px 4px",
//                   marginBottom: "8px"
//                 }}
//                 placeholder="Email"
//                 type="email"
//               />
//               <textarea
//                 rows={8}
//                 style={{
//                   width: "100%",
//                   padding: "8px 0 8px 4px",
//                   marginBottom: "8px"
//                 }}
//                 placeholder="Message"
//                 type="textarea"
//               />
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-end",
//                   justifyContent: "flex-end",
//                   marginBottom: 16
//                 }}
//               >
//                 <CustomButton>Submit</CustomButton>
//               </div>
//             </InputContainer> */}
//           </div>
//         </Parallax>
//       </Wrapper>
//     );
//   }
// }

export default Contact;

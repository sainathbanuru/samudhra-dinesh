import React from "react";
import styled from "styled-components";
import Link from "next/link";

import DHeader from "../components/desktop/header";
import Footer from "../components/desktop/footer";
import Desktop from "../components/common/desktop";
import Mobile from "../components/common/mobile";
import MHeader from "../components/mobile/header";
import Header from "../components/common/heading";
import { ParallaxProvider } from "react-scroll-parallax";
import PlainParallax from "../components/desktop/plainParallax";
import PlainParallaxMobile from "../components/mobile/plainParallaxMobile";

import { firestore, storage } from "../components/firebase";
import Heading from "../components/common/heading";
import Text from "../components/common/Text";
import { Helmet } from "react-helmet";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

const Container = styled.div`
  display: grid;
  grid-gap: 16px;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    max-width: 1024px;
  }
`;

{
  /* <Container style={{ margin: "0 auto" }}>
      {blogs.filter(blog => {
        const tags = blog.categories.split(",");
        const tagsWithoutSpace = tags.map(tag => tag.trim());
        return tagsWithoutSpace.includes(tag) || tag == "All";
        // if (tagsWithoutSpace.includes(tag) || tag == "All") {
        //   return (
        //     <Link
        //       href={`/blogLayout?id=${blog.id}`}
        //       as={`/blogLayout/${blog.title}`}
        //     >
        //       <div
        //         key={blog.title}
        //         style={{
        //           height: 400,
        //           backgroundColor: blog.color || "red",
        //           display: "flex",
        //           alignItems: "flex-end",
        //           margin: 32,
        //           padding: 16,
        //           position: "relative",
        //           cursor: "pointer",
        //           opacity: 0.6
        //         }}
        //       >
        //         <Header color={"white"}>{blog.title}</Header>
        //       </div>
        //     </Link>
        //   );
        // }
      })}
    </Container> */
}

const BlogItem = ({ blogs, selected, tag }) => {
  const filteredBlogs = blogs.filter(blog =>
    ["All", ...blog.categories.split(",")].map(tag => tag.trim()).includes(tag)
  );
  return (
    <Container style={{ margin: "0 auto" }}>
      {filteredBlogs.map(blog => (
        <Link
          href={`/blogLayout?id=${blog.id}`}
          as={`/blogLayout/${blog.title}`}
        >
          <div
            key={blog.title}
            style={{
              height: 400,
              backgroundColor: blog.color || "red",
              display: "flex",
              alignItems: "flex-end",
              margin: 32,
              padding: 16,
              position: "relative",
              cursor: "pointer",
              opacity: 0.6
            }}
          >
            <Header color={"white"}>{blog.title}</Header>
          </div>
        </Link>
      ))}
    </Container>
  );
};

class Blog extends React.Component {
  state = {
    blogs: [],
    selected: 0,
    tag: "All"
  };

  unsubscribeFromFirestore = null;

  componentDidMount = () => {
    this.unsubscribeFromFirestore = firestore
      .collection("blogs")
      .onSnapshot(snapshot => {
        const blogs = snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() };
        });
        this.setState({ blogs });
      });
  };

  render() {
    const tags = this.state.blogs.reduce((prev, curr) => {
      if (!curr.categories) {
        return prev;
      } else {
        const tags = curr.categories.split(",");
        const spaceRemovedTags = tags.map(tag => tag.trim());
        const setOfTags = new Set(spaceRemovedTags);
        return [...prev, ...setOfTags];
      }
    }, []);

    return (
      <>
        <Helmet>
          <title>Blog | Samudhra Indian Premier Lounge</title>
          <meta
            name={"description"}
            content={
              "Samudhra means ocean of flavors named after the emotive flavours of Indian cuisine as we proudly bring Indian food culture and its authentic taste to New Jersey"
            }
          />
        </Helmet>
        <ParallaxProvider>
          <Desktop>
            <DHeader showHeader={true} />
            <PlainParallax
              image={"/static/images/blogBanner.jpg"}
              strength={0}
            />
            <Heading style={{ textAlign: "center" }}>Blogs</Heading>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                padding: "0 20px"
              }}
            >
              {this.state.blogs.length > 0 &&
                ["All", ...tags].map((tag, index) => (
                  <Text
                    style={{
                      padding: "4px 12px",
                      border:
                        index !== this.state.selected ? "1px solid #999" : "",
                      backgroundColor:
                        index === this.state.selected ? "#999" : "white",
                      borderRadius: 16,
                      margin: "0 4px",
                      color: index === this.state.selected ? "white" : "#999",
                      cursor: "pointer",
                      marginBottom: 4
                    }}
                    onClick={() =>
                      this.setState({
                        selected: index,
                        tag
                      })
                    }
                  >
                    {tag}
                  </Text>
                ))}
            </div>
            <div style={{ margin: "0 auto" }}>
              <BlogItem
                blogs={this.state.blogs}
                selected={this.state.selected}
                tag={this.state.tag}
              />
            </div>
            {/* <MenusComponent /> */}
            <Footer />
          </Desktop>
        </ParallaxProvider>
        <ParallaxProvider>
          <Mobile>
            <MHeader />
            {/* <PlainParallax
              image={"/static/images/blogBannerMobile.jpg"}
              height={450}
              strength={0}
            /> */}

            <PlainParallaxMobile
              image={"/static/images/blogBannerMobile.jpg"}
            />
            {/* <MenusComponent /> */}
            <Heading style={{ textAlign: "center", margin: 0 }}>Blogs</Heading>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flex: 1,
                flexWrap: "wrap"
              }}
            >
              {this.state.blogs.length > 0 &&
                ["All", ...tags].map((tag, index) => (
                  <Text
                    style={{
                      padding: "4px 12px",
                      border:
                        index !== this.state.selected ? "1px solid #ddd" : "",
                      backgroundColor:
                        index === this.state.selected ? "#999" : "white",
                      borderRadius: 16,
                      margin: "0 4px",
                      color: index === this.state.selected ? "white" : "#ddd",
                      cursor: "pointer",
                      marginBottom: 4
                    }}
                    onClick={() =>
                      this.setState({
                        selected: index,
                        tag
                      })
                    }
                  >
                    {tag}
                  </Text>
                ))}
            </div>

            <div style={{ margin: "0 auto" }}>
              <BlogItem
                blogs={this.state.blogs}
                selected={this.state.selected}
                tag={this.state.tag}
              />
            </div>
            <Footer />
          </Mobile>
        </ParallaxProvider>
      </>
    );
  }
}

export default Blog;

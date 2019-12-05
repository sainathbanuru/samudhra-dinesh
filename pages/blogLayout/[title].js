import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { firestore } from "../../components/firebase";
import Header from "../../components/desktop/header";
import Mheader from "../../components/mobile/header";
import Heading from "../../components/common/heading";
import Text from "../../components/common/Text";
import Desktop from "../../components/common/desktop";
import Mobile from "../../components/common/mobile";

const Wrapper = styled.div`
  margin-top: 24px;
  font-family: Sans-Narrow-Regular;

  @media (max-width: 767px) {
    padding: 0 16px;
  }

  @media (min-width: 768px) {
    width: 75%;
  }
`;

const Image = styled.img`
  width: 100%;
  margin: 16px 0;

  @media (max-width: 767px) {
    height: 200px;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const PageWrapper = styled.div`
  background-color: ${props => (props.color ? props.color : "#fff")};
  width: 100%;
  height: 500px;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
`;

const ContentDiv = styled.div`
  @media (max-width: 767px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 80%;
  }
`;

const text = `<p>Throughout this series focused on&nbsp;<strong>web performance</strong>, you and I&nbsp;took a&nbsp;deep dive into the underlying philosophy and technological intricacies that impact performance in an online context.</p>
<p>Sometimes, I&nbsp;purposely took things slow and meandered into the all‐to‐important human side of things (probably bordering boredom), while, at other times, I&nbsp;picked up speed (for extra drama) when the more technical aspects needed to be analyzed.&nbsp;</p>
<p>Now, we are going to go bananas. 🐒 I&nbsp;believe the time is right for a&nbsp;brain‐dump of all the actionable things I&nbsp;have learned and tested throughout the years, in the WordPress ecosystem. So roll up your sleeves, put on a&nbsp;bandana, and try to keep up.</p>
<p>&nbsp;</p>
<hr class="wp-block-separator" />
<h2>&nbsp;&nbsp;</h2>
<h2 id="cache-everything"><span style="color: #ff6600;"><strong>Cache everything</strong></span></h2>
<p><span style="color: #000000;">There is no getting around this one.&nbsp;<strong>You can not have a&nbsp;performant WordPress site without some form of caching,</strong>&nbsp;at least not in this day and age.</span></p>
<p>The expectations of both users and the Googles of the world have reached such heights that no matter how fast your PHP server is, it can&rsquo;t serve up the HTML of your pages at the speed required for a&nbsp;blazing fast experience.</p>
<p>WordPress has no shortage of caching plugins that promise to take this off your plate. Sadly, the sheer volume of options doesn&rsquo;t make your life consistently easier. This is because caching, despite being on everyone&rsquo;s tongue, is not an easy problem to solve.</p>
<p>Sure, one could boil it down to: just capture the entire HTML of each page, save it as an HTML file somewhere, and then serve that directly, bypassing the PHP server.</p>
<p>The problem is that this is only half the problem, the easy part; the harder part is invalidating or refreshing the cache once you update your content (including publishing a&nbsp;new post, updating a&nbsp;plugin or theme).</p>
<p>Any self‐respecting computer engineer will tell you that the two hardest problems in computer science, by far, are &ldquo;naming things&rdquo; (I am not kidding) and &ldquo;cache invalidation.&rdquo;</p>
<p>When it comes to caching, the last thing you want to do is a&nbsp;full cache refresh &ndash; delete everything you have in the cache and let it rebuild itself. This is very resource intensive and can temporarily degrade your website performance.</p>
<p>What you want is to&nbsp;<strong>refresh the least amount of cached pages while maintaining consistency</strong>. Easier said than done with highly dynamic, interconnected pages (like the sites we have today).</p>
<p>Since you don&rsquo;t want to get bogged down into all the technical details of your site&rsquo;s content, you rely on the caching plugin to do the hard work of determining (programmatically) what should be refreshed on each modification you make. Few plugins manage to do this consistently.</p>
<p>My go‐to solution for caching today is&nbsp;<a href="https://wp-rocket.me/" target="_blank" rel="noreferrer noopener">WP Rocket</a>. This is hands down the most bulletproof caching solution in the WordPress ecosystem today. To top it all up, this is also one of the easiest to use &ndash; talk about win‐win situations. It is a&nbsp;premium plugin, but I&nbsp;am very confident it is worth every penny.</p>
<blockquote class="wp-block-quote">
<p>So do yourself a&nbsp;favor and don&rsquo;t bother with free solutions. You are just going to waste a&nbsp;ton of time, endure plenty of headaches, only to come back to this solution.</p>
</blockquote>
<p><em>Note: Managed WordPress hosting services usually have very good caching solutions implemented at a&nbsp;lower level (right in their infrastructure, not as WordPress plugins). You would have a&nbsp;hard time getting better performance out of a&nbsp;plugin solution (WP Rocket included). One thing to keep in mind when choosing your hosting.</em>&nbsp;</p>
<hr class="wp-block-separator" />
<h2 id="except-for-woocommerce"><strong>&hellip;except for WooCommerce</strong></h2>
<p>The dynamic nature of eCommerce makes it very hard and very tricky to cache. In the case of full‐page caching (the most common type), if a&nbsp;single thing on the page changes, the entire page cache needs to be refreshed.</p>
<p>WooCommerce pages like checkout, cart, account are always left uncached (they might be referred to as skipped or excluded). This is because 99% of the time, each visitor to those pages will see different content, so there is no point in even trying to cache them.</p>
<p>Now you may have landing pages, pricing, or product pages that adapt to the user&rsquo;s journey through your site. Those too can&rsquo;t be cached because for the same URL you are using different content depending on who is watching.</p>
<p>You will need to&nbsp;<strong>manually fine tune the caching settings</strong>&nbsp;to account for this since no plugin can be aware of these particularities of your site.</p>
<p>Even if you can&rsquo;t cache the HTML of these pages, you can still cache optimized versions of the static assets on these pages, like CSS, JS, and image files.</p>
<p>This is more the realm of art, than exact science because there is a&nbsp;truckload of factors that come into play: from your server&rsquo;s capabilities, to whether or not to use a&nbsp;CDN service, to what plugins you are using, to finally the way your theme displays things. Best to leave this part to professionals, if you can afford it.</p>
<p><em>Note: There are dedicated managed WordPress hosting services aimed explicitly at WooCommerce that, again, take care of this on a&nbsp;lower level. They are not cheap, but if your sales can take it, you might want to consider them.&nbsp;<a href="https://www.liquidweb.com/products/managed-woocommerce-hosting/" target="_blank" rel="noreferrer noopener">LiquidWeb</a>&nbsp;is one of them.</em></p>
<hr class="wp-block-separator" />
<h2 id="caching-on-steroids"><strong>Caching on steroids</strong></h2>
<p>All I&nbsp;have said so far applies in situations where you go for off‐the‐shelf, relatively cheap solutions. The kind of solutions most suited to individuals or small companies. But for the curious bunch among you, let me take a&nbsp;brief stab at explaining the way the &ldquo;big boys&rdquo; do it &ndash; just for the sake of keeping things in perspective.&nbsp;</p>
<p>As a&nbsp;site owner, you might drool over the speed of the BBCs and Amazons of the world. You might even wonder: is there a&nbsp;way my site could load this fast? Open up your umbrellas: no, it couldn&rsquo;t &ndash; not at a&nbsp;similar complexity.</p>
<p>To get to that level of performance, and keep it up there, you would need a&nbsp;totally custom site tailored to your content needs, your audience, and priorities. You simply cannot expect something off‐the‐shelf to have this kind of adaptability, even if &ldquo;it&rsquo;s just code.&rdquo;</p>
<p>The &ldquo;big boys&rdquo; have tens, most often hundreds of designers and developers working to fine‐tune that, optimize this, rebuild that using the latest and greatest technological advancement, rewrite this part for a&nbsp;minor increase in performance (and engagement). Performance at scale is hard and expensive.</p>
<p>Let me just give you a&nbsp;quick peek into such a&nbsp;high‐end approach to the problem of cache invalidation described earlier.&nbsp;</p>
<p>First,&nbsp;<em>full cache refresh is not an option</em>&nbsp;&ndash; some people will probably get fired if it comes down to that.&nbsp;</p>
<p>Second, there is&nbsp;<em>no single cache.</em>&nbsp;There are layers upon layers of caches, each dedicated to a&nbsp;specific part of the page or of the data needed on that page.&nbsp;</p>
<p>Third, a&nbsp;page is constructed from&nbsp;<em>different components,</em>&nbsp;each with their separate pipeline for generating the final HTML you see.&nbsp;</p>
<p>Forth, each distinctive page (such as the product page) is optimized to contain the&nbsp;<em>bare minimum in terms of CSS and JS</em>&nbsp;(no global theme style.css in sight).&nbsp;</p>
<p>Finally, nobody working on the&nbsp;<strong>content‐side</strong>&nbsp;of such a&nbsp;site has the smallest expectation that his or her changes will appear&nbsp;<em>immediately</em>&nbsp;live (such as a&nbsp;product description change). The changes will be&nbsp;<em>allowed to propagate</em>throughout the various layers as fast as possible&nbsp;<em>without</em>&nbsp;damaging the performance and stability of the system.</p>
<p>As you can see, it&rsquo;s OK to be curious and dream about performance Nirvana, but you need to be pragmatic about the costs and dedication involved.</p>
<hr class="wp-block-separator" />
<h2 id="not-from-your-neighborhood"><strong>Not from your neighborhood</strong></h2>
<p>When it comes to web performance, you need to get to grips with the fact that&nbsp;<strong>what matters is the experience of your audience, no matter where they might be located.</strong></p>
<p>Often, people test their site on their own computer and phone, both on the same broadband connection. Sometimes, they might ask a&nbsp;friend or two to do the same from their home &ndash; most often they live nearby and have about the same income, hence the same high internet speed.</p>
<p>To mitigate this bias, a&nbsp;whole host of online services have sprung up, including the one from the &ldquo;big daddy&rdquo; of web performance, Google&rsquo;s PageSpeed Insights. They analyze things algorithmically, following the latest guidelines and recommendations, from various locations around the world. Problem solved, carry on.</p>
<p><strong>Not so fast.</strong>&nbsp;You need to do something with those insights, on top of the knowledge only you can possess. First, based on your target audience, you decide where your hosting should have its servers. The closer to your audience, the better.&nbsp;</p>
<p>Second, you need to gauge the geographical spread of this audience. Is it highly concentrated in a&nbsp;Californian county or a&nbsp;Swiss canton? Or are you targeting English‐speaking, bearded males in their 30s &ndash; can it get more clich&eacute; than this? &ndash; from both the US and the European Union?</p>
<p>With the first group, you can get away with just your server, but with the second one, you need to distribute things.</p>
<p><em>But Vlad, the last I&nbsp;heard we live in the 21st century, the internet is everywhere, I&nbsp;can Facetime with my friends from thousands of miles away, without a&nbsp;hitch.</em></p>
<p>Yes, it is, and yes you can. But that doesn&rsquo;t mean anything. The Internet is a&nbsp;<em>very fragile thing,</em>&nbsp;much more so than most of its users realize. The infrastructure it relies on is a&nbsp;hodgepodge of independently developed networks forced to work together to the best of their abilities.</p>
<p>Big companies like Facebook or Netflix have developed a&nbsp;plethora of technologies to mitigate such a&nbsp;reality, but only for specific usages (like video).</p>
<p><strong>CDN to the rescue.</strong>&nbsp;The name says it all: Content Delivery Network. Actually, not so much if you are not geekish at heart. A&nbsp;CDN service will spread your site&rsquo;s static assets (CSS, JS, and image files aka&nbsp;<em>the bulk of the stuff your readers wait for</em>) across a&nbsp;series of interconnected servers.&nbsp;</p>
<p>Nothing unusual if it wasn&rsquo;t for two characteristics of these servers. One, they are&nbsp;<strong>geographically distributed</strong>&nbsp;throughout the globe, thus much more likely to be closer to your readers&rsquo; location.</p>
<p>Two, they are strategically (and expensively)&nbsp;<strong>positioned right next to major Internet junctions</strong>&nbsp;(look up &ldquo;internet backbone&rdquo; if in search of adventure), thus benefiting from far higher transfer speeds across the globe.</p>
<p>So, sign‐up to a&nbsp;CDN provider of your choice (if your hosting provider doesn&rsquo;t come with one), plug it into your caching solution and let it fly.</p>
<p>&nbsp;</p>
<hr class="wp-block-separator" />
<h2>&nbsp;</h2>
<h2 id="cdn-on-steroids"><strong>CDN on steroids</strong></h2>
<p>I&rsquo;ve already mentioned Cloudflare when I&nbsp;talked about&nbsp;<a href="https://pixelgrade.com/blog/support/the-first-steps-in-website-performance/" target="_blank" rel="noreferrer noopener">choosing your hosting provider</a>, but only focused on their free plan as a&nbsp;sure way to give your site a&nbsp;performance boost, on the cheap.</p>
<p><strong>Cloudflare is the real deal when it comes to web performance.</strong>&nbsp;They have managed to build such a&nbsp;vast, comprehensive and technically advanced stack that one can only marvel at. While their free plan only skims the surface, once you start paying things really take off.</p>
<p>Think of Cloudflare as a&nbsp;way to get access to some of those &ldquo;big boys toys&rdquo; that I&rsquo;ve talked about earlier, but at a&nbsp;fraction of their cost. Hell, most of the large sites out there use them on top of their custom optimizations.</p>
<p>To consider Cloudflare a&nbsp;CDN is a&nbsp;huge understatement. Besides CDN, they provide really advanced security, automatic CSS and JS optimization, automatic image optimization and improved loading, even HTML caching (your visitors could still reach your site even if your server is down), to name a&nbsp;few. Performance and security bonanza.</p>
<p>There are some caveats since this is, after all,&nbsp;<em>a&nbsp;general service with limited flexibility,</em>&nbsp;but you should really give it a&nbsp;try if you are more of a&nbsp;technical kind. Some frictions appear when dealing with highly dynamic pages like the WooCommerce ones, but are solvable with the higher tier plans.&nbsp;</p>
<hr class="wp-block-separator" />
<h2 id="what-about-those-pesky-images"><strong>What about those pesky images</strong></h2>
<p>Love them all you can, but&nbsp;<em>images are the log in the proverbial eye.</em>&nbsp;No matter what you do to increase your&nbsp;<strong>web performance</strong>, you always revolve around them since this is the battle that decides the outcome of the war.</p>
<blockquote class="wp-block-quote">
<p>Even if you do all the caching in the world, distribute your files at the doorstep of every reader, if left unchecked, your images will still ruin everything.</p>
</blockquote>
<p>I&rsquo;ve already made my peace that you want them, despite my best efforts to explain why you shouldn&rsquo;t. So what can we do to solve this shit once and for all?</p>
<p>There is no silver bullet since you want them&nbsp;<em>because</em>&nbsp;you intend to show them to your readers. One way or another, the image file needs to get from a&nbsp;server (CDN or not) to your visitor&rsquo;s browser. That&rsquo;s a&nbsp;given.</p>
<p>The only way to gain ground is to get creative and take advantage of the limitations inherent in our hardware and minds. Welcome to the land of&nbsp;<strong>perceived performance.</strong></p>
<p>We will start by&nbsp;<strong>not loading the images at all</strong>&nbsp;(don&rsquo;t show me those bulging eyes), and play a&nbsp;game of chicken with the reader by&nbsp;<strong>loading each image as late as possible.</strong>&nbsp;Voil&agrave;,&nbsp;<strong>lazy‐loading images!</strong>&nbsp;</p>
<p>That is it. The textual content loads as fast as possible, the Googles of the world are happy that people get to actually reading faster, the images are still there for indexing and SEO gains, your readers will not know the difference (most of the time). All these because the actual trickery is mostly done in the browser via a&nbsp;bit of JS.</p>
<p><strong>Lazy‐loading images is pretty much mainstream right now.&nbsp;</strong>Caching plugins like WP Rocket provide it out‐of‐the‐box (even for videos), services like Cloudflare Pro do it for you (and take it to the extreme &ndash; think how images load on Medium).</p>
<p>All you need to do is make sure your WordPress theme plays well with it, as some layout problems might occur, especially with image heavy layouts.</p>
<hr class="wp-block-separator" />
<h2 id="what-is-going-on-with-plugins"><strong>What is going on with plugins</strong></h2>
<p>You&rsquo;ve brought your images into submission, but, somehow you are still not pleasing the metrics Gods. All your effort seems futile. Don&rsquo;t despair as you have made great strides and what remains is manageable, to some extent.</p>
<p>Most of the remaining &ldquo;red flags&rdquo; tools like PageSpeed Insights nag you about are ultimately related to your active WordPress plugins.</p>
<p>The problem is that each plugin with a&nbsp;front‐facing job is very likely to add a&nbsp;CSS and/or a&nbsp;JS file to your pages (at least). These allow the plugin to live up to its promise: display a&nbsp;cart button, show a&nbsp;slideshow of images, provide social share buttons or newsletter subscription.</p>
<p>Since each of them is a&nbsp;separate product, each needs to cover for its own needs and behave in a&nbsp;way most likely to cover all use cases, of all users (not just you).</p>
<p>In the ideal scenario, each plugin would add CSS or JS files only to the pages that actually make use of its features. The reality is often somewhere between&nbsp;<em>&ldquo;I have no reliable way of knowing, so I&nbsp;will load my stuff everywhere&rdquo;</em>&nbsp;and&nbsp;<em>&ldquo;I could restrain myself, but I&nbsp;forgot or my developer hasn&rsquo;t improved me.&rdquo;</em></p>
<p>This leaves you, the site owner, with that&nbsp;<strong>endless list of files being loaded</strong>&nbsp;ruining your previous performance efforts. The solution is neither straight forward, neither without risks.</p>
<p><em>Note: Besides plugins, analytics, and tracking services (including social buttons) seem to load JS files like it&rsquo;s Christmas. Exercise extra restraint with those.&nbsp;</em></p>
<p>One way to clean up your pages from unneeded files are plugins that allow you to decide on a&nbsp;page by page basis (or group of pages) what CSS or JS files should not be loaded since they are not being actually used. One such plugin is&nbsp;<a href="https://perfmatters.io/" target="_blank" rel="noreferrer noopener">Perfmatters</a>.</p>
<p>Armed with such a&nbsp;tool, you start with your most important pages (probably your front page is a&nbsp;good place to start), look at the provided list of files and based on your knowledge decide if it should be there or not.</p>
<p><strong>You can easily break things</strong>&nbsp;if you don&rsquo;t have the full picture, so proceed with care, or leave it up to a&nbsp;professional. Thankfully, there are undo and reset buttons.</p>`;

const BlogLayout = props => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [color, setColor] = useState("");

  const router = useRouter();
  useEffect(() => {
    async function fetchBlog() {
      const id = router.query.id;
      const blog = await firestore.doc(`blogs/${id}`);
      blog.get().then(blogDetails => {
        // console.log(blogDetails.data());
        const blogData = blogDetails.data();
        setTitle(blogData.title);
        setDescription(blogData.description);
        setImage(blogData.photoUrl);
        setColor(blogData.color);
        setContent(blogData.content);
      });
    }
    fetchBlog();
  }, []);
  return (
    <>
      <Desktop>
        <Header isFixed={false} textColor={"white"} backgroundColor={color} />
        <PageWrapper color={color}>
          <Wrapper>
            <Heading
              style={{
                margin: 0,
                color: "#fff",
                fontSize: 48,
                textAlign: "center",
                marginTop: 80
              }}
            >
              {title}
            </Heading>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              {description}
            </Text>
            <img
              src={image}
              style={{
                width: "100%",
                height: 500,
                marginTop: 64,
                marginBottom: 64
              }}
              alt={title}
            />

            <div
              dangerouslySetInnerHTML={{ __html: content }}
              style={{ width: "80%" }}
            />
          </Wrapper>
        </PageWrapper>
      </Desktop>
      <Mobile>
        <Mheader />
        <PageWrapper>
          <Wrapper>
            <Heading
              style={{
                margin: 0,
                color: "#fff",
                fontSize: 48,
                textAlign: "center",
                marginTop: 80
              }}
            >
              Take your WordPress site performance through the roof
            </Heading>
            <Text style={{ color: "#fff", textAlign: "center" }}>
              Arm yourself with actionable insights about what you can do to
              really increase your WordPress site performance. No fluff, just
              action.
            </Text>
            <Image
              src={
                "https://image.shutterstock.com/z/stock-photo-hard-apple-cider-cocktail-with-fall-cinnamon-cardamom-and-star-anise-693822172.jpg"
              }
            />

            <ContentDiv dangerouslySetInnerHTML={{ __html: text }} />
          </Wrapper>
        </PageWrapper>
      </Mobile>
    </>
  );
};

export default BlogLayout;

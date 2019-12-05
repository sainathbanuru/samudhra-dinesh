import React, { useState, useEffect } from "react";

const GtagScript = props => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded && (
        <>
          <script
            id="gtm-js"
            async
            src={"https://www.googletagmanager.com/gtag/js?id=UA-145828496-2"}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-145828496-2');
        `
            }}
          />
        </>
      )}
    </>
  );
};

export default GtagScript;

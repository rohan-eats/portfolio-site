
import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
function SEO({ description, lang, meta, title }) {

    const { site } = useStaticQuery(
        graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
    );


    const defaultTitle = site.siteMetadata?.title;


    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={defaultTitle}
            // titleTemplate={`%s | ${defaultTitle}`}
            // titleTemplate={defaultTitle ? defaultTitle : defaultTitle}
            meta={[
                {
                    name: `description`,
                    content: ``,
                },
                {
                    property: `og:site_name`,
                    content: ``,
                },
                {
                    property: `og:title`,
                    content: ``,
                },
                {
                    property: `og:description`,
                    content: ``,
                },
                {
                    property: `og:image`,
                    itemprop: `image`,
                    content: ``,
                },
                {
                    property: `og:image:width`,
                    content: `300`,
                },
                {
                    property: `og:image:height`,
                    content: `300`,
                },
                {
                    property: `og:image:type`,
                    content: `image/jpeg`,
                },

                {
                    property: `og:url`,
                    content: ``,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: ``,
                },

                {
                    name: `twitter:title`,
                    content: ``,
                },
                {
                    name: `twitter:url`,
                    content: ``,
                },
                {
                    name: `twitter:description`,
                    content: ``,
                },
                {
                    name: `twitter:image`,
                    content: ``,
                },
            ].concat(meta)}
        />
    );
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string,
};

export default SEO;
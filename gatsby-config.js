module.exports = {
  siteMetadata: {
    title: "get-test",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};

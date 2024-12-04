module.exports = function (eleventyConfig){
    eleventyConfig.addPassthroughCopy("_src/_includes/");
    eleventyConfig.addPassthroughCopy("_src/_data/");
    eleventyConfig.addPassthroughCopy("./_src/CSS/*");
    eleventyConfig.addPassthroughCopy("./_src/images/*");
    eleventyConfig.addPassthroughCopy("./_src/imageMetadataScript.js");
    eleventyConfig.addPassthroughCopy("./_src/image_metadata.json");
    eleventyConfig.addPassthroughCopy("./_src/backgroundScroll.js");
    eleventyConfig.addPassthroughCopy("./_src/interact.js");
    return{
        dir: {
            input: "_src",
            output: "_site"
        },
    };
};

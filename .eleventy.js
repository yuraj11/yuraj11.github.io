module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css/");
    eleventyConfig.addPassthroughCopy("image/*");
    eleventyConfig.addPassthroughCopy("old-files/");
    eleventyConfig.addPassthroughCopy({"favicon/" : "/"});
};
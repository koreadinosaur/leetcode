/**
 * @param {string} text
 * @return {string}
 30분
 */
var entityParser = function(text) {
    return text.replaceAll('&quot;', '"')
    .replaceAll('&apos;', "'")
    .replaceAll('&gt;', '>')
    .replaceAll('&lt;', '<')
    .replaceAll('&frasl;', '/')
    .replaceAll('&amp;', '&');
};
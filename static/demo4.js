/**
 * Same example ... but with the suck removed.
 */
function fetchUrls(urls, callback) {
    var responses = [];
    _fetch(urls);
    function _fetch(urls) {
        if (urls.length) {
            var url = urls.shift();
            $.get(url, function(response) {
                console.log('Fetched URL:', url, 'and got:', response);
                responses.push(response);
                _fetch(urls);
            });
        } else {
            callback(responses);
        }
    }
}

fetchUrls(['/api/herp', '/api/derp', '/api/flarp', '/api/blarp'], function(responses) {
    console.log('Done. Responses:', responses);
});

/**
 * Example: Downloading a list of URLs, one after another.
 *
 * This approach is bad.
 *
 * Why?
 *  - It pollutes the scope outside your function.
 *  - It cannot be used concurrently by multiple callers.
 *  - Cumbersome return value.
 */
function fetchNextUrl() {
    var url = urlsToFetch.shift();
    $.get(url, function(response) {
        responses.push(response);
        console.log('Fetched URL:', url, 'and got:', response);
        if (urlsToFetch.length) {
            fetchNextUrl();
        } else {
            console.log('Done');
        }
    });
}

var urlsToFetch = ['/api/herp', '/api/derp', '/api/flarp', '/api/blarp'];
var responses = [];
fetchNextUrl();

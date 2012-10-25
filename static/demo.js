if (false) {
}

































if (false) {
/**
 * The shrapnel way, bad because:
 *   - Pollutes the scope outside your function.
 *   - Cannot be used concurrently by multiple callers.
 */
var urlsToFetch = ['/herp', '/derp', '/flarp', '/blarp'];
var responses = [];
fetchNextUrl();
function fetchNextUrl() {
    var url = urlsToFetch.shift();
    $.get(url, function(response) {
        responses.push(response);
        if (urlsToFetch.length) {
            fetchNextUrl();
        } else {
            console.log('Done fetching', responses.length, 'URLs');
        }
    });
}
}













if(false) {
/**
 * The self-contained way, good because:
 *   - No scope pollution
 *   - Can be called by multiple concurrent callers
 */
function fetchUrls(urls, callback) {
    var responses = [];
    _fetch(urls);
    function _fetch(urls) {
        if (urls.length) {
            var url = urls.shift();
            $.get(url, function(response) {
                responses.push(response);
                _fetch(urls);
            });
        } else {
            callback(responses);
        }
    }
}

fetchUrls(['/herp', '/derp', '/flarp', '/blarp'], function(responses) {
    console.log('Got responses:', responses.length);
});
}

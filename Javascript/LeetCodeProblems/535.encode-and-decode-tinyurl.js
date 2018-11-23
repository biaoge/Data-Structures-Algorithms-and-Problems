/*
 * [535] Encode and Decode TinyURL
 *
 * https://leetcode.com/problems/encode-and-decode-tinyurl/description/
 *
 * algorithms
 * Medium (74.75%)
 * Total Accepted:    56.5K
 * Total Submissions: 75.6K
 * Testcase Example:  '"https://leetcode.com/problems/design-tinyurl"'
 *
 * Note: This is a companion problem to the System Design problem: Design
 * TinyURL.
 * 
 * TinyURL is a URL shortening service where you enter a URL such as
 * https://leetcode.com/problems/design-tinyurl and it returns a short URL such
 * as http://tinyurl.com/4e9iAk.
 * 
 * Design the encode and decode methods for the TinyURL service. There is no
 * restriction on how your encode/decode algorithm should work. You just need
 * to ensure that a URL can be encoded to a tiny URL and the tiny URL can be
 * decoded to the original URL.
 * 
 */
/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 * 
 * 经典设计题，注意不要直接使用数字，因为:
 * 1. 不要简单用数字递增的方式，虽然简单，但是可以encode的数量会减少
 * 2. 直接使用数字会暴露当前encode的url的个数，尽量少透露信息给user
 * 3. 同一个url，可能会encode到不同的tinyUrl，有可能user会为了得到某个特别数字而拼命encode
 * 
 */

const SEED = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
const BASE = "http://tinyurl.com/";

var encode = function(longUrl) {
    if(longUrl === null || longUrl.length === 0) {
        return;
    }

    if(urlToKey.has(longUrl)) {
        return urlToKey.get(longUrl);
    }

    let key = null;
    do {
        key = [];
        for(let i = 0; i < 6; i++) {
            let r = Math.floor(Math.random() * SEED.length);
            key.push(SEED.charAt(r));
        }
    } while (keyToUrl.has(key));

    keyToUrl.set(key.join(""), longUrl);
    urlToKey.set(longUrl, key.join(""));

    return BASE + key.join("");
    
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    if(shortUrl === null || shortUrl.length === 0) {
        return;
    }
    let BaseKey = shortUrl.split("/");

    return keyToUrl.get(BaseKey[BaseKey.length - 1]);
};

var keyToUrl = new Map();
var urlToKey = new Map();

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

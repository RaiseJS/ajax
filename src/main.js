// ../main.js

/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these ajax fundamentals.
 * Copyright(C) !YEAR! Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

/**
 * RaiseJS/ajax extends your project foundation (@RaiseJS/core).
 * To embed it, you should copy the min.poly.ajax.js file in the same directory.
 * This file is for development purposes only - it is not minified, has comments and is written in ES6.
 * The RaiseJS project has a focus on offering (!) lightweight libraries. Further information can be found on our webpage.
 */

// This is a self-invoking, anonymous function. Any variable and local function used in here stays in it;
(function(doc, win, core) {
	"use strict"; // Make sure we´re not doing anything wrong
	if (typeof core === 'undefined' || core === null) { // Throw error if core doesn´t exist
		throw new Error("Please import RaiseJS/core before loading RaiseJS/ajax and try again.");
	}
	$generic.fn.ajax = $generic.fn.post = function(url, post, fn) {
		let xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
				try {
					fn(JSON.parse(this.responseText));
				} catch (e) {
					fn(this.responseText);
				}
			} else if (this.readyState == 4) {
				fn(this.status);
			}
		};
		xhttp.open("POST", url, true);
		xhttp.setRequestHeader(
			"Content-type",
			"application/x-www-form-urlencoded"
		);
		xhttp.send(post);
		return this;
	};
	$generic.fn.get = function(url, fn) {
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            try {
              fn(JSON.parse(this.responseText));
            } catch (e) {
              fn(this.responseText);
            }
          } else if (this.readyState == 4) {
            fn(this.status);
          }
        };
        xhttp.open("GET", url, true);
		xhttp.send();
		return this;
    };
})(document, window, $); // Import the $ core to extend it via $.fn . If it doesn´t exist, an error is thrown.

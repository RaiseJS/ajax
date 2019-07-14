/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these ajax fundamentals.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

"use strict";

(function (doc, win, core) {
  "use strict";

  if (typeof core === 'undefined' || core === null) {
    throw new Error("Please import RaiseJS/core before loading RaiseJS/ajax and try again.");
  }

  $generic.fn.ajax = $generic.fn.post = function (url, post, fn) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
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
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(post);
    return this;
  };

  $generic.fn.get = function (url, fn) {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
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
})(document, window, $);

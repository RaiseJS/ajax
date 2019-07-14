/**
 * RaiseJS / Raise your frontend projects to the next level! Extend your RaiseJS core with these ajax fundamentals.
 * Copyright(C) 2019 Victor Homic, the RaiseJS Project

 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License along with this program. If not, see https://www.gnu.org/licenses/.
 */

(function(f,g,e){if("undefined"===typeof e||null===e)throw Error("Please import RaiseJS/core before loading RaiseJS/ajax and try again.");$generic.fn.ajax=$generic.fn.post=function(d,b,a){var c=new XMLHttpRequest;c.onreadystatechange=function(){if(4==this.readyState&&200==this.status)try{a(JSON.parse(this.responseText))}catch(h){a(this.responseText)}else 4==this.readyState&&a(this.status)};c.open("POST",d,!0);c.setRequestHeader("Content-type","application/x-www-form-urlencoded");c.send(b);return this};
$generic.fn.get=function(d,b){var a=new XMLHttpRequest;a.onreadystatechange=function(){if(4==this.readyState&&200==this.status)try{b(JSON.parse(this.responseText))}catch(c){b(this.responseText)}else 4==this.readyState&&b(this.status)};a.open("GET",d,!0);a.send();return this}})(document,window,$);

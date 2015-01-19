/**
* Copyright 2014 HARMACEN CLOUD
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
 * @param obj1
 * @param obj2
 * @returns obj3 a new object based on obj1 and obj2
 */
function _mergeObjects(obj1,obj2){
    var obj3 = {};
    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
    return obj3;
}
var css={};


css.body = { 
  width:'920px', 
  padding:'20px',
  margin:"0px auto",
  "text-align":"center"
};

css.h1 = {
  "font-size":"42px"
};

css["boton-normal"] = {
  color: "#ffffff",
  border: "none",
  "background": "#333333",
  padding: "10px 18px",
  "font-size": "15px",
  //outline:"none"
};

css["btn-blue"] = _mergeObjects(css["boton-normal"],{
	"background-color": "#007FFF"
});

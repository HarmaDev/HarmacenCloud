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

function doGet( e ) {
  //QUnit.urlParams( e.parameter );
  QUnit.config({ title: "Proyecto de prueba de QUnit" });
  QUnit.load( misTests );
  return QUnit.getHtml();
};

// Importa las siguientes funciones:
// ok, equal, notEqual, deepEqual, notDeepEqual, strictEqual,
// notStrictEqual, throws, module, test, asyncTest, expect
QUnit.helpers(this);

function misTests() {
  
  // Definimos un módulo
  module("Módulo de test de prueba");

  // Ahora podemos definir distintos
  // El segundo parametro es el número de comprobaciones que se hacen en el test
  test("test ok - debe pasar", 1, function() {
    ok(1 == 1,"1 == 1");
  });
  test("test ok - no debe pasar", 1, function() {
    ok(1+1 == 13, "1+1 == 13");
  });
  
  test("test strictEqual - debe pasar", 1, function() {
    strictEqual(nina, undefined, "variable_undefined === undefined");
  });
  
  test("test equal - debe pasar", 1, function() {
    equal(true,true, "true == true");
  });
  test("test equal - no debe pasar", 1, function() {
    equal(true,false, "true == false");
  });
}

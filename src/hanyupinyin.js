/**
 * This is free and unencumbered software released into the public domain.
 *
 * Anyone is free to copy, modify, publish, use, compile, sell, or
 * distribute this software, either in source code form or as a compiled
 * binary, for any purpose, commercial or non-commercial, and by any
 * means.
 *
 * In jurisdictions that recognize copyright laws, the author or authors
 * of this software dedicate any and all copyright interest in the
 * software to the public domain. We make this dedication for the benefit
 * of the public at large and to the detriment of our heirs and
 * successors. We intend this dedication to be an overt act of
 * relinquishment in perpetuity of all present and future rights to this
 * software under copyright law.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 *
 * For more information, please refer to <http://unlicense.org/>
 */

/**
 * name     : hanyupinyin.js
 * version  : 4
 * updated  : 2015-07-15
 * license  : http://unlicense.org/ The Unlicense
 * git      : https://github.com/pffy/javascript-hanyupinyin
 *
 */
var HanyuPinyin = function() {

  var _hpdx = IdxHanyuPinyin,
      _input = '',
      _output = '';

  function _setInput(str) {

    str = '' + str;
    str = str.trim();

    if(!str) {
      return;
    }

    _input = str;

    if(_input && _hpdx) {
      _convert();
    }
  }

  function _convert() {

    _output = _input;

    for(var h in _hpdx) {
      _output = _output.replace((new RegExp(h, 'g')), ' ' + _hpdx[h] + ' ');
    }

    _output = _vacuum(_output);
    _output = _output.trim();
  }

  function _vacuum(str) {
    return str.replace((new RegExp('[^\\S\\n]{2,}', 'g')), ' ');
  }

  return {

    // returns string representation of this object
    toString: function() {
      return _output;
    },

    // sets input. returns this object
    setInput: function(str) {
      _setInput(str);
      return this;
    },

    // returns input for this object
    getInput: function() {
      return _input;
    }
  };
};

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Character = function () {
  function Character(attackPower, health) {
    _classCallCheck(this, Character);

    this.attackPower = attackPower;
    this.health = health;
  }
  //methods


  _createClass(Character, [{
    key: 'attack',
    value: function attack(opponent) {
      // function to attack oponent if Math.random() > 0.5
      if (Math.random > 0.5) opponent.health = -1;
    }
  }]);

  return Character;
}();

var Blue = function (_Character) {
  _inherits(Blue, _Character);

  function Blue(attackPower, health) {
    _classCallCheck(this, Blue);

    return _possibleConstructorReturn(this, (Blue.__proto__ || Object.getPrototypeOf(Blue)).call(this, attackPower, health));
  }
  //methods


  return Blue;
}(Character);

var Red = function (_Character2) {
  _inherits(Red, _Character2);

  function Red(attackPower, health) {
    _classCallCheck(this, Red);

    return _possibleConstructorReturn(this, (Red.__proto__ || Object.getPrototypeOf(Red)).call(this, attackPower, health));
  }
  //methods


  return Red;
}(Character);

//rewriting map with arrow function


var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

winnerArr.map(function (item, index) {
  return console.log({ winner: item });
});

//let and const
var foo = 'bar';
console.log(foo);

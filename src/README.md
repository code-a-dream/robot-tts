javascript-hanyupinyin
======================

JavaScript implementation of Hanyu Pinyin object


# HANYUPINYIN #

```
+ HanyuPinyin()
+ toString() : string

+ setInput(str) : HanyuPinyin
+ getInput() : string
```


# DEMO #

```javascript
var hp = new HanyuPinyin();

// tone numbers
hp.setInput('生日快樂');
console.log('' + hp); // sheng1 ri4 kuai4 le4

// input
console.log(hp.getInput()); // 生日快樂
```

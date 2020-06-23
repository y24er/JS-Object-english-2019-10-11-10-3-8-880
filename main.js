// 第一题
var user = {};
user.name = 'John';
user.surname = 'Mike';
console.log(user);
user.name = 'Peter';
console.log(user);
delete user.name;
console.log(user);

// 第二题
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};
var count = 0;
for (let key in fruit) {
	count += fruit[key];
}
console.log(count);

// console.log('-------#3')
function delay(data, ms) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(data);
        }, ms);
    })
}
delay({name: "user"}, 1000).then((data) => console.log("Hello!", data))
// так посимпатичнее вроде ;D
delay({name: "Vic"}, 1000).then((data) => console.log("Hello,", data.name + "!")) 


// console.log('-------#4')

// function getUserInfo1() {
//     return new Promise(function(resolve, reject) {
//       setTimeout(() => resolve({ name: 'Vic', age: 21, id: 1 } ), 1000);
//     });
// }
async function getUserInfo(){
    return { name: 'Vic', age: 21, id: 1 } 
}
// function getUserAvatar1(userInfo) {
//     return new Promise(function(resolve, reject) {
//       userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
//       setTimeout(() => resolve(userInfo), 1000);
//     });
// }
async function getUserAvatar(userInfo){
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg'
    return userInfo
}
// function getUserAdditionalInfo1(userInfo) {
//     return new Promise(function(resolve, reject) {
//       userInfo.interests = ['sport', 'books'];
//       setTimeout(() => resolve(userInfo), 1000);
//     });
// }
async function getUserAdditionalInfo(userInfo){
    userInfo.interests = ['sport', 'books'];
    return userInfo
}

async function getResult() { 
   let userInfo = await delay(getUserInfo(), 1000)
   let userAvatar = await delay(getUserAvatar(userInfo), 1000)
   let userAdditionalInfo = await delay(getUserAdditionalInfo(userAvatar), 1000)
   console.log(userAdditionalInfo)
}
getResult();

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    let user = await getUser();
    throw new Error('error');
}

// console.log('-------#5')

async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error')
    } catch (err) {
       console.log(err) 
    }
    
}
getInfo()
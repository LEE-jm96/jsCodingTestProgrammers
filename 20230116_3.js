/*
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(n) {
    let answer = 0;
        
    const transNum = n.toString(3);
    
    const reverseNum = transNum.split('').reverse().join('');
    
    answer = parseInt(reverseNum, 3);
    
    return answer;
}

// 메소드 몰랐을 때 정민 풀이
// function solution(n) {
//     let answer = 0;
//     let 삼진법 = "";
    
//     while(n >= 3){
//         삼진법 += n % 3;
//         n = Math.floor(n / 3);
//     }
    
//     삼진법 = 삼진법 + n;
    
//     for(let i = 0; i < 삼진법.length; i++){
//         answer += Number(삼진법[i] * Math.pow(3, 삼진법.length - i - 1))
//     }
    
//     return answer;
// }

/*
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로만 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
0 ≤ s ≤ e < my_string의 길이
*/

function solution(my_string, s, e) {
    let arr = my_string.split("");
    let reverseStr = "";
    for(let i = e; i >= s; i--) {
        reverseStr += arr[i];
    }
    
    return my_string.substring(0, s) + reverseStr + my_string.substring(e + 1);
}

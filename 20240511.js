function solution(s) {
    if (s.length % 2 === 1) return 0;
    let answer = 0;
    let sLength = s.length;
    let compareStr = s;
    
    while(sLength > 0) {
        const stack = [];
        let answerFlag = true;
        for(let i = 0; i < compareStr.length; i++){
            if(compareStr[i] === "[" || compareStr[i] === "(" || compareStr[i] === "{"){
                stack.push(compareStr[i]);
            } else{
                const topStr = stack.pop();
                if (topStr === "[" && compareStr[i] === "]") continue;
                if (topStr === "(" && compareStr[i] === ")") continue;
                if (topStr === "{" && compareStr[i] === "}") continue;
              	answerFlag = false;
                break;       
            }
        }
        
        if(answerFlag && stack.length === 0) {
            answer += 1;
        } 
       
        const firstStr = compareStr[0];
        compareStr = compareStr.substring(1);
        compareStr = compareStr + firstStr;
        
        sLength -= 1;
    }
   
    return answer;
}

/*
문제 설명
다음 규칙을 지키는 문자열을 올바른 괄호 문자열이라고 정의합니다.

(), [], {} 는 모두 올바른 괄호 문자열입니다.
만약 A가 올바른 괄호 문자열이라면, (A), [A], {A} 도 올바른 괄호 문자열입니다. 예를 들어, [] 가 올바른 괄호 문자열이므로, ([]) 도 올바른 괄호 문자열입니다.
만약 A, B가 올바른 괄호 문자열이라면, AB 도 올바른 괄호 문자열입니다. 예를 들어, {} 와 ([]) 가 올바른 괄호 문자열이므로, {}([]) 도 올바른 괄호 문자열입니다.
대괄호, 중괄호, 그리고 소괄호로 이루어진 문자열 s가 매개변수로 주어집니다. 이 s를 왼쪽으로 x (0 ≤ x < (s의 길이)) 칸만큼 회전시켰을 때 s가 올바른 괄호 문자열이 되게 하는 x의 개수를 return 하도록 solution 함수를 완성해주세요.

제한사항
s의 길이는 1 이상 1,000 이하입니다.
*/

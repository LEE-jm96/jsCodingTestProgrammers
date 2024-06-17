const solution = n => {
    const answer = Array.from({length: n}, (v, i) => new Array(i + 1).fill(0));
    let increaseNum = 1;
    let x = -1;
    let y = 0;
    
    while(n > 0) {
        for(let i = 0; i < n; i++) {
            answer[++x][y] = increaseNum++;
        }
        for(let i = 0; i < n-1; i++) {
            answer[x][++y] = increaseNum++;
        }
        for(let i = 0; i < n-2; i++) {
            answer[--x][--y] = increaseNum++;
        }
        n -= 3;
    }

    return answer.reduce((acc, cur) => [...acc, ...cur]);
}

/*
문제 설명
정수 n이 매개변수로 주어집니다.
밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 1,000 이하입니다.
*/

function solution(dirs) {
    const answer = [];
    const currentPoint = [0, 0];

    for (let i = 0; i < dirs.length; i++) {
        const prevPoint = [...currentPoint];
        if (dirs[i] === "U") {
            if (currentPoint[1] === 5) continue;
            currentPoint[1]++;
        } else if (dirs[i] === "D") {
            if (currentPoint[1] === -5) continue;
            currentPoint[1]--;
        } else if (dirs[i] === "R") {
            if (currentPoint[0] === 5) continue;
            currentPoint[0]++;
        } else if (dirs[i] === "L") {
            if (currentPoint[0] === -5) continue;
            currentPoint[0]--;
        }

        const passPoint = [...prevPoint, ...currentPoint];
        const reversePoint = [...currentPoint, ...prevPoint];
        
        let isPass = false;
        let isReverse = false;
        
        isPass = answer.length > 0 && answer.some(point => {
            if(point[0] === passPoint[0] &&
                point[1] === passPoint[1] &&
                point[2] === passPoint[2] &&
                point[3] === passPoint[3]){
                return true;
            }        
        })
        
        isReverse = answer.length > 0 && answer.some(point => {
            if(point[0] === reversePoint[0] &&
                point[1] === reversePoint[1] &&
                point[2] === reversePoint[2] &&
                point[3] === reversePoint[3]){
                return true;
            }        
        })
     
        if (!isPass && !isReverse) answer.push(passPoint);
    }

    return answer.length;
}

/*
문제 설명
게임 캐릭터를 4가지 명령어를 통해 움직이려 합니다. 명령어는 다음과 같습니다.

U: 위쪽으로 한 칸 가기

D: 아래쪽으로 한 칸 가기

R: 오른쪽으로 한 칸 가기

L: 왼쪽으로 한 칸 가기

캐릭터는 좌표평면의 (0, 0) 위치에서 시작합니다. 좌표평면의 경계는 왼쪽 위(-5, 5), 왼쪽 아래(-5, -5), 오른쪽 위(5, 5), 오른쪽 아래(5, -5)로 이루어져 있습니다.

이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다. 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만, 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다. (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.

명령어가 매개변수 dirs로 주어질 때, 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

제한사항
dirs는 string형으로 주어지며, 'U', 'D', 'R', 'L' 이외에 문자는 주어지지 않습니다.
dirs의 길이는 500 이하의 자연수입니다.
*/

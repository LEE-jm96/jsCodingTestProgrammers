function solution(survey, choices) {
    let answer = [];
    let character = {
        "R": 0,
        "T": 0,
        "C": 0,
        "F": 0,
        "J": 0,
        "M": 0,
        "A": 0,
        "N": 0,
    }
    
    for(let i = 0; i < choices.length; i++) {
        let characterObj = {};
        characterObj[survey[i][0]] = 0;
        characterObj[survey[i][1]] = 0;
        
        if (choices[i] < 4) {
            characterObj[survey[i][0]] += 4 - choices[i];
        } else if (choices[i] > 4) {
            characterObj[survey[i][1]] += choices[i] - 4;
        }
        
        const keys = Object.keys(characterObj);
        const values = Object.values(characterObj);
        
        character[keys[0]] += values[0];
        character[keys[1]] += values[1];
    }
    
    const characterEntry = Object.entries(character);
    
    for(let i = 0; i < characterEntry.length; i += 2) {
        if (characterEntry[i][1] >= characterEntry[i+1][1]) {
            answer.push(characterEntry[i][0]);
        } else {
            answer.push(characterEntry[i+1][0]);
        }
    }

    return answer.join("");
}

/*
나만의 카카오 성격 유형 검사지를 만드려고 합니다.
성격 유형 검사는 4개의 지표에 따라 두 유형 중 하나로 결정됩니다.
1번 지표	라이언형(R)	튜브형(T)
2번 지표	콘형(C)	프로도형(F)
3번 지표	제이지형(J)	무지형(M)
4번 지표	어피치형(A)	네오형(N)
검사지에는 총 n개의 질문이 있고, 각 질문에는 (매우 비동의, 비동의, 약간 비동의, 모르겠음, 약간 동의, 동의, 매우 동의)와 같은 7개의 선택지가 있습니다.
각 선택지는 고정적인 크기의 점수를 가집니다.
매우 동의와 매우 비동의는 3점, 동의와 비동의는 2점, 약간 동의와 약간 비동의는 1점, 모르겠음은 0점입니다.
검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단합니다. 단, 하나의 지표에서 각 성격 유형 점수가 같으면 사전순으로 빠른  성격 유형을 검사자의 성격 유형이라고 판단합니다.
질문마다 판단하는 지표를 담은 1차원 문자열 배열 survey와 검사자가 각 질문마다 선택한 선택지를 담은 1차원 정수 배열 choices가 매개변수로 주어집니다.
검사자의 성격 유형 검사 결과를 지표 번호 순서대로 반환하세요.

제한 사항
1 ≤ survey의 길이 ≤ 1000
survey의 원소는 'RT', 'TR', 'FC', 'CF', 'MJ', 'JM', 'AN', 'NA' 중 하나
survey[i]의 첫번재 캐릭터는 i+1번 질문의 비동의 관련 선택지를 선택하면 받는 성격 유형
survey[i]의 두번째 캐릭터는 i+1번 질문의 동의 관련 선택지를 선택하면 받는 성격 유형
choices의 길이 = survey의 길이
choices[i]는 검사자가 선택한 i+1번째 질문의 선택지
1 ≤ choices의 원소 ≤ 7
1은 매우 비동의, 7은 매우 동의를 의미
*/

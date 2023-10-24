//1. if, else if, else
{
    // if(조건){
    //     //행동
    // } else {
    //     //행동
    // }

    // if(조건1){
    //     //행동
    // } else if(조건2) {
    //     //행동
    // } else if(조건3) {
    //     //행동
    // } else {
    //     //행동
    // }


    // const age = prompt('당신의 나이는?')
    // if(age >= 20){
    //     document.write('성인입니다.')
    // } else {
    //     document.write('청소년입니다.')
    // }
}

// { 코드 확인 필요!!!!!!!
//     const month = prompt('지금은 몇월입니까?')
//     if( month >= 3 && month <=5){
//         console.log('봄')
//     } else if{ month >= 6 && month <=8
//         console.log('여름')
//     } else if{ month >= 9 && month <=11
//         console.log('가을')
//     } else {
//         console.log('rudnf') 
//     }
// }

// 2. switch 문
{
    const site = prompt('네이버.구글,다음 중에서 즐겨사용하는 포털 사이트는?')

    switch (site ) {
        case '네이버': 
            url = 'https://naver.com'
            break;
        case '구글': 
            url = 'https://google.com'
            break;
        case '다음': 
            url = 'https://daum.net'
            break;
    
        default:
            break;
    }

    document.write(`<a href= ${url} target = '_blank'>${site}</a>`)
}
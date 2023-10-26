// // 반복문
// // while문
// {
//     let i = 3

//     while( i > 0 ) {
//         console.log(`i는 ${i}`)
//         i--
//     }
// }

// //for문
// {
//     // for(변수; 조건; 증감식){}

//     for(let i = 3; i > 0; i-- ){
//         console.log(`i는 ${i}`)
//     }
// }

// const day = ['월','화','수','목','금']

// for(let i = 0; i < day.length; i++ ){
//     console.log(day[i])
// }

//break : 반복문을 중단
// continue : 실행문을 무시하고 증감연산을 실행

// 0 ~ 10 -> 0에서 7까지만 출력
// {
//     for(let i =0; i<=10; i++) {
//         if(i > 7) break
//         console.log(i)
//     }
// }

// // 0 ~ 10 -> 홀수 또는 짝수만 출력
// {
//     for (let i = 0; i < 10; i++) {
//         // if(i % 2 == 0){
//         //     continue
//         // } //중괄호 생략 가능

//         if(i % 2 == 1){
//             continue
//         } //중괄호 생략 가능
//         console.log(i)
//     }
// }

// 연습문제
// while 구구단 6단 출력
{
    // let i = 1
    // while(i < 10 ){
    //     console.log(`6 * {$i} = ${ 6 * i}`)
    //     i++  
    // }
}

// for문으로 구구단 출력

{
    for(let i = 1; i <= 9; i++) {
        console.log(`💕${1}단 시작`)
        for(let j = 1; j <= 9; i++) {
            console.log(`${i} x ${j} = ${i * j}`)
        }
    }
}

// {
//     for(let i = 1; i <= 9; i++) {
//         console.log(`🎈 ${i}단 시작`)
//         for(let j = 1; j <= 9; j++) {
//             console.log(`${i} x ${j} = ${i * j}`)
//         }
//     }
// }
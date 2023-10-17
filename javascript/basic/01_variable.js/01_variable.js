// variable 변수
// var, let, 
// 블럭 scope


// 변수명 규칙
// - 변수는 문자와 숫자, '$'와 '_' 만 사용.
// - 첫 글자는 숫자로 시작할 수 없음. 
// - 예약어는 사용 불가 (var, let, const0)
// (예시 abc, abc123, $abc, _abc)


// 변수의 타입
// 원시데이타 : String, number, boolean(참 or 거짓/ 0,1, true, flase), null. undefined
// object : 싱글데이타를 묶어놓은 데이타
// funtion: 일급객체()

// scope block

// 1. var
// 블럭을 무시한다.\
// 읽기,쓰기 가능
{
    var myname='Tom'
    myname='Jane'
    console.log(myname)
}

console.log(myname)

// 2. let

{
    let title='html'
    console.log(title)

    title='css'
    console.log(title)
}

// console.log(title)

// 3.
// 상수 - 읽기만 가능, 변하지 않는다.

{
    const subject = 'html'
    // subject='css'
    console.log(subject)
}


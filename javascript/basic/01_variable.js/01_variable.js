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

// 4. 변수의 데이타 타입 - 자료형

// 문자형 String 
{
    const name1 ='Alice'
    const name2 ='alice'

    console.log(name1, name2)

    const firstName = 'jonh'
    const lastName = 'Snow'
    const fullName = firstName + ' ' + lastName

    
    console.log(fullName)
    console.log(`${firstName}  ${lastName}`)
}

// 숫자형 Number
{
    const num = 10
    const PI = 3.14

    console.log(`값은 ${num}이고,타입은 ${typeof num}입니다.`)
    console.log(`값은 ${PI}이고,타입은 ${typeof PI}입니다.`)
    

    const a = 1/0 
    const b = -1/0 
    const c = 'html'/10 


    console.log(a)
    console.log(b)
    console.log(c)
}

// 불(불린, 불리언) Boolean
{
    const a = true
    const b = false

    const name='Alice'
    const age='16'

    console.log(name=='Alice')
    console.log(age>20)
}

// null - 존재하지 않는 값 
// undefined - 값이 할당되지 않음
{
    const fall = null
    let winter

}

//5. 대화상자 alert, prompt, confirm 
{
    // const name = prompt('이름을 입력하세요', '예시) 영업팀')
    // alert('안녕하세요, ${name}님,환영합니다.')
    const isCheck = confirm('확인하였습니까?')
    console.log(isCheck)
}

//6. 형변환
{
    // const mathScore = prompt('수학점수는?')
    // const engScore= prompt('영어점수는?')

    // const score =(Number (mathScore)+ Number(engScore))/2
    // alert(score)
}
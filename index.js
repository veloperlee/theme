// function changeTheme(theme) {
//     // 현재 테마 클래스를 제거합니다.
//     document.body.classList.remove('red-theme', 'blue-theme', 'green-theme');
    
//     // 새로운 테마 클래스를 추가합니다.
//     document.body.classList.add(`${theme}-theme`);
// }


function changeTheme(themeColor) {
    // .color 클래스를 가진 모든 요소를 선택
    let colorElements = document.querySelectorAll('.color');

    // 각 요소의 배경색을 변경
    for (let i = 0; i < colorElements.length; i++) {
        if (themeColor === 'red') {
            colorElements[i].style.backgroundColor = '#ffdddd';
        } else if (themeColor === 'blue') {
            colorElements[i].style.backgroundColor = '#ddeeff';
        } else if (themeColor === 'green') {
            colorElements[i].style.backgroundColor = '#ddffdd';
        }
    }
}

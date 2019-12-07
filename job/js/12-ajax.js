function ajax(url) {
    let xhr = null
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }

    xhr.open('get', url)
    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {

        }
    }
}

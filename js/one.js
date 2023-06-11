const search = () => {
    const sbox = document.getElementById('search-item').value.toUpperCase()
    const storebox = document.getElementById('products')
    const pbox = document.querySelectorAll('.pbox')
    const pname = document.getElementsByTagName('h3')

    for (var i = 0; i < pname.length; i++) {

        let match = pbox[i].getElementsByTagName('h3')[0]

        let textval = match.textContent || match.innerHTML

        if (textval.toUpperCase().indexOf(sbox) > -1) {
            
            pbox[i].style.display = ''
        }
        else {
            pbox[i].style.display = 'none'
        }
    }
}
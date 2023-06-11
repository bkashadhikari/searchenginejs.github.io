let search = () => {
    let searchbox = document.getElementById('search-item').value.toUpperCase();
    console.log(searchbox)
    let storeproducts = document.getElementById('products');
    let pbox = document.querySelectorAll('.pbox');
    let pname = storeproducts.getElementsByTagName('h3');

    for (var i = 0; i < pbox.length; i++) {
        // let  match = pbox[i].getElementsByTagName('h3')[0];
        let match = pname[i]
        // console.log(match)
        if (match) {
            let textvalue = match.textContent || match.innerHTML;
            if (textvalue.toUpperCase().indexOf(searchbox) > -1) {
                pbox[i].style.display = "";
            }
            else {
                pbox[i].style.display = "none";
            }
        }
    }
}
search()

// let myName = 'My name is Bikash Adhikari';
// console.log(myName.indexOf('is'))
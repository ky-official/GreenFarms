$(document).ready(function() {

    //handle bars
    var template = Handlebars.compile(getInner('product-template'));
    var template2 = Handlebars.compile(getInner('profile-template'));


    var customer_data = {
        cust_name: 'Ezene'
    }
    var product_data = {
        pr_img: '/imgs/product_sardine_fish.jpg',
        pr_id: 'sardine',
        pr_name: 'Sardine',
        pr_label: 'price/kg',
        pr_price: '1000'
    }
    var data = template(product_data);
    for (let i = 0; i < 9; i++) {
        // $(data).appendTo('.products-container');
    }
    var data2 = template2(customer_data);
    $(data2).appendTo('.profile-container');

    log('asdfsf');


});
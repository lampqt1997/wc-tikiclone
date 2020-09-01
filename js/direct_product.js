$(document).ready(function () {
    
    
    $('.deal-box').click(function (e) { 
        e.preventDefault();
        var data_id = $(this).data('id');
        
        localStorage.setItem('data_detail',data_id);
        window.location.href = 'product_infor.html'
    });
    $('.product-box').click(function (e) { 
        e.preventDefault();
        var data_id = $(this).data('id');
        
        localStorage.setItem('data_detail',data_id);
        window.location.href = 'product_infor.html'
    });
    
   
});
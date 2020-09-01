$(document).ready(function () {
    var datas ='';
    var datas2 ='';
    var search_key_word='';
    var words = [];

    // $.when($.getJSON('data_category.json')).done(function (data) {
    //     datas = data;
    // });
    // $.when($.getJSON('data_products.json')).done(function (data) {
    // });
    
    $(document).ready(function () {
        searchs();
        
    });
    $('.search-bar-button').click(function (e) {
        e.preventDefault();
        search_key_word = $('.search-bar-input').val();
        console.log(search_key_word);
        
        addSearchKeyWord(search_key_word);
        searchs();

    });
    

    $('.search-bar-input').keypress(function (event) {
        let keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            search_key_word = $('.search-bar-input').val(); console.log(search_key_word);
            addSearchKeyWord(search_key_word);
            searchs();
        }
    });

    var addSearchKeyWord = function (word) {
        
        words.push(word);
        localStorage.setItem('words', JSON.stringify(words))
        
    };
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      });

    var filldataProductItems = function(result){
      
        
        let es = '';
        result.forEach(element => {
            es += `<div class="product-item" data-id="${element.id}">
      
        <img src="${element.thumbnail_url}" alt="" class="img-fluid deal-img">
        <p class="deal-text text-break">${element.name}</p>
        <p class="h6 text-dark product-price-sale">${formatter.format(element.price)} đ
            <small class="text-muted product-percent">-${element.discount_rate}% </small>
        </p>
        <small class="text-muted text-truncate product-price-origin"><s>${formatter.format(element.list_price)} đ</s></small>
        <p class="product-rate">
            <span><i class="fas fa-star text-warning"></i></span>
            <span><i class="fas fa-star text-warning"></i></span>
            <span><i class="fas fa-star text-warning"></i></span>
            <span><i class="fas fa-star text-secondary"></i></span>
            <span><i class="fas fa-star text-secondary"></i></span>
            <small class="text-dark quantity-comment">(${element.review_count} nhận xét)</small>
        </p>
    </div>`;
           
        });
       
        return es;
    };
    var searchs = function(){
        let words2 = JSON.parse(localStorage.getItem('words'));
        let search_key_word1 = words2[words2.length-1];
        let search_key_word2 = words2[words2.length-1].replace(/ /g,'-' );

        $.when($.getJSON('data_category.json')).done(function (data) {
            datas = data;
    
            let result = datas.categoriesItem.find(x =>
                x.name == search_key_word2);
                
            if(typeof result == 'undefined'){
                // console.log(result);
                $.when($.getJSON('data_products.json')).done(function (data2) {
                    datas2 = data2; 
                    // console.log(datas2.productBoxs);
                    let result2 = datas2.productBoxs.filter(x =>
                        x.name.includes(search_key_word1));
                        // console.log(result2);
                        if(result2.length == 0){
                            console.log('xxxxxxxxxxxxx');
                            $('.result-invisible').removeClass('d-none');
    
                            $('.result-visible').addClass('d-none');
                            
                          
                            $('.p-invisible').text('Không tìm thấy kết quả cho: '+search_key_word1);
                        }else{
                            // console.log(result2.length);
                            $('.result-invisible').addClass('d-none');
                            
                            $('.result-visible').removeClass('d-none');
                           
                            let prItems = filldataProductItems(result2);
                            // console.log(prItems);
                            
                            $('.product-list').html(prItems); 
                            $('.product-item').on('click',function (e) { 
                                e.preventDefault();
                            
                                var data_id = $(this).data('id');
                                console.log('data_id');
                                
                                localStorage.setItem('data_detail',data_id);
                                window.location.href = 'product_infor.html';    
                            });
                        
                        }

                });                
                // $('.result-invisible').removeClass('d-none');
    
                // $('.result-visible').addClass('d-none');
                
              
                // $('.p-invisible').text('Không tìm thấy kết quả cho: '+search_key_word1);
           
               
            }else{
                console.log(result);
                $('.result-invisible').addClass('d-none');
                
                $('.result-visible').removeClass('d-none');
               
                let prItems = filldataProductItems(result.productItem);
                // console.log(prItems);
                // $('.product-list').remove('.product-item');
                $('.product-list').html(prItems); 
                $('.product-item').on('click',function (e) { 
                    e.preventDefault();
                
                    var data_id = $(this).data('id');
                    console.log('data_id');
                    
                    localStorage.setItem('data_detail',data_id);
                    window.location.href = 'product_infor.html';    
                });
            
            }
            
            
        });
    };
   
});

